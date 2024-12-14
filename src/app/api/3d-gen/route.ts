import { NextRequest, NextResponse } from 'next/server'
import { Client } from "@gradio/client"

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { prompt, height = 1024, width = 1024, steps = 8, scales = 3.5, seed = 663103 } = await req.json()
    
    const client = await Client.connect("ginipick/text3d")
    const result = await client.predict("/process_and_save_image", { 
      height,
      width,
      steps,
      scales,
      prompt,
      seed,
    })

    console.log('API Response:', JSON.stringify(result, null, 2));

    let imageUrl;
    if (Array.isArray(result.data) && result.data[0]?.url) {
      imageUrl = result.data[0].url;
    } else {
      throw new Error('Unexpected API response format');
    }

    if (!imageUrl || typeof imageUrl !== 'string') {
      throw new Error('Invalid image URL received from API');
    }

    return NextResponse.json({
      result: { url: imageUrl },
      success: true 
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to generate 3D text',
        success: false 
      },
      { status: 500 }
    )
  }
}