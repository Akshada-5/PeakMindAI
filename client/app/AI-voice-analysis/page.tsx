'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import VoiceRecorder from '../components/VoiceRecorder'
import AnalysisDisplay from '../components/AnalysisDisplay'
import { AnalysisProvider } from '../context/AnalysisContext'

const VoiceAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 mt-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Voice Analysis
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Record your voice and get instant AI-powered analysis of your tone, clarity, and confidence
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                  Enhance Your Communication Skills
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our advanced AI-powered voice analysis tool helps you understand and improve your speaking patterns in real-time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100">
                        <span className="text-indigo-600">✓</span>
                      </span>
                      <span className="text-gray-700">Get detailed insights about your speaking tone</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100">
                        <span className="text-purple-600">✓</span>
                      </span>
                      <span className="text-gray-700">Measure speech clarity and articulation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-pink-100">
                        <span className="text-pink-600">✓</span>
                      </span>
                      <span className="text-gray-700">Track confidence levels in your delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <div className="w-full h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Start recording now to see your voice analysis in action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AnalysisProvider>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <VoiceRecorder />
              </div>
              
              <div className="bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <AnalysisDisplay />
              </div>
            </div>
          </AnalysisProvider>

          <div className="mt-12 text-center">
            <div className="inline-flex gap-4 items-center justify-center p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-sm text-gray-600">High Quality Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-600">Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-sm text-gray-600">Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VoiceAnalysisPage
