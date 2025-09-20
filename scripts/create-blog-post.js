const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './apps/site/.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan variables de entorno de Supabase')
  console.log('URL:', supabaseUrl)
  console.log('Key existe:', !!supabaseKey)
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function createBlogPost() {
  try {
    // Generar slug
    const title = "Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność"
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/ą/g, 'a')
      .replace(/ć/g, 'c')
      .replace(/ę/g, 'e')
      .replace(/ł/g, 'l')
      .replace(/ń/g, 'n')
      .replace(/ó/g, 'o')
      .replace(/ś/g, 's')
      .replace(/ź/g, 'z')
      .replace(/ż/g, 'z')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

    const content = `
# Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność

Żyjemy w fascynujących czasach, kiedy sztuczna inteligencja przestaje być fantastyką naukową, a staje się integralną częścią naszego codziennego życia. W 2025 roku widzimy, jak AI transformuje każdą sferę naszej egzystencji.

## Asystenci AI w Domu

Współczesne domy stają się coraz bardziej inteligentne. Systemy AI uczą się naszych nawyków, optymalizując zużycie energii i tworząc idealne warunki do życia. Wyobraź sobie dom, który wie, kiedy wracasz z pracy i automatycznie przygotowuje idealne oświetlenie i temperaturę.

## Medycyna Personalizowana

AI rewolucjonizuje także medycynę. Algorytmy potrafią analizować obrazy medyczne z dokładnością przewyższającą lekarzy, a systemy diagnostyczne pomagają w early detection chorób nowotworowych.

## Edukacja Przyszłości

W edukacji AI tworzy spersonalizowane ścieżki nauki, dostosowując tempo i metodę do indywidualnych potrzeb każdego ucznia. To oznacza koniec uniwersalnego podejścia "jeden rozmiar dla wszystkich".

## Wyzwania Etyczne

Oczywiście, rozwój AI niesie ze sobą także wyzwania. Musimy zadbać o prywatność danych, transparentność algorytmów i sprawiedliwy dostęp do technologii.

## Przyszłość Jest Teraz

Nie czekajmy na przyszłość - ona już się dzieje. Kluczem jest mądre wykorzystanie możliwości AI, zachowując ludzki element w centrum wszystkich rozwiązań.

*Co myślisz o roli AI w Twoim życiu? Podziel się swoimi przemyśleniami w komentarzach!*
    `

    const postData = {
      title,
      slug,
      excerpt: "Odkryj, jak sztuczna inteligencja zmienia nasze życie w 2025 roku. Od inteligentnych domów po spersonalizowaną medycynę - przyszłość już jest tutaj.",
      content: content.trim(),
      image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      author_id: 1, // Natalia Sikora
      category_id: 1, // Technologia
      published: true,
      meta_title: "AI w 2025: Rewolucja Sztucznej Inteligencji | MetaBlog",
      meta_description: "Kompletny przewodnik po zastosowaniach AI w 2025 roku. Dowiedz się, jak sztuczna inteligencja zmienia medycynę, edukację i nasze domy.",
      tags: ["AI", "Sztuczna Inteligencja", "Technologia", "Przyszłość", "Innowacje"],
      reading_time: 4,
      views: 0
    }

    console.log('Tworzę nowy post:', title)
    
    const { data, error } = await supabase
      .from('posts')
      .insert([postData])
      .select(`
        *,
        author:authors(*),
        category:categories(*)
      `)
      .single()

    if (error) {
      console.error('Błąd podczas tworzenia posta:', error)
      return
    }

    console.log('✅ Post został utworzony pomyślnie!')
    console.log('Tytuł:', data.title)
    console.log('Slug:', data.slug)
    console.log('Autor:', data.author.name)
    console.log('Kategoria:', data.category.name)
    console.log('URL:', `https://yoursite.com/single-post/${data.slug}`)

  } catch (error) {
    console.error('Błąd:', error)
  }
}

createBlogPost()