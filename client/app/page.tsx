"use client"
import FeatureCards from "./components/FeatureCards";
import Navbar from "./components/Navbar";
import { ArrowRight, Brain, Target, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <main className="pt-16">
        <section className="relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 relative">
            <div className="text-center space-y-10 mb-16">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                    Unlock Your Full
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                    Learning Potential
                  </span>
                </h1>
              </motion.div>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Transform your educational journey with AI-powered motivation tracking, personalized learning paths, and a supportive community that helps you achieve your goals.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link 
                  href="/" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
               
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div 
              className="absolute top-10 left-10 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">AI-Powered ✨</span>
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-40 right-10 hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="text-pink-600 dark:text-pink-400 font-semibold">Smart Learning 🚀</span>
              </div>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">Smart recommendations and stress detection to keep you motivated and on track.</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">Adaptive paths and challenges tailored to your unique learning style and goals.</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect with peers, join study groups, and participate in inspiring meetups.</p>
              </div>
            </motion.div>
          </div>
        </section>
        <FeatureCards />

        {/* Contact Section */}
        <section className="relative overflow-hidden py-24">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Info Cards */}
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <p className="text-gray-900 dark:text-gray-100">contact@eduai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                        <p className="text-gray-900 dark:text-gray-100">+91 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                        <p className="text-gray-900 dark:text-gray-100">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative overflow-hidden pt-24 pb-12">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PeakMindAI
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Transforming education through AI-powered learning experiences and personalized growth.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-8 h-8 bg-white/80 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/80 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/80 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/help" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/tutorials" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Subscribe to our newsletter for the latest updates and features.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div 
              className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  © 2024 EduAI. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}
