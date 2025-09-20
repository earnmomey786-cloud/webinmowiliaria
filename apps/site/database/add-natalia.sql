-- Agregar Natalia Sikora como autora
INSERT INTO authors (name, email, bio, avatar_url, social_links) VALUES
('Natalia Sikora', 'natalia@metablog.pl', 'Apasionada escritora y especialista en tecnología. Enfocada en crear contenido valioso sobre innovación, programación y tendencias digitales.', 'https://placehold.co/150x150', 
'{"twitter": "@nataliasikora", "linkedin": "natalia-sikora", "instagram": "@natalia.tech"}')
ON CONFLICT (email) DO NOTHING;

-- Verificar que se insertó correctamente
SELECT * FROM authors WHERE email = 'natalia@metablog.pl';