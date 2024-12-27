'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Download, Star } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl font-bold"
            >
              MediaStream
            </motion.div>
          </Link>
          <div className="flex space-x-4">
            <NavItem href="/" icon={<Home className="w-5 h-5" />} text="Home" />
            <NavItem href="/download" icon={<Download className="w-5 h-5" />} text="Download" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md flex items-center space-x-2 hidden md:flex"
            >
              <Star className="w-5 h-5" />
              <span>Subscribe</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, icon, text }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center space-x-1 hover:text-gray-300"
      >
        {icon}
        <span>{text}</span>
      </motion.div>
    </Link>
  )
}