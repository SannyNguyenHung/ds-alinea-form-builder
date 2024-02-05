import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {    
    const formData = await request.formData();
    console.log(formData);
    console.log(request.nextUrl)

    return NextResponse.json({ message: "OK" });
  }