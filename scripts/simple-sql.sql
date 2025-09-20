-- Limpiar y configurar base de datos
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE authors DISABLE ROW LEVEL SECURITY;
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;

DELETE FROM posts;
DELETE FROM authors;
DELETE FROM categories;

-- Insertar categorías
INSERT INTO categories (id, name, slug, description, color) VALUES
(1, 'Technologia', 'technologia', 'Najnowsze trendy w technologii i programowaniu', '#3B82F6'),
(2, 'Lifestyle', 'lifestyle', 'Porady dotyczące stylu życia i rozwoju osobistego', '#10B981'),
(3, 'Biznes', 'biznes', 'Strategie biznesowe i przedsiębiorczość', '#F59E0B'),
(4, 'Programowanie', 'programowanie', 'Tutoriale i wskazówki programistyczne', '#8B5CF6');

-- Insertar autor
INSERT INTO authors (id, name, email, bio, avatar_url, social_links) VALUES
(1, 'Natalia Sikora', 'natalia@metablog.pl', 'Ekspertka w dziedzinie technologii i programowania. Pasjonuje się nowoczesnymi rozwiązaniami AI i ich zastosowaniem w codziennym życiu.', 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face', '{"twitter": "natalia_sikora", "linkedin": "natalia-sikora", "instagram": "natalia.tech"}');

-- Insertar posts
INSERT INTO posts (id, title, slug, excerpt, content, image_url, author_id, category_id, published, meta_title, meta_description, reading_time, views) VALUES
(1, 'Sztuczna Inteligencja w 2025: Jak AI Rewolucjonizuje Naszą Codzienność', 
'sztuczna-inteligencja-w-2025-jak-ai-rewolucjonizuje-nasza-codziennosc', 
'Odkryj, jak sztuczna inteligencja zmienia nasze życie w 2025 roku. Od inteligentnych domów po spersonalizowaną medycynę - przyszłość już jest tutaj.', 
'# Sztuczna Inteligencja w 2025

Żyjemy w fascynujących czasach, kiedy sztuczna inteligencja przestaje być fantastyką naukową, a staje się integralną częścią naszego codziennego życia.

## Asystenci AI w Domu
Współczesne domy stają się coraz bardziej inteligentne. Systemy AI uczą się naszych nawyków, optymalizując zużycie energii.

## Medycyna Personalizowana
AI rewolucjonizuje medycynę. Algorytmy analizują obrazy medyczne z niewiarygodną dokładnością.

## Przyszłość Jest Teraz
Nie czekajmy na przyszłość - ona już się dzieje. Kluczem jest mądre wykorzystanie AI.', 
'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop', 
1, 1, true, 
'AI w 2025: Rewolucja Sztucznej Inteligencji | MetaBlog', 
'Kompletny przewodnik po zastosowaniach AI w 2025 roku.', 
4, 0),

(2, 'Jak Zostać Programistą w 2025: Kompletny Przewodnik', 
'jak-zostac-programista-w-2025-kompletny-przewodnik', 
'Praktyczny przewodnik dla wszystkich, którzy chcą rozpocząć karierę w programowaniu.', 
'# Jak Zostać Programistą w 2025

Programowanie to jedna z najbardziej perspektywicznych dziedzin w dzisiejszym świecie.

## Python - Idealny Start
Python to doskonały wybór dla początkujących. Jest prosty w nauce i ma ogromne możliwości.

## JavaScript - Król Internetu
JavaScript umożliwia tworzenie interaktywnych stron internetowych i aplikacji.

## Porady dla Początkujących
- Ćwicz codziennie
- Buduj projekty  
- Dołącz do społeczności
- Nie poddawaj się

Pamiętaj: programowanie to maraton, nie sprint!', 
'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop', 
1, 4, true, 
'Jak Zostać Programistą w 2025 | Przewodnik', 
'Kompletny przewodnik dla osób chcących rozpocząć karierę w programowaniu.', 
6, 0),

(3, 'Work-Life Balance w Branży IT: Jak Zachować Równowagę', 
'work-life-balance-w-branzy-it-jak-zachowac-rownowage', 
'Praca w IT może być intensywna. Dowiedz się, jak utrzymać zdrową równowagę.', 
'# Work-Life Balance w Branży IT

Branża IT oferuje fantastyczne możliwości kariery, ale często wiąże się z presją.

## Wyzwania Branży IT
Projekty IT często mają napięte terminy, co może prowadzić do przepracowania.

## Strategie na Work-Life Balance
1. Ustal granice
2. Zarządzaj czasem efektywnie
3. Inwestuj w rozwój osobisty
4. Wykorzystaj pracę zdalną

## Oznaki Wypalenia
- Chroniczne zmęczenie
- Brak motywacji
- Problemy ze snem

Pamiętaj: Twoje zdrowie jest najważniejsze!', 
'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop', 
1, 2, true, 
'Work-Life Balance w IT | Jak Zachować Równowagę', 
'Praktyczne strategie na utrzymanie zdrowej równowagi w branży IT.', 
5, 0);