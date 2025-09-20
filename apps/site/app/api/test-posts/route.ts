import { NextResponse } from 'next/server'
import { getRecentPosts } from '@/lib/posts'

export async function GET() {
  try {
    console.log('Intentando obtener posts...')
    const posts = await getRecentPosts(5)
    console.log('Posts obtenidos:', posts?.length || 0)
    
    return NextResponse.json({
      success: true,
      postsCount: posts?.length || 0,
      posts: posts?.map(post => ({
        id: post.id,
        title: post.title,
        published: post.published,
        created_at: post.created_at,
        author: post.author?.name,
        category: post.category?.name
      })) || [],
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error en test-posts:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}