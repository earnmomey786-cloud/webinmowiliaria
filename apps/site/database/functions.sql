-- Función SQL para incrementar views de posts
-- Ejecutar en Supabase SQL Editor

CREATE OR REPLACE FUNCTION increment_post_views(post_id INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE posts 
  SET views = views + 1 
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;