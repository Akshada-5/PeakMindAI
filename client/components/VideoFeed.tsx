'use client';

import { useEffect, useState } from 'react';

interface Stats {
  blink_count: number;
  blink_rate: number;
  stress_level: string;
}

export default function VideoFeed() {
  const [stats, setStats] = useState<Stats>({
    blink_count: 0,
    blink_rate: 0,
    stress_level: 'Normal'
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/get_stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    // Update stats every second
    const interval = setInterval(fetchStats, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStressLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'moderate':
        return 'text-orange-500';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden bg-gray-100">
        <img
          src="http://localhost:5000/video_feed"
          alt="Video Feed"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Blink Count</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.blink_count}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Blink Rate</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.blink_rate}/min</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Stress Level</h3>
          <p className={`text-2xl font-bold ${getStressLevelColor(stats.stress_level)}`}>
            {stats.stress_level}
          </p>
        </div>
      </div>
    </div>
  );
} 