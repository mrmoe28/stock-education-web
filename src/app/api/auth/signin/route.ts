import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // For now, just simulate login (you'll need to add database integration)
    // In a real app, you'd check against your database
    if (email === 'demo@example.com' && password === 'demo123') {
      return NextResponse.json(
        { message: 'Login successful' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 }
    )

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}