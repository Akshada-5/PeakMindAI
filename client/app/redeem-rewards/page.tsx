'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Star, Clock, BookOpen } from 'lucide-react'
import { usePoints } from '../context/PointsContext'

interface Course {
  id: string
  title: string
  description: string
  points: number
  duration: string
  level: string
  rating: number
  reviews: number
  imageUrl: string
  skills: string[]
}

const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Advanced Web Development',
    description: 'Master modern web technologies including React, Node.js, and cloud deployment',
    points: 500,
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.8,
    reviews: 245,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    skills: ['React', 'Node.js', 'Cloud Computing']
  },
  {
    id: 'course-2',
    title: 'Data Science Fundamentals',
    description: 'Learn essential data science concepts, statistics, and Python programming',
    points: 400,
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.7,
    reviews: 189,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    skills: ['Python', 'Statistics', 'Machine Learning']
  },
  {
    id: 'course-3',
    title: 'UI/UX Design Principles',
    description: 'Create beautiful and user-friendly interfaces with modern design principles',
    points: 300,
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.9,
    reviews: 312,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    skills: ['Figma', 'Design Theory', 'Prototyping']
  },
  {
    id: 'course-4',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using React Native',
    points: 450,
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.6,
    reviews: 178,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    skills: ['React Native', 'Mobile Design', 'API Integration']
  },
  {
    id: 'course-5',
    title: 'Cybersecurity Essentials',
    description: 'Learn fundamental concepts of network security and ethical hacking',
    points: 600,
    duration: '14 weeks',
    level: 'Advanced',
    rating: 4.8,
    reviews: 156,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    skills: ['Network Security', 'Ethical Hacking', 'Risk Management']
  },
  {
    id: 'course-6',
    title: 'Digital Marketing',
    description: 'Master modern digital marketing strategies and tools',
    points: 350,
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.7,
    reviews: 223,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    skills: ['SEO', 'Social Media', 'Content Marketing']
  }
]

const Page = () => {
  const { points } = usePoints()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-20">Redeem Your Points</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exchange your hard-earned points for premium courses and unlock your potential
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-900">Your Points: {points.toLocaleString()}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                points < course.points ? 'opacity-75 grayscale' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className={`font-semibold ${
                    points >= course.points ? 'text-white' : 'text-gray-200'
                  }`}>{course.points} Points</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-sm">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium hover:shadow-sm transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md ${
                      points >= course.points
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={points < course.points}
                  >
                    <BookOpen className="w-4 h-4" />
                    {points >= course.points ? 'Redeem Now' : 'Not Enough Points'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Page
