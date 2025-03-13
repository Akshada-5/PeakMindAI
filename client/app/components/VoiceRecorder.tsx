'use client'
import React, { useState, useRef } from 'react';
import { useAnalysis } from '../context/AnalysisContext';

const VoiceRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const { setAnalysisResult } = useAnalysis();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      // Reset analysis when starting new recording
      setAnalysisResult(null);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const analyzeAudio = async () => {
    if (!audioBlob) return;

    try {
      setIsAnalyzing(true);
      // Convert blob to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = reader.result?.toString().split(',')[1];
        
        // Send to your API endpoint for analysis
        const response = await fetch('/api/analyze-audio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ audio: base64Audio }),
        });

        const analysisResult = await response.json();
        setAnalysisResult(analysisResult);
        setIsAnalyzing(false);
      };
    } catch (error) {
      console.error('Error analyzing audio:', error);
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Voice Recorder</h3>
      
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-indigo-500 hover:bg-indigo-600'
        }`}
      >
        {isRecording ? (
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <span>Stop Recording</span>
          </div>
        ) : (
          'Start Recording'
        )}
      </button>

      {audioBlob && !isRecording && (
        <div className="mt-4 space-y-4">
          <audio controls src={URL.createObjectURL(audioBlob)} className="mt-4" />
          <button
            onClick={analyzeAudio}
            disabled={isAnalyzing}
            className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 
              ${isAnalyzing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
              }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Analyzing...</span>
              </div>
            ) : (
              'Analyze Recording'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder; 