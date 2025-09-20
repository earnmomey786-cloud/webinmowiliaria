import { supabase, Post, Author, Category } from './supabase'

// Obtener todos los posts publicados
export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return data as (Post & { author: Author; category: Category })[]
}

// Obtener un post por slug
export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data as Post & { author: Author; category: Category }
}

// Obtener posts por categoría
export async function getPostsByCategory(categorySlug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('published', true)
    .eq('category.slug', categorySlug)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }

  return data as (Post & { author: Author; category: Category })[]
}

// Obtener posts populares (por views)
export async function getPopularPosts(limit: number = 5) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('published', true)
    .order('views', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching popular posts:', error)
    return []
  }

  return data as (Post & { author: Author; category: Category })[]
}

// Obtener posts recientes
export async function getRecentPosts(limit: number = 5) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }

  return data as (Post & { author: Author; category: Category })[]
}

// Incrementar views de un post
export async function incrementPostViews(postId: number) {
  const { error } = await supabase.rpc('increment_post_views', {
    post_id: postId
  })

  if (error) {
    console.error('Error incrementing views:', error)
  }
}

// Buscar posts
export async function searchPosts(query: string) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .eq('published', true)
    .or(`title.ilike.%${query}%, content.ilike.%${query}%, excerpt.ilike.%${query}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching posts:', error)
    return []
  }

  return data as (Post & { author: Author; category: Category })[]
}

// Obtener todas las categorías
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data as Category[]
}

// Obtener autor por ID
export async function getAuthor(id: number) {
  const { data, error } = await supabase
    .from('authors')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching author:', error)
    return null
  }

  return data as Author
}

// Obtener todos los autores
export async function getAllAuthors() {
  const { data, error } = await supabase
    .from('authors')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching authors:', error)
    return []
  }

  return data as Author[]
}

// Función para generar slug único
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    // Reemplazar caracteres especiales polacos
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    // Reemplazar espacios y caracteres especiales
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Función para calcular tiempo de lectura
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Crear nuevo post
export interface CreatePostData {
  title: string
  excerpt: string
  content: string
  image_url: string
  author_id: number
  category_id: number
  published?: boolean
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

export async function createPost(postData: CreatePostData) {
  const slug = generateSlug(postData.title)
  const reading_time = calculateReadingTime(postData.content)
  
  // Verificar que el slug sea único
  const { data: existingPost } = await supabase
    .from('posts')
    .select('id')
    .eq('slug', slug)
    .single()
  
  if (existingPost) {
    throw new Error(`Ya existe un post con el slug: ${slug}`)
  }
  
  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        ...postData,
        slug,
        reading_time,
        views: 0,
        published: postData.published ?? false
      }
    ])
    .select(`
      *,
      author:authors(*),
      category:categories(*)
    `)
    .single()

  if (error) {
    console.error('Error creating post:', error)
    throw error
  }

  return data as Post & { author: Author; category: Category }
}