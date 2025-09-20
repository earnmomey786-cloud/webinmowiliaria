import Advertisement from '@/components/organism/advertisement/Advertisement'
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard'
import PostCard from '@/components/molecules/card/PostCard'
import PageInfo from '@/components/organism/pageInfo/PageInfo'
import { generateSocialMeta } from '@/lib/social-meta'
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

const BlogListing = () => {
   return (
      <main>
         <div className="container mx-auto">
            {/* Page title info */}
            <section>
               <PageInfo />
            </section>

            {/* Banner */}
            <section className="my-12">
               <PostOverlayCard />
            </section>

            {/* All posts component */}
            <section className="my-20">
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
                     <PostCard key={item} />
                  ))}
               </div>
               <div className="flex items-center justify-center w-full mt-8">
                  <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
                     Load More
                  </button>
               </div>
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
