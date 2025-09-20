const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './apps/site/.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function addNataliaSikora() {
  try {
    console.log('Agregando a Natalia Sikora como autora...')
    
    // Verificar si ya existe
    const { data: existingAuthor } = await supabase
      .from('authors')
      .select('*')
      .eq('email', 'natalia@metablog.pl')
      .single()
    
    if (existingAuthor) {
      console.log('Natalia Sikora ya existe en la base de datos:', existingAuthor)
      return existingAuthor
    }
    
    // Insertar nueva autora
    const { data, error } = await supabase
      .from('authors')
      .insert([
        {
          name: 'Natalia Sikora',
          email: 'natalia@metablog.pl',
          bio: 'Apasionada escritora y especialista en tecnología. Enfocada en crear contenido valioso sobre innovación, programación y tendencias digitales.',
          avatar_url: 'https://placehold.co/150x150',
          social_links: {
            twitter: '@nataliasikora',
            linkedin: 'natalia-sikora',
            instagram: '@natalia.tech'
          }
        }
      ])
      .select()
      .single()
    
    if (error) {
      console.error('Error insertando autora:', error)
      return null
    }
    
    console.log('Natalia Sikora agregada exitosamente:', data)
    return data
    
  } catch (error) {
    console.error('Error:', error)
  }
}

// Ejecutar función
addNataliaSikora().then(() => {
  console.log('Script completado')
  process.exit(0)
})