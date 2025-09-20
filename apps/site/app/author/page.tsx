import AuthorInfo from '@/components/organism/authorInfo/AuthorInfo'
import PostCard from '@/components/molecules/card/PostCard'
import { generateSocialMeta } from '@/lib/social-meta'
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

const Author = () => {
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
                  Latest Post
               </h3>
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                     (item: any, index: number) => (
                        <div key={index}>
                           <PostCard />
                        </div>
                     )
                  )}
               </div>
            </div>
         </section>
      </main>
   )
}

export default Author
