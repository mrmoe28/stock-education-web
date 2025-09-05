'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              📈 Stock Buddy
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              Making investing education accessible and fun for the next generation. 
              Learn, practice, and grow your wealth with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/education/basics" className="text-gray-400 hover:text-white transition-colors">Stock Basics</Link></li>
              <li><Link href="/education/charts" className="text-gray-400 hover:text-white transition-colors">Reading Charts</Link></li>
              <li><Link href="/education/risk" className="text-gray-400 hover:text-white transition-colors">Risk Management</Link></li>
              <li><Link href="/education/psychology" className="text-gray-400 hover:text-white transition-colors">Market Psychology</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Stock Buddy. All rights reserved. Educational purposes only.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}