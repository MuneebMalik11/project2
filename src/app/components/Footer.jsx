import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">Our Story</Link></li>
              <li><Link href="/team" className="hover:text-gray-300">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/help" className="hover:text-gray-300">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/copyright" className="hover:text-gray-300">Copyright</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MediaStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}