-- Script SQL corregido para insertar contenido en polaco
-- Ejecutar en el SQL Editor de Supabase

-- Deshabilitar RLS temporalmente
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE authors DISABLE ROW LEVEL SECURITY;
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;

-- Limpiar datos existentes (opcional)
DELETE FROM posts;
DELETE FROM authors;
DELETE FROM categories;

-- Insertar categorías
INSERT INTO categories (id, name, slug, description, color) VALUES
(1, 'Technologia', 'technologia', 'Najnowsze trendy w technologii i programowaniu', '#3B82F6'),
(2, 'Lifestyle', 'lifestyle', 'Porady dotyczące stylu życia i rozwoju osobistego', '#10B981'),
(3, 'Biznes', 'biznes', 'Strategie biznesowe i przedsiębiorczość', '#F59E0B'),
(4, 'Programowanie', 'programowanie', 'Tutoriale i wskazówki programistyczne', '#8B5CF6');

-- Insertar autores (Natalia Sikora)
INSERT INTO authors (id, name, email, bio, avatar_url, social_links) VALUES
(1, 'Natalia Sikora', 'natalia@metablog.pl', 'Ekspertka w dziedzinie technologii i programowania. Pasjonuje się nowoczesnymi rozwiązaniami AI i ich zastosowaniem w codziennym życiu.', 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face', '{"twitter": "natalia_sikora", "linkedin": "natalia-sikora", "instagram": "natalia.tech"}');

-- Insertar posts en POLACO
INSERT INTO posts (id, title, slug, excerpt, content, image_url, author_id, category_id, published, meta_title, meta_description, tags, reading_time, views) VALUES
(1, 'Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność', 
'sztuczna-inteligencja-w-2025-jak-ai-rewolucjonizuje-nasza-codziennosc', 
'Odkryj, jak sztuczna inteligencja zmienia nasze życie w 2025 roku. Od inteligentnych domów po spersonalizowaną medycynę - przyszłość już jest tutaj.', 
'# Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność

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

Nie czekajmy na przyszłość - ona już się dzieje. Kluczem jest mądre wykorzystanie możliwości AI, zachowując ludzki element w centrum wszystkich rozwiązań.

*Co myślisz o roli AI w Twoim życiu? Podziel się swoimi przemyśleniami w komentarzach!*', 
'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop', 
1, 1, true, 
'AI w 2025: Rewolucja Sztucznej Inteligencji | MetaBlog', 
'Kompletny przewodnik po zastosowaniach AI w 2025 roku. Dowiedz się, jak sztuczna inteligencja zmienia medycynę, edukację i nasze domy.', 
'["AI", "Sztuczna Inteligencja", "Technologia", "Przyszłość", "Innowacje"]'::jsonb, 
4, 0),

(2, 'Jak Zostać Programistą w 2025: Kompletny Przewodnik', 
'jak-zostac-programista-w-2025-kompletny-przewodnik', 
'Praktyczny przewodnik dla wszystkich, którzy chcą rozpocząć karierę w programowaniu. Poznaj najlepsze języki, narzędzia i strategie nauki.', 
'# Jak Zostać Programistą w 2025: Kompletny Przewodnik

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

Pamiętaj: programowanie to maraton, nie sprint!', 
'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop', 
1, 4, true, 
'Jak Zostać Programistą w 2025 | Przewodnik dla Początkujących', 
'Kompletny przewodnik dla osób chcących rozpocząć karierę w programowaniu. Języki, narzędzia, strategie nauki i praktyczne porady.', 
'["Programowanie", "Kariera", "Python", "JavaScript", "Nauka"]'::jsonb, 
6, 0),

(3, 'Work-Life Balance w Branży IT: Jak Zachować Równowagę', 
'work-life-balance-w-branzy-it-jak-zachowac-rownowage', 
'Praca w IT może być intensywna. Dowiedz się, jak utrzymać zdrową równowagę między życiem zawodowym a prywatnym.', 
'# Work-Life Balance w Branży IT: Jak Zachować Równowagę

Branża IT oferuje fantastyczne możliwości kariery, ale często wiąże się z wysokim tempem pracy i presją. Oto strategie na zachowanie zdrowej równowagi.

## Wyzwania Branży IT

### Nadgodziny i Deadliny
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

Pamiętaj: Twoje zdrowie i szczęście są ważniejsze niż każdy deadline!', 
'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop', 
1, 2, true, 
'Work-Life Balance w IT | Jak Zachować Równowagę', 
'Praktyczne strategie na utrzymanie zdrowej równowagi między życiem zawodowym a prywatnym w branży IT.', 
'["Work-Life Balance", "IT", "Kariera", "Zdrowie", "Produktywność"]'::jsonb, 
5, 0);

-- Verificar que los datos se insertaron correctamente
SELECT 'Categorías insertadas:' as mensaje, COUNT(*) as cantidad FROM categories;
SELECT 'Autores insertados:' as mensaje, COUNT(*) as cantidad FROM authors;
SELECT 'Posts insertados:' as mensaje, COUNT(*) as cantidad FROM posts;