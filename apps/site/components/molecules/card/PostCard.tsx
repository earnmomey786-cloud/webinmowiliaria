import Link from 'next/link'
import React from 'react'
import { Post, Author, Category } from '@/lib/supabase'

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

interface PostCardProps {
   post: Post & { author: Author; category: Category }
}

const PostCard = ({ post }: PostCardProps) => {
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
      <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
         <figure>
            <img
               src={post.image_url || "https://placehold.co/360x240"}
               alt={post.title}
               className={`rounded-xl`}
               width={360}
               height={240}
            />
         </figure>
         <div className="card-body py-6 px-2">
            <span 
               className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium"
               style={{ backgroundColor: `${post.category.color}15`, color: post.category.color }}
            >
               {post.category.name}
            </span>
            <h3>
               <Link
                  href={`/single-post/${post.slug}`}
                  className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
               >
                  {post.title}
               </Link>
            </h3>
            <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
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
                        className="text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        {post.author.name}
                     </Link>
                  </h5>
               </div>
               <p className="text-base">{formatDate(post.created_at)}</p>
            </div>
         </div>
      </div>
   )
}

export default PostCard
