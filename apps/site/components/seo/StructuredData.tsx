'use client'

interface OrganizationSchemaProps {
  name: string
  url: string
  logo?: string
  description?: string
}

export function OrganizationSchema({ name, url, logo, description }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: logo ? {
      '@type': 'ImageObject',
      url: logo
    } : undefined,
    description,
    sameAs: []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  headline: string
  description: string
  author: {
    name: string
    url?: string
  }
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  publisher: {
    name: string
    logo?: string
  }
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  publisher
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image ? {
      '@type': 'ImageObject',
      url: image
    } : undefined,
    url,
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: publisher.logo ? {
        '@type': 'ImageObject',
        url: publisher.logo
      } : undefined
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BlogSchemaProps {
  name: string
  description: string
  url: string
  author: {
    name: string
    url?: string
  }
  publisher: {
    name: string
    logo?: string
  }
}

export function BlogSchema({ name, description, url, author, publisher }: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: publisher.logo ? {
        '@type': 'ImageObject',
        url: publisher.logo
      } : undefined
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}