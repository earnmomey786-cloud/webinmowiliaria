-- Datos de ejemplo para MetaBlog Polski
-- Ejecutar DESPUÉS de crear el schema

-- 1. Insertar categorías
INSERT INTO categories (name, slug, description, color) VALUES
('Technologia', 'technologia', 'Najnowsze trendy w technologii i programowaniu', '#3B82F6'),
('Lifestyle', 'lifestyle', 'Porady dotyczące stylu życia i rozwoju osobistego', '#10B981'),
('Biznes', 'biznes', 'Strategie biznesowe i przedsiębiorczość', '#F59E0B'),
('Podróże', 'podroze', 'Przewodniki turystyczne i relacje z podróży', '#EF4444'),
('Zdrowie', 'zdrowie', 'Porady zdrowotne i fitness', '#8B5CF6');

-- 2. Insertar autor
INSERT INTO authors (name, email, bio, avatar_url, social_links) VALUES
('Anna Kowalska', 'anna@metablog.pl', 'Pasjonatka technologii i pisania. Ponad 5 lat doświadczenia w branży IT i marketingu cyfrowego.', '/avatar.png', 
'{"twitter": "@annakowalska", "linkedin": "anna-kowalska", "instagram": "@anna.tech"}');

-- 3. Insertar posts de ejemplo
INSERT INTO posts (title, slug, excerpt, content, image_url, author_id, category_id, published, meta_title, meta_description, tags, reading_time) VALUES
(
  'Przyszłość sztucznej inteligencji w 2025',
  'przyszlosc-sztucznej-inteligencji-2025',
  'Odkryj najważniejsze trendy w AI, które będą kształtować przyszłość technologii w nadchodzącym roku.',
  '# Sztuczna inteligencja w 2025

Sztuczna inteligencja rozwija się w niespotykanym tempie. W tym artykule omówimy kluczowe trendy, które będą dominować w 2025 roku.

## Główne trendy AI

1. **Generatywna AI** - coraz bardziej zaawansowane modele
2. **AI w medycynie** - diagnostyka i leczenie
3. **Autonomiczne pojazdy** - pełna automatyzacja
4. **AI w edukacji** - personalizowane nauczanie

Przyszłość wygląda bardzo obiecująco!',
  '/blog1.png',
  1,
  1,
  true,
  'Przyszłość AI 2025 - Trendy i Prognozy | MetaBlog',
  'Poznaj najważniejsze trendy sztucznej inteligencji na 2025 rok. Generatywna AI, medycyna, autonomiczne pojazdy i więcej.',
  ARRAY['AI', 'sztuczna inteligencja', 'technologia', '2025', 'trendy'],
  8
),
(
  'Jak zbudować zdrowe nawyki w 30 dni',
  'jak-zbudowac-zdrowe-nawyki-30-dni',
  'Praktyczny przewodnik po budowaniu trwałych nawyków, które zmienią Twoje życie na lepsze.',
  '# Budowanie zdrowych nawyków

Zmiana nawyków może wydawać się trudna, ale z właściwą strategią można osiągnąć sukces w zaledwie 30 dni.

## Plan na 30 dni

### Tydzień 1-7: Podstawy
- Wybierz jeden nawyk
- Zacznij od małych kroków
- Ustal stały czas

### Tydzień 8-14: Wzmocnienie
- Zwiększ intensywność
- Dodaj drugi nawyk
- Monitoruj postępy

### Tydzień 15-21: Automatyzacja
- Nawyk staje się naturalny
- Dodaj wyzwania
- Celebruj sukcesy

### Tydzień 22-30: Utrwalenie
- Pełna automatyzacja
- Planuj kolejne cele
- Dziel się sukcesami

Pamiętaj - konsystencja jest kluczem!',
  '/blog2.png',
  1,
  2,
  true,
  'Jak zbudować zdrowe nawyki w 30 dni - Przewodnik | MetaBlog',
  'Praktyczny plan budowania zdrowych nawyków w 30 dni. Sprawdzone metody i strategie na trwałą zmianę.',
  ARRAY['nawyki', 'zdrowie', 'rozwój osobisty', '30 dni', 'motywacja'],
  6
),
(
  'Najlepsze narzędzia dla programistów w 2025',
  'najlepsze-narzedzia-programistow-2025',
  'Przegląd najnowszych i najbardziej efektywnych narzędzi, które każdy programista powinien znać.',
  '# Narzędzia programistyczne 2025

Lista must-have narzędzi dla nowoczesnego programisty.

## Edytory kodu
- **VS Code** - najpopularniejszy edytor
- **JetBrains IDE** - profesjonalne środowiska
- **Neovim** - dla miłośników terminala

## AI Assistants
- **GitHub Copilot** - asystent kodowania
- **ChatGPT** - pomoc w problemach
- **Claude** - analiza kodu

## DevOps
- **Docker** - konteneryzacja
- **Kubernetes** - orkiestracja
- **Terraform** - Infrastructure as Code

Te narzędzia znacznie przyspieszą Twoją pracę!',
  '/image1.png',
  1,
  1,
  true,
  'Najlepsze narzędzia programistyczne 2025 | MetaBlog',
  'Przegląd najnowszych narzędzi dla programistów. VS Code, AI assistants, DevOps i więcej.',
  ARRAY['programowanie', 'narzędzia', 'VS Code', 'AI', 'DevOps'],
  10
);

-- 4. Insertar comentarios de ejemplo
INSERT INTO comments (post_id, author_name, author_email, content, approved) VALUES
(1, 'Jan Nowak', 'jan@example.com', 'Świetny artykuł! AI rzeczywiście rozwija się bardzo szybko.', true),
(1, 'Maria Wiśniewska', 'maria@example.com', 'Ciekawe, czy AI zastąpi programistów?', true),
(2, 'Piotr Kowalski', 'piotr@example.com', 'Bardzo praktyczne porady, już zaczynam!', true),
(3, 'Aleksandra Nowak', 'ola@example.com', 'VS Code to naprawdę świetne narzędzie!', true);