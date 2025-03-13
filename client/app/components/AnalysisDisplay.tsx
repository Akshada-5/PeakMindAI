'use client'
import React from 'react';
import { useAnalysis } from '../context/AnalysisContext';

const AnalysisDisplay: React.FC = () => {
  const { analysisResult } = useAnalysis();

  const renderMetric = (
    label: string,
    score: number,
    description: string,
    color: string
  ) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{label}</h4>
        <div
          className={`px-3 py-1 rounded-full ${color} text-white font-medium`}
        >
          {score}%
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );

  if (!analysisResult) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Analysis Results</h3>
        <div className="p-6 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-500">
            Record your voice and click "Analyze Recording" to see the analysis results
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Analysis Results</h3>
      
      <div className="space-y-4">
        {renderMetric(
          'Tone',
          analysisResult.tone.score,
          analysisResult.tone.description,
          'bg-indigo-500'
        )}
        {renderMetric(
          'Clarity',
          analysisResult.clarity.score,
          analysisResult.clarity.description,
          'bg-purple-500'
        )}
        {renderMetric(
          'Confidence',
          analysisResult.confidence.score,
          analysisResult.confidence.description,
          'bg-pink-500'
        )}
      </div>
    </div>
  );
};

export default AnalysisDisplay; 