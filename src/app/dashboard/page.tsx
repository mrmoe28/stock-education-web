'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  // Portfolio data
  const [portfolioValue] = useState(125847.93)
  const [dailyChange] = useState(3247.83)
  const [dailyChangePercent] = useState(2.64)
  const [totalGain] = useState(25847.93)
  const [totalGainPercent] = useState(25.85)
  
  // Holdings data
  const holdings = [
    {
      symbol: 'AAPL',
      company: 'Apple Inc.',
      shares: 250,
      avgPrice: 165.32,
      currentPrice: 175.43,
      totalValue: 43857.50,
      dayChange: 2.34,
      dayChangePercent: 1.35,
      totalReturn: 10.11,
      totalReturnPercent: 6.11
    },
    {
      symbol: 'MSFT',
      company: 'Microsoft Corp.',
      shares: 75,
      avgPrice: 385.21,
      currentPrice: 378.85,
      totalValue: 28413.75,
      dayChange: -5.21,
      dayChangePercent: -1.36,
      totalReturn: -6.36,
      totalReturnPercent: -1.65
    },
    {
      symbol: 'GOOGL',
      company: 'Alphabet Inc.',
      shares: 150,
      avgPrice: 138.45,
      currentPrice: 142.56,
      totalValue: 21384.00,
      dayChange: 1.87,
      dayChangePercent: 1.33,
      totalReturn: 4.11,
      totalReturnPercent: 2.97
    },
    {
      symbol: 'NVDA',
      company: 'NVIDIA Corp.',
      shares: 35,
      avgPrice: 823.12,
      currentPrice: 875.28,
      totalValue: 30634.80,
      dayChange: 24.12,
      dayChangePercent: 2.84,
      totalReturn: 52.16,
      totalReturnPercent: 6.34
    }
  ]

  // Market movers
  const marketMovers = [
    { symbol: 'TSLA', price: 248.87, change: -12.45, changePercent: -4.77 },
    { symbol: 'META', price: 352.14, change: 18.23, changePercent: 5.46 },
    { symbol: 'AMZN', price: 144.23, change: 0.45, changePercent: 0.31 },
  ]

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Trading Dashboard
              </h1>
              <p className="text-xl text-gray-600">
                Welcome back, Alex Thompson
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Market Status</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-lg font-semibold text-green-600">OPEN</span>
              </div>
              <div className="text-sm text-gray-500">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Portfolio Value</div>
              <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={`flex items-center text-sm font-medium ${
              dailyChange >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {dailyChange >= 0 ? (
                <ArrowUpIcon className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 mr-1" />
              )}
              ${Math.abs(dailyChange).toFixed(2)} ({dailyChangePercent >= 0 ? '+' : ''}{dailyChangePercent.toFixed(2)}%)
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Today&apos;s P&L</div>
              <ArrowTrendingUpIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className={`text-3xl font-bold mb-1 ${
              dailyChange >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {dailyChange >= 0 ? '+' : ''}${dailyChange.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">
              {dailyChangePercent >= 0 ? '+' : ''}{dailyChangePercent.toFixed(2)}% from yesterday
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Return</div>
              <ChartBarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className={`text-3xl font-bold mb-1 ${
              totalGain >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {totalGain >= 0 ? '+' : ''}${totalGain.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">
              {totalGainPercent >= 0 ? '+' : ''}{totalGainPercent.toFixed(2)}% all time
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Buying Power</div>
              <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              $45,230.50
            </div>
            <div className="text-sm text-gray-500">
              Available to trade
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Holdings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Your Holdings</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {holdings.map((holding, index) => (
                <div key={holding.symbol} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-lg text-gray-900 mr-2">{holding.symbol}</h3>
                        <span className="text-sm text-gray-600">{holding.shares} shares</span>
                      </div>
                      <p className="text-sm text-gray-600">{holding.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        ${holding.currentPrice.toFixed(2)}
                      </div>
                      <div className={`text-sm font-medium ${
                        holding.dayChange >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {holding.dayChange >= 0 ? '+' : ''}${holding.dayChange.toFixed(2)} 
                        ({holding.dayChangePercent >= 0 ? '+' : ''}{holding.dayChangePercent.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Market Value</div>
                      <div className="font-semibold text-gray-900">
                        ${holding.totalValue.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Avg Cost</div>
                      <div className="font-semibold text-gray-900">
                        ${holding.avgPrice.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Total Return</div>
                      <div className={`font-semibold ${
                        holding.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {holding.totalReturn >= 0 ? '+' : ''}${(holding.totalReturn * holding.shares).toFixed(2)}
                        ({holding.totalReturnPercent >= 0 ? '+' : ''}{holding.totalReturnPercent.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market Movers & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Market Movers */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Movers</h2>
              <div className="space-y-3">
                {marketMovers.map((stock) => (
                  <div key={stock.symbol} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-bold text-gray-900">{stock.symbol}</div>
                      <div className="text-sm text-gray-600">${stock.price.toFixed(2)}</div>
                    </div>
                    <div className={`text-right font-medium ${
                      stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <div>{stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</div>
                      <div className="text-sm">
                        {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  Buy Stocks
                </button>
                <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  Sell Holdings
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  Market Research
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  Portfolio Analysis
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}