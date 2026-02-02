import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  console.log("API called: POST /api/bookings")
  
  try {
    const body = await request.json()
    console.log("Request body:", body)
    
    // Validate required fields
    const required = ["firstName", "lastName", "email", "phone"]
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Save to database
    const booking = await prisma.booking.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        preferredDate: body.preferredDate ? new Date(body.preferredDate) : null,
        procedure: body.procedure || null,
        message: body.message || null,
      },
    })
    
    console.log("Booking created:", booking.id)
    
    return NextResponse.json(
      { 
        message: "Booking request received", 
        bookingId: booking.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error("Booking error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    )
  }
}
