const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './apps/site/.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function testConnection() {
  try {
    console.log('Probando conexión a Supabase...')
    console.log('URL:', supabaseUrl)
    console.log('Key length:', supabaseServiceKey?.length || 0)
    
    // Verificar autores existentes
    const { data: authors, error: authorsError } = await supabase
      .from('authors')
      .select('*')
    
    if (authorsError) {
      console.error('Error obteniendo autores:', authorsError)
    } else {
      console.log('Autores existentes:', authors)
    }
    
    // Verificar categorías
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select('*')
    
    if (categoriesError) {
      console.error('Error obteniendo categorías:', categoriesError)
    } else {
      console.log('Categorías existentes:', categories)
    }
    
  } catch (error) {
    console.error('Error general:', error)
  }
}

testConnection().then(() => {
  console.log('Test completado')
  process.exit(0)
})