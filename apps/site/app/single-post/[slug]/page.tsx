import React from 'react'
import { ArticleSchema } from '@/components/seo/StructuredData'
import { generateBlogPostMeta } from '@/lib/social-meta'
import { getPostBySlug, incrementPostViews } from '@/lib/posts'
import { notFound } from 'next/navigation'

interface SinglePostProps {
   params: {
      slug: string
   }
}

// Generate metadata for each post
export async function generateMetadata({ params }: SinglePostProps) {
   const post = await getPostBySlug(params.slug)
   
   if (!post) {
      return {
         title: 'Post nie znaleziony | MetaBlog'
      }
   }

   return generateBlogPostMeta({
      title: post.meta_title || `${post.title} | MetaBlog`,
      description: post.meta_description || post.excerpt,
      author: post.author.name,
      publishedTime: post.created_at,
      url: `https://yourdomainname.com/single-post/${post.slug}`,
      tags: post.tags || [],
      category: post.category.name,
      image: post.image_url
   })
}

const SinglePost = async ({ params }: SinglePostProps) => {
   const post = await getPostBySlug(params.slug)
   
   if (!post) {
      notFound()
   }

   // Incrementar views del post
   await incrementPostViews(post.id)

   // Formatear fecha
   const formatDate = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('pl-PL', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      })
   }

   return (
      <>
         <ArticleSchema
            headline={post.title}
            description={post.excerpt}
            author={{ name: post.author.name, url: "https://yourdomainname.com/author" }}
            datePublished={post.created_at.split('T')[0]}
            url={`https://yourdomainname.com/single-post/${post.slug}`}
            publisher={{ name: "MetaBlog" }}
            image={post.image_url}
         />
         <main>
         <section>
            <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
               <div className="py-5">
                  <div 
                     className="w-fit text-white px-2.5 py-1 text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium"
                     style={{ backgroundColor: post.category.color }}
                  >
                     {post.category.name}
                  </div>
                  <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">
                     {post.title}
                  </h3>
                  <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                     <div className=" flex items-center gap-3">
                        <div className="avatar">
                           <div className="w-9 rounded-full">
                              <img
                                 src={post.author.avatar_url || "https://placehold.co/100x100"}
                                 alt={post.author.name}
                              />
                           </div>
                        </div>
                        <a
                           href="/author"
                           className=" text-xs md:text-sm font-medium hover:text-primary transition hover:duration-300"
                        >
                           {post.author.name}
                        </a>
                     </div>
                     <p className="text-xs md:text-sm">{formatDate(post.created_at)}</p>
                     <p className="text-xs md:text-sm">{post.reading_time} min czytania</p>
                  </div>
               </div>
               <div className="mt-8">
                  <img
                     width="800"
                     height="462"
                     alt={post.title}
                     className={`rounded-xl`}
                     src={post.image_url || "https://placehold.co/800x462"}
                  />
               </div>

               {/* article section start  */}
               <div className="font-serif">
                  <div className="mt-8">
                     {/* Renderizar contenido markdown como HTML */}
                     <div 
                        className="prose prose-xl max-w-none text-base-content/80 leading-8"
                        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                     />
                  </div>
               </div>
            </div>
         </section>
      </main>
      </>
   )
}

export default SinglePost
