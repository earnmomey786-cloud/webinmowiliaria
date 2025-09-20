export default function sitemap() {
  const baseUrl = 'https://yourdomainname.com'
  
  // Define all static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/author`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/single-post`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // In the future, you can add dynamic blog posts here
  // Example:
  // const blogPosts = await getBlogPosts() // Your data fetching function
  // const dynamicPages = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt).toISOString(),
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }))

  return staticPages
  // return [...staticPages, ...dynamicPages] // Uncomment when you have dynamic blog posts
}