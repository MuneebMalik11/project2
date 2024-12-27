import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    }

    // Here you would typically create and return a JWT token
    // For simplicity, we're just returning a success message
    return NextResponse.json({ message: 'Login successful' }, { status: 200 })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 })
  }
}