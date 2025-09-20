import Advertisement from '@/components/organism/advertisement/Advertisement'
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard'
import PostCard from '@/components/molecules/card/PostCard'
import PageInfo from '@/components/organism/pageInfo/PageInfo'
import { generateSocialMeta } from '@/lib/social-meta'
import { getPosts } from '@/lib/posts'
import React from 'react'

export const metadata = {
   title: 'Blog | MetaBlog',
   description: 'Wszystkie artykuły naszego bloga - technologia, programowanie i innowacje',
   ...generateSocialMeta({
      title: 'Blog | MetaBlog - Artykuły o Technologii',
      description: 'Wszystkie artykuły naszego bloga - technologia, programowanie i innowacje',
      url: 'https://yourdomainname.com/blog',
      type: 'website'
   })
}

const BlogListing = async () => {
   // Cargar todos los posts desde Supabase
   const posts = await getPosts()
   const featuredPost = posts[0] // Usar el primer post como destacado

   return (
      <main>
         <div className="container mx-auto">
            {/* Page title info */}
            <section>
               <PageInfo />
            </section>

            {/* Banner */}
            <section className="my-12">
               <PostOverlayCard post={featuredPost} />
            </section>

            {/* All posts component */}
            <section className="my-20">
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {posts.map((post) => (
                     <PostCard key={post.id} post={post} />
                  ))}
               </div>
               {posts.length === 0 && (
                  <div className="text-center py-12">
                     <p className="text-base-content/60 text-lg">
                        Brak artykułów do wyświetlenia.
                     </p>
                  </div>
               )}
            </section>

            {/* Advertisement component */}
            <section className="mb-24">
               <Advertisement />
            </section>
         </div>
      </main>
   )
}

export default BlogListing
