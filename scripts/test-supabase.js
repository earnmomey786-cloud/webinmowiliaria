const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './apps/site/.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function testConnection() {
  console.log('🔍 Verificando conexión a Supabase...')
  console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Key existe:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  
  try {
    const { data: posts, error } = await supabase.from('posts').select('id, title, published').limit(5)
    if (error) {
      console.error('❌ Error:', error)
    } else {
      console.log('✅ Posts encontrados:', posts.length)
      posts.forEach(post => console.log('📝', post.title, '- Publicado:', post.published))
    }

    const { data: categories, error: catError } = await supabase.from('categories').select('*')
    if (catError) {
      console.error('❌ Error categorías:', catError)
    } else {
      console.log('📂 Categorías encontradas:', categories.length)
      categories.forEach(cat => console.log('🏷️', cat.name))
    }
  } catch (err) {
    console.error('❌ Error de conexión:', err.message)
  }
}

testConnection()