import AuthorInfo from '@/components/organism/authorInfo/AuthorInfo'
import PostCard from '@/components/molecules/card/PostCard'
import { generateSocialMeta } from '@/lib/social-meta'
import { getPosts } from '@/lib/posts'
import React from 'react'

export const metadata = {
   title: 'Autor | MetaBlog',
   description: 'Informacje o autorze bloga i jego doświadczeniu',
   ...generateSocialMeta({
      title: 'Autorzy | MetaBlog',
      description: 'Informacje o autorze bloga i jego doświadczeniu',
      url: 'https://yourdomainname.com/author',
      type: 'website'
   })
}

const Author = async () => {
   const posts = await getPosts()
   const latestPosts = posts.slice(0, 9) // Tomar los primeros 9 posts

   return (
      <main>
         {/* Author info */}
         <section>
            <AuthorInfo />
         </section>

         {/* Latest Post */}
         <section>
            <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
               <h3 className="text-base-content font-bold text-2xl mb-8">
                  Najnowsze artykuły
               </h3>
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {latestPosts.map((post) => (
                     <div key={post.id}>
                        <PostCard post={post} />
                     </div>
                  ))}
               </div>
               {latestPosts.length === 0 && (
                  <div className="text-center py-12">
                     <p className="text-base-content/60 text-lg">
                        Brak artykułów do wyświetlenia.
                     </p>
                  </div>
               )}
            </div>
         </section>
      </main>
   )
}

export default Author
