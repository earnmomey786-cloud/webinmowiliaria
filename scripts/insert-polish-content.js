const { createClient } = require('@supabase/supabase-js')

// Usar directamente las credenciales con la URL correcta del .env.local
const supabaseUrl = 'https://nbbrkmfxhrjpmcdhblhw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYnJrbWZ4aHJqcG1jZGhibGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODI0MzksImV4cCI6MjA3Mzk1ODQzOX0.guM70szxAg5qzwYdlyucnK2gPDCXIG2REw5XRi3xF1w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function insertDirectData() {
  try {
    console.log('🚀 Insertando datos directamente...')
    
    // Primero verificar si ya hay datos
    const { data: existingPosts } = await supabase.from('posts').select('id').limit(1)
    
    if (existingPosts && existingPosts.length > 0) {
      console.log('✅ Ya hay datos en la base de datos')
      return
    }

    // Insertar usando upsert para evitar conflictos
    console.log('📝 Insertando categorías...')
    const { error: catError } = await supabase
      .from('categories')
      .upsert([
        { id: 1, name: 'Technologia', slug: 'technologia', description: 'Najnowsze trendy w technologii i programowaniu', color: '#3B82F6' },
        { id: 2, name: 'Lifestyle', slug: 'lifestyle', description: 'Porady dotyczące stylu życia i rozwoju osobistego', color: '#10B981' },
        { id: 3, name: 'Biznes', slug: 'biznes', description: 'Strategie biznesowe i przedsiębiorczość', color: '#F59E0B' },
        { id: 4, name: 'Programowanie', slug: 'programowanie', description: 'Tutoriale i wskazówki programistyczne', color: '#8B5CF6' }
      ], { onConflict: 'slug' })

    if (catError) {
      console.log('ℹ️ Kategorías ya existen o error:', catError.message)
    }

    console.log('👤 Insertando autores...')
    const { error: authError } = await supabase
      .from('authors')
      .upsert([
        {
          id: 1,
          name: 'Natalia Sikora',
          email: 'natalia@metablog.pl',
          bio: 'Ekspertka w dziedzinie technologii i programowania. Pasjonuje się nowoczesnymi rozwiązaniami AI i ich zastosowaniem w codziennym życiu.',
          avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face',
          social_links: {
            twitter: 'natalia_sikora',
            linkedin: 'natalia-sikora',
            instagram: 'natalia.tech'
          }
        }
      ], { onConflict: 'email' })

    if (authError) {
      console.log('ℹ️ Autores ya existen o error:', authError.message)
    }

    console.log('📰 Insertando posts...')
    const { data: newPosts, error: postsError } = await supabase
      .from('posts')
      .upsert([
        {
          id: 1,
          title: 'Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność',
          slug: 'sztuczna-inteligencja-w-2025-jak-ai-rewolucjonizuje-nasza-codziennosc',
          excerpt: 'Odkryj, jak sztuczna inteligencja zmienia nasze życie w 2025 roku. Od inteligentnych domów po spersonalizowaną medycynę - przyszłość już jest tutaj.',
          content: `# Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność

Żyjemy w fascynujących czasach, kiedy sztuczna inteligencja przestaje być fantastyką naukową, a staje się integralną częścią naszego codziennego życia. W 2025 roku widzimy, jak AI transformuje każdą sferę naszej egzystencji.

## Asystenci AI w Domu

Współczesne domy stają się coraz bardziej inteligentne. Systemy AI uczą się naszych nawyków, optymalizując zużycie energii i tworząc idealne warunki do życia. Wyobraź sobie dom, który wie, kiedy wracasz z pracy i automatycznie przygotowuje idealne oświetlenie i temperaturę.

## Medycyna Personalizowana

AI rewolucjonizuje także medycynę. Algorytmy potrafią analizować obrazy medyczne z dokładnością przewyższającą lekarzy, a systemy diagnostyczne pomagają w wykrywaniu chorób nowotworowych na wczesnym etapie.

## Edukacja Przyszłości

W edukacji AI tworzy spersonalizowane ścieżki nauki, dostosowując tempo i metodę do indywidualnych potrzeb każdego ucznia. To oznacza koniec uniwersalnego podejścia "jeden rozmiar dla wszystkich".

## Wyzwania Etyczne

Oczywiście, rozwój AI niesie ze sobą także wyzwania. Musimy zadbać o prywatność danych, transparentność algorytmów i sprawiedliwy dostęp do technologii.

## Przyszłość Jest Teraz

Nie czekajmy na przyszłość - ona już się dzieje. Kluczem jest mądre wykorzystanie możliwości AI, zachowując ludzki element w centrum wszystkich rozwiązań.`,
          image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
          author_id: 1,
          category_id: 1,
          published: true,
          meta_title: 'AI w 2025: Rewolucja Sztucznej Inteligencji | MetaBlog',
          meta_description: 'Kompletny przewodnik po zastosowaniach AI w 2025 roku. Dowiedz się, jak sztuczna inteligencja zmienia medycynę, edukację i nasze domy.',
          tags: ['AI', 'Sztuczna Inteligencja', 'Technologia', 'Przyszłość', 'Innowacje'],
          reading_time: 4,
          views: 0
        },
        {
          id: 2,
          title: 'Jak Zostać Programistą w 2025: Kompletny Przewodnik',
          slug: 'jak-zostac-programista-w-2025-kompletny-przewodnik',
          excerpt: 'Praktyczny przewodnik dla wszystkich, którzy chcą rozpocząć karierę w programowaniu. Poznaj najlepsze języki, narzędzia i strategie nauki.',
          content: `# Jak Zostać Programistą w 2025: Kompletny Przewodnik

Programowanie to jedna z najbardziej perspektywicznych dziedzin w dzisiejszym świecie. Oto kompletny przewodnik, który pomoże Ci rozpocząć tę fascynującą podróż.

## Wybór Pierwszego Języka Programowania

### Python - Idealny Start
Python to doskonały wybór dla początkujących. Jest prosty w nauce, ma czytelną składnię i ogromne możliwości zastosowania.

### JavaScript - Król Internetu
JavaScript umożliwia tworzenie interaktywnych stron internetowych i aplikacji. To must-have dla każdego web developera.

## Ścieżki Rozwoju

### Frontend Development
- HTML, CSS, JavaScript
- React, Vue.js, Angular
- Responsive Design

### Backend Development
- Node.js, Python, Java
- Bazy danych
- API i microservices

## Najlepsze Zasoby do Nauki

1. **Kursy online** - Udemy, Coursera, edX
2. **Dokumentacja** - Oficjalne docs języków
3. **Projekty praktyczne** - GitHub, CodePen
4. **Społeczności** - Stack Overflow, Reddit

## Porady dla Początkujących

- **Ćwicz codziennie** - Konsystencja jest kluczowa
- **Buduj projekty** - Teoria to podstawa, praktyka to wszystko
- **Dołącz do społeczności** - Programiści chętnie pomagają
- **Nie poddawaj się** - Każdy ekspert był kiedyś początkującym

Pamiętaj: programowanie to maraton, nie sprint!`,
          image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
          author_id: 1,
          category_id: 4,
          published: true,
          meta_title: 'Jak Zostać Programistą w 2025 | Przewodnik dla Początkujących',
          meta_description: 'Kompletny przewodnik dla osób chcących rozpocząć karierę w programowaniu. Języki, narzędzia, strategie nauki i praktyczne porady.',
          tags: ['Programowanie', 'Kariera', 'Python', 'JavaScript', 'Nauka'],
          reading_time: 6,
          views: 0
        },
        {
          id: 3,
          title: 'Work-Life Balance w Branży IT: Jak Zachować Równowagę',
          slug: 'work-life-balance-w-branzy-it-jak-zachowac-rownowage',
          excerpt: 'Praca w IT może być intensywna. Dowiedz się, jak utrzymać zdrową równowagę między życiem zawodowym a prywatnym.',
          content: `# Work-Life Balance w Branży IT: Jak Zachować Równowagę

Branża IT oferuje fantastyczne możliwości kariery, ale często wiąże się z wysokim tempem pracy i presją. Oto strategie na zachowanie zdrowej równowagi.

## Wyzwania Branży IT

### Nadgodziny i Deadline'y
Projekty IT często mają napięte terminy, co może prowadzić do przepracowania i wypalenia zawodowego.

### Ciągła Nauka
Technologie zmieniają się błyskawicznie. Konieczność ciągłego uczenia się może być stresująca.

## Strategie na Work-Life Balance

### 1. Ustal Granice
- Określ godziny pracy i trzymaj się ich
- Wyłącz powiadomienia służbowe po godzinach
- Naucz się mówić "nie" nadmiernym wymaganiom

### 2. Zarządzaj Czasem Efektywnie
- Używaj technik jak Pomodoro
- Priorytetyzuj zadania
- Deleguj, gdy to możliwe

### 3. Inwestuj w Rozwój Osobisty
- Znajdź hobby niezwiązane z technologią
- Ćwicz regularnie
- Dbaj o relacje społeczne

### 4. Praca Zdalna
Wykorzystaj elastyczność pracy zdalnej:
- Oszczędzaj czas na dojazdach
- Stwórz komfortowe środowisko pracy
- Zachowaj rutynę

## Oznaki Wypalenia Zawodowego

Uważaj na:
- Chroniczne zmęczenie
- Brak motywacji
- Problemy ze snem
- Izolację społeczną

## Wsparcie w Organizacji

Dobra firma IT powinna oferować:
- Elastyczne godziny pracy
- Możliwość pracy zdalnej
- Programy wellness
- Wsparcie psychologiczne

Pamiętaj: Twoje zdrowie i szczęście są ważniejsze niż każdy deadline!`,
          image_url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop',
          author_id: 1,
          category_id: 2,
          published: true,
          meta_title: 'Work-Life Balance w IT | Jak Zachować Równowagę',
          meta_description: 'Praktyczne strategie na utrzymanie zdrowej równowagi między życiem zawodowym a prywatnym w branży IT.',
          tags: ['Work-Life Balance', 'IT', 'Kariera', 'Zdrowie', 'Produktywność'],
          reading_time: 5,
          views: 0
        }
      ], { onConflict: 'slug' })

    if (postsError) {
      console.error('Error insertando posts:', postsError)
    } else {
      console.log('✅ Posts insertados exitosamente!')
      console.log(`📰 ${newPosts ? newPosts.length : 3} posts creados`)
    }

    console.log('🎉 ¡Base de datos configurada con contenido en POLACO!')
    
  } catch (error) {
    console.error('Error:', error)
  }
}

insertDirectData()