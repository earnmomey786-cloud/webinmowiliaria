interface SocialMetaProps {
  title: string
  description: string
  image?: string
  url: string
  type?: 'website' | 'article'
  author?: string
  siteName?: string
}

export function generateSocialMeta({
  title,
  description,
  image,
  url,
  type = 'website',
  author,
  siteName = 'MetaBlog'
}: SocialMetaProps) {
  const baseImage = image || '/default-og-image.jpg'
  
  return {
    // Open Graph
    'og:title': title,
    'og:description': description,
    'og:image': baseImage,
    'og:url': url,
    'og:type': type,
    'og:site_name': siteName,
    'og:locale': 'pl_PL',
    
    // Twitter Cards
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': baseImage,
    'twitter:creator': author ? `@${author}` : '@metablog',
    'twitter:site': '@metablog',
    
    // Additional metadata
    'article:author': author,
    'article:section': 'Technology',
    'article:tag': 'technologia, programowanie, AI, blog',
  }
}

interface BlogPostMetaProps {
  title: string
  description: string
  author: string
  publishedTime: string
  modifiedTime?: string
  image?: string
  tags?: string[]
  category?: string
  url: string
}

export function generateBlogPostMeta({
  title,
  description,
  author,
  publishedTime,
  modifiedTime,
  image,
  tags = [],
  category = 'Technology',
  url
}: BlogPostMetaProps) {
  const socialMeta = generateSocialMeta({
    title,
    description,
    image,
    url,
    type: 'article',
    author
  })

  return {
    title,
    description,
    ...socialMeta,
    'article:published_time': publishedTime,
    'article:modified_time': modifiedTime || publishedTime,
    'article:section': category,
    'article:tag': tags.join(', '),
    
    // Additional SEO
    keywords: tags.join(', '),
    robots: 'index, follow',
    'revisit-after': '7 days',
    
    // Canonical URL
    canonical: url
  }
}