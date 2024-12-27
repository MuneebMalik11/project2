
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Footer from './components/Footer'
import MediaCard from './components/MediaCard'
import Navbar from './components/Navbar'
// import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/ModeToggle'

const mediaItems = [
  { id: 1, type: 'movie', title: 'Inception', image: '/images/inception.jpeg' },
  { id: 2, type: 'song', title: 'Bohemian Rhapsody', artist: 'Queen', image: '/images/bohemian.jpg' },
  { id: 3, type: 'movie', title: 'The Shawshank Redemption', image: '/images/shawshank.jpg' },
  { id: 4, type: 'song', title: 'HORIZON', artist: 'Alan Walker', image: '/images/horizon.jpg' },
  { id: 5, type: 'movie', title: 'The Godfather', image: '/images/godfather.jpg' },
  { id: 6, type: 'song', title: 'Billie Jean', artist: 'Zayn Malik', image: '/images/dusk.webp' },
  { id: 7, type: 'movie', title: 'Stranger Things', image: '/images/stranger.jpg' },
  { id: 8, type: 'song', title: 'Like a Rolling Stone', artist: 'Bob Dylan', image: '/images/rolling.jpg' },
  { id: 9, type: 'movie', title: 'The Dark Knight', image: '/images/dark.jpg' },
  { id: 10, type: 'song', title: 'JUCKBOX', artist: 'Jubin Nutyal', image: '/images/jubin.jpg' },
  { id: 11, type: 'movie', title: 'Forrest Gump', image: '/placeholder.svg?height=400&width=300' },
  { id: 12, type: 'song', title: 'Stairway to Heaven', artist: 'Led Zeppelin', image: '/placeholder.svg?height=400&width=300' },
  { id: 13, type: 'movie', title: 'The Matrix', image: '/placeholder.svg?height=400&width=300' },
  { id: 14, type: 'song', title: 'Hey Jude', artist: 'The Beatles', image: '/placeholder.svg?height=400&width=300' },
  { id: 15, type: 'movie', title: 'Goodfellas', image: '/placeholder.svg?height=400&width=300' },
  { id: 16, type: 'song', title: 'Purple Rain', artist: 'Prince', image: '/placeholder.svg?height=400&width=300' },
  { id: 17, type: 'movie', title: 'The Silence of the Lambs', image: '/placeholder.svg?height=400&width=300' },
  { id: 18, type: 'song', title: 'Wonderwall', artist: 'Oasis', image: '/placeholder.svg?height=400&width=300' },
  { id: 19, type: 'movie', title: 'Schindler\'s List', image: '/placeholder.svg?height=400&width=300' },
  { id: 20, type: 'song', title: 'Thriller', artist: 'Michael Jackson', image: '/placeholder.svg?height=400&width=300' },
]

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ModeToggle >style</ModeToggle> 
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Featured Movies and Songs
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MediaCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}