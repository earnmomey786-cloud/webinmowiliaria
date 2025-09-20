import React from 'react'
import Link from 'next/link'
import { Post, Author, Category } from '@/lib/supabase'

/**
 * Our PostOverlayCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

interface PostOverlayCardProps {
   post?: Post & { author: Author; category: Category }
}

const PostOverlayCard = ({ post }: PostOverlayCardProps) => {
   // Formatear fecha
   const formatDate = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('pl-PL', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      })
   }

   // Si no hay post, mostrar contenido por defecto
   if (!post) {
      return (
         <div className="card relative font-work">
            <figure>
               <img
                  width="1216"
                  height="450"
                  alt="banner_image"
                  src="https://placehold.co/1216x450"
                  className="rounded-xl"
               />
            </figure>
            <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
               <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
                  Ładowanie...
               </div>
               <h3>
                  <span className="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10">
                     Ładowanie najnowszego artykułu...
                  </span>
               </h3>
            </div>
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
         </div>
      )
   }

   return (
      <div className="card relative font-work">
         {/* Card Image */}
         <figure>
            <img
               width="1216"
               height="450"
               alt={post.title}
               src={post.image_url || "https://placehold.co/1216x450"}
               className="rounded-xl"
            />
         </figure>
         <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
            <div 
               className="w-fit text-white px-2.5 py-1 text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium"
               style={{ backgroundColor: post.category.color }}
            >
               {post.category.name}
            </div>
            <h3>
               <Link
                  href={`/single-post/${post.slug}`}
                  className="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500"
               >
                  {post.title}
               </Link>
            </h3>
            <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <img 
                           src={post.author.avatar_url || "https://placehold.co/100x100"} 
                           alt={post.author.name} 
                        />
                     </div>
                  </div>
                  <h5>
                     <Link
                        href="/author"
                        className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        {post.author.name}
                     </Link>
                  </h5>
               </div>
               <p className="text-xs md:text-base">{formatDate(post.created_at)}</p>
            </div>
         </div>

         {/* overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>
   )
}

export default PostOverlayCard
