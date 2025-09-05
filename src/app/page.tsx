'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, BookOpenIcon, CurrencyDollarIcon, UserGroupIcon, TrophyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Footer />
    </div>
  )
}