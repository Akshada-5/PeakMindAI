'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisResult {
  tone: {
    score: number;
    description: string;
  };
  clarity: {
    score: number;
    description: string;
  };
  confidence: {
    score: number;
    description: string;
  };
}

interface AnalysisContextType {
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  return (
    <AnalysisContext.Provider value={{ analysisResult, setAnalysisResult }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
} 