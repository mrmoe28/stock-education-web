'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, TrendingUpIcon, GlobeAltIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import MarketOverview from '@/components/MarketOverview'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <Hero />
      <MarketOverview />
      <Features />
      <Stats />
      <Footer />
    </div>
  )
}