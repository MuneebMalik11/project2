'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Music, ImageIcon } from 'lucide-react'

export default function MediaCard({ item }) {
  if (!item) {
    return null; // or return a placeholder component
  }

  const { type, title, artist, image } = item;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-lg shadow-md overflow-hidden bg-green-500 dark:bg-blue-400"
    >
      <div className="relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={300}
            height={400}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-gray-800 rounded-full p-3"
          >
            {type === 'movie' ? <Play /> : <Music />}
          </motion.button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {type === 'song' && artist && (
          <p className="text-gray-600 text-sm">{artist}</p>
        )}
      </div>
    </motion.div>
  )
}