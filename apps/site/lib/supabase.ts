import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  image_url: string
  author_id: number
  category_id: number
  published: boolean
  slug: string
  meta_title?: string
  meta_description?: string
  tags?: string[]
  reading_time: number
  views: number
  created_at: string
  updated_at: string
  // Relaciones
  author?: Author
  category?: Category
}

export interface Author {
  id: number
  name: string
  email: string
  bio: string
  avatar_url: string
  social_links: {
    twitter?: string
    linkedin?: string
    instagram?: string
    facebook?: string
  }
  created_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  color: string
  created_at: string
}

export interface Comment {
  id: number
  post_id: number
  author_name: string
  author_email: string
  content: string
  approved: boolean
  created_at: string
}