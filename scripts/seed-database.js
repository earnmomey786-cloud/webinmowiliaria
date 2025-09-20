const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './apps/site/.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function seedDatabase() {
  try {
    console.log('Inicializando base de datos con datos de ejemplo...')
    
    // 1. Insertar categorías
    console.log('Insertando categorías...')
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .insert([
        { name: 'Technologia', slug: 'technologia', description: 'Najnowsze trendy w technologii i programowaniu', color: '#3B82F6' },
        { name: 'Lifestyle', slug: 'lifestyle', description: 'Porady dotyczące stylu życia i rozwoju osobistego', color: '#10B981' },
        { name: 'Biznes', slug: 'biznes', description: 'Strategie biznesowe i przedsiębiorczość', color: '#F59E0B' },
        { name: 'Podróże', slug: 'podroze', description: 'Przewodniki turystyczne i relacje z podróży', color: '#EF4444' },
        { name: 'Zdrowie', slug: 'zdrowie', description: 'Porady zdrowotne i fitness', color: '#8B5CF6' }
      ])
      .select()
    
    if (catError) {
      console.error('Error insertando categorías:', catError)
      return
    }
    console.log('Categorías insertadas:', categories.length)
    
    // 2. Insertar autores (incluyendo Natalia)
    console.log('Insertando autores...')
    const { data: authors, error: authError } = await supabase
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
        },
        {
          name: 'Anna Kowalska',
          email: 'anna@metablog.pl',
          bio: 'Pasjonatka technologii i pisania. Ponad 5 lat doświadczenia w branży IT i marketingu cyfrowego.',
          avatar_url: 'https://placehold.co/150x150',
          social_links: {
            twitter: '@annakowalska',
            linkedin: 'anna-kowalska',
            instagram: '@anna.tech'
          }
        }
      ])
      .select()
    
    if (authError) {
      console.error('Error insertando autores:', authError)
      return
    }
    console.log('Autores insertados:', authors.length)
    
    // 3. Insertar posts de ejemplo
    console.log('Insertando posts de ejemplo...')
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .insert([
        {
          title: 'Przyszłość sztucznej inteligencji w 2025',
          slug: 'przyszlosc-sztucznej-inteligencji-2025',
          excerpt: 'Odkryj najważniejsze trendy w AI, które będą kształtować przyszłość technologii w nadchodzącym roku.',
          content: `# Sztuczna inteligencja w 2025

Sztuczna inteligencja rozwija się w niespotykanym tempie. W tym artykule omówimy kluczowe trendy, które będą dominować w 2025 roku.

## Główne trendy AI

1. **Generatywna AI** - coraz bardziej zaawansowane modele
2. **AI w medycynie** - diagnostyka i leczenie  
3. **Autonomiczne pojazdy** - rewolucja w transporcie
4. **AI w edukacji** - personalizowane nauczanie

## Wyzwania etyczne

Wraz z rozwojem AI pojawiają się również ważne kwestie etyczne, które musimy rozważyć:

- Prywatność danych
- Transparentność algorytmów
- Wpływ na rynek pracy
- Odpowiedzialność za decyzje AI

## Podsumowanie

2025 rok zapowiada się jako przełomowy dla sztucznej inteligencji. Kluczowe będzie znalezienie równowagi między innowacją a odpowiedzialnością.`,
          image_url: 'https://placehold.co/800x450',
          author_id: authors[0].id, // Natalia
          category_id: categories[0].id, // Technologia
          published: true,
          meta_title: 'Przyszłość AI w 2025 - Trendy i Prognozy',
          meta_description: 'Analiza najważniejszych trendów w sztucznej inteligencji na 2025 rok',
          tags: ['AI', 'technologia', 'przyszłość', 'trendy'],
          reading_time: 5
        },
        {
          title: 'Jak zorganizować produktywny dzień pracy zdalnej',
          slug: 'jak-zorganizowac-produktywny-dzien-pracy-zdalnej',
          excerpt: 'Praktyczne porady dotyczące organizacji czasu i przestrzeni podczas pracy z domu.',
          content: `# Praca zdalna - klucz do sukcesu

Praca zdalna stała się standardem w wielu firmach. Oto sprawdzone sposoby na zwiększenie produktywności.

## Organizacja przestrzeni

- Wydziel dedykowane miejsce do pracy
- Zadbaj o odpowiednie oświetlenie
- Minimalizuj rozpraszające elementy

## Planowanie dnia

1. Ustal stałe godziny pracy
2. Zaplanuj regularne przerwy
3. Używaj technik zarządzania czasem

## Komunikacja z zespołem

Utrzymuj regularny kontakt z współpracownikami poprzez:
- Codzienne stand-upy
- Narzędzia do komunikacji online
- Jasne ustalenie oczekiwań

Praca zdalna może być bardzo efektywna, jeśli zastosujemy odpowiednie strategie.`,
          image_url: 'https://placehold.co/800x450',
          author_id: authors[1].id, // Anna
          category_id: categories[1].id, // Lifestyle
          published: true,
          meta_title: 'Produktywna praca zdalna - Poradnik',
          meta_description: 'Sprawdzone metody na efektywną organizację pracy z domu',
          tags: ['praca zdalna', 'produktywność', 'organizacja'],
          reading_time: 4
        }
      ])
      .select()
    
    if (postsError) {
      console.error('Error insertando posts:', postsError)
      return
    }
    console.log('Posts insertados:', posts.length)
    
    // Agregar post adicional de Natalia sobre AI
    console.log('Agregando post de Natalia sobre AI...')
    const aiPostContent = `
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
    `.trim()

    const { data: aiPost, error: aiPostError } = await supabase
      .from('posts')
      .insert([
        {
          title: 'Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność',
          slug: 'sztuczna-inteligencja-w-2025-jak-ai-rewolucjonizuje-nasza-codziennosc',
          excerpt: 'Odkryj, jak sztuczna inteligencja zmienia nasze życie w 2025 roku. Od inteligentnych domów po spersonalizowaną medycynę - przyszłość już jest tutaj.',
          content: aiPostContent,
          image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
          author_id: 1, // Natalia Sikora
          category_id: 1, // Technologia
          published: true,
          meta_title: 'AI w 2025: Rewolucja Sztucznej Inteligencji | MetaBlog',
          meta_description: 'Kompletny przewodnik po zastosowaniach AI w 2025 roku. Dowiedz się, jak sztuczna inteligencja zmienia medycynę, edukację i nasze domy.',
          tags: ['AI', 'Sztuczna Inteligencja', 'Technologia', 'Przyszłość', 'Innowacje'],
          reading_time: 4,
          views: 0
        }
      ])
      .select()
    
    if (aiPostError) {
      console.error('Error agregando post de AI:', aiPostError)
    } else {
      console.log('✅ Post de AI creado exitosamente!')
    }
    
    console.log('✅ Base de datos inicializada correctamente!')
    console.log(`📝 ${categories.length} categorías creadas`)
    console.log(`👤 ${authors.length} autores creados`)
    console.log(`📰 ${posts.length + 1} posts creados`)
    
  } catch (error) {
    console.error('Error general:', error)
  }
}

seedDatabase().then(() => {
  console.log('Inicialización completada')
  process.exit(0)
})