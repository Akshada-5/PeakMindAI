from flask import Flask, render_template, Response, jsonify
from flask_cors import CORS
from scipy.spatial import distance as dist
from imutils.video import VideoStream
from imutils import face_utils
import numpy as np
import imutils
import time
import dlib
import cv2
import threading
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Global variables
counter = 0
total = 0
ar_thresh = 0.3
eye_ar_consec_frame = 5
blink_rate = 0
stress_level = "Normal"
last_blink_time = time.time()
blink_times = []

# Initialize face detector and predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

def eye_aspect_ratio(eye):
    A = dist.euclidean(eye[1], eye[5])
    B = dist.euclidean(eye[2], eye[4])
    C = dist.euclidean(eye[0], eye[3])
    ear = (A + B) / (2.0 * C)
    return ear

def calculate_stress_level(blink_rate):
    if blink_rate > 30:  # High blink rate threshold (blinks per minute)
        return "High"
    elif blink_rate > 20:  # Moderate blink rate threshold
        return "Moderate"
    else:
        return "Normal"

def generate_frames():
    global counter, total, blink_rate, stress_level, last_blink_time, blink_times
    try:
        cap = cv2.VideoCapture(0)
        if not cap.isOpened():
            raise Exception("Could not open video capture device")
        
        while True:
            success, frame = cap.read()
            if not success:
                break
            
            frame = cv2.flip(frame, 1)
            frame = imutils.resize(frame, width=500)
            
            (lBegin, lEnd) = face_utils.FACIAL_LANDMARKS_IDXS["left_eye"]
            (rBegin, rEnd) = face_utils.FACIAL_LANDMARKS_IDXS["right_eye"]
            
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
            clahe_image = clahe.apply(gray)
            
            detections = detector(clahe_image, 0)
            for detection in detections:
                shape = predictor(gray, detection)
                shape = face_utils.shape_to_np(shape)
                
                left_eye = shape[lBegin:lEnd]
                right_eye = shape[rBegin:rEnd]
                
                leftEyeHull = cv2.convexHull(left_eye)
                rightEyeHull = cv2.convexHull(right_eye)
                cv2.drawContours(frame, [leftEyeHull], -1, (0, 255, 0), 1)
                cv2.drawContours(frame, [rightEyeHull], -1, (0, 255, 0), 1)
                
                left_eye_ear = eye_aspect_ratio(left_eye)
                right_eye_ear = eye_aspect_ratio(right_eye)
                avg_ear = (left_eye_ear + right_eye_ear) / 2.0
                
                if avg_ear < ar_thresh:
                    counter += 1
                else:
                    if counter >= eye_ar_consec_frame:
                        total += 1
                        current_time = time.time()
                        blink_times.append(current_time)
                        
                        # Calculate blink rate (blinks per minute)
                        current_time = time.time()
                        # Keep only blinks from the last minute
                        blink_times = [t for t in blink_times if current_time - t <= 60]
                        blink_rate = len(blink_times)
                        
                        # Update stress level
                        stress_level = calculate_stress_level(blink_rate)
                        
                    counter = 0
                
                # Add stress level indicator
                color = (0, 255, 0)  # Green for normal
                if stress_level == "High":
                    color = (0, 0, 255)  # Red for high stress
                elif stress_level == "Moderate":
                    color = (0, 165, 255)  # Orange for moderate stress
                
                cv2.putText(frame, f"Blinks: {total}", (10, 30),
                           cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
                cv2.putText(frame, f"Blink Rate: {blink_rate}/min", (10, 60),
                           cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
                cv2.putText(frame, f"Stress: {stress_level}", (10, 90),
                           cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)
            
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    except Exception as e:
        print(f"Error in generate_frames: {str(e)}")
        return None
    finally:
        if 'cap' in locals():
            cap.release()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    frames = generate_frames()
    if frames is None:
        return jsonify({'error': 'Failed to access camera'}), 500
    return Response(frames,
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/get_stats')
def get_stats():
    try:
        return jsonify({
            'blink_count': total,
            'blink_rate': blink_rate,
            'stress_level': stress_level
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 