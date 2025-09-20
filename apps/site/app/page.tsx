import Advertisement from '@/components/organism/advertisement/Advertisement'
import BannerCard from '@/components/molecules/card/BannerCard'
import PostCard from '@/components/molecules/card/PostCard'
import { OrganizationSchema, BlogSchema } from '@/components/seo/StructuredData'
import { generateSocialMeta } from '@/lib/social-meta'
import { getRecentPosts } from '@/lib/posts'
import Link from 'next/link'

export const metadata = {
   title: 'Strona Główna | MetaBlog',
   description: 'Najlepszy blog technologiczny w Polsce - artykuły, poradniki i najnowsze trendy',
   ...generateSocialMeta({
      title: 'MetaBlog - Polski Blog Technologiczny',
      description: 'Najlepszy blog technologiczny w Polsce - artykuły, poradniki i najnowsze trendy',
      url: 'https://yourdomainname.com',
      type: 'website'
   })
}

export default async function Home() {
   // Cargar posts recientes desde Supabase
   const recentPosts = await getRecentPosts(9)
   const featuredPost = recentPosts[0] // El más reciente para el banner

   return (
      <>
         <OrganizationSchema 
           name="MetaBlog"
           url="https://yourdomainname.com"
           description="Blog polskojęzyczny o technologii, AI i programowaniu"
         />
         <BlogSchema
           name="MetaBlog - Polski Blog Technologiczny"
           description="Najlepszy blog technologiczny w Polsce - artykuły, poradniki i najnowsze trendy"
           url="https://yourdomainname.com"
           author={{ name: "MetaBlog Team" }}
           publisher={{ name: "MetaBlog" }}
         />
         <main className="container mx-auto">
         {/* Banner Component */}
         <section>
            <BannerCard post={featuredPost} />
         </section>

         {/* Advertisement Component */}
         <section className="pt-12">
            <Advertisement />
         </section>

         {/* Latest Post */}
         <section className="my-20">
            <h3 className="text-base-content font-bold text-2xl mb-8 font-work leading-8">
               Najnowsze Artykuły
            </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {recentPosts.map((post) => (
                  <PostCard 
                     key={post.id} 
                     post={post}
                  />
               ))}
            </div>
            <div className="flex items-center justify-center w-full mt-8">
               <Link
                  href={`/blog`}
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
               >
                  Zobacz Wszystkie Artykuły
               </Link>
            </div>
         </section>

         {/* Advertisement Component */}
         <section className="mb-24">
            <Advertisement />
         </section>
      </main>
      </>
   )
}
