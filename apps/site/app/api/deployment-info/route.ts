import { NextResponse } from 'next/server'

export async function GET() {
  const deploymentInfo = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supabaseConfigured: !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    siteInfo: {
      name: process.env.NEXT_PUBLIC_SITE_NAME || 'Not configured',
      description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Not configured',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'Not configured'
    },
    deployment: {
      version: '2025.09.20.2',
      author: 'Natalia Sikora',
      language: 'Polski 🇵🇱',
      features: [
        'Blog en polaco',
        'Supabase conectado',
        'Panel de admin',
        'SEO optimizado',
        'Artículos de Natalia Sikora'
      ]
    }
  }
  
  return NextResponse.json(deploymentInfo, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    }
  })
}