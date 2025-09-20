import Advertisement from '@/components/organism/advertisement/Advertisement'
import BannerCard from '@/components/molecules/card/BannerCard'
import PostCard from '@/components/molecules/card/PostCard'
import { OrganizationSchema, BlogSchema } from '@/components/seo/StructuredData'
import { generateSocialMeta } from '@/lib/social-meta'
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

export default function Home() {
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
            <BannerCard />
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
               {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
                  <PostCard key={item} />
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
