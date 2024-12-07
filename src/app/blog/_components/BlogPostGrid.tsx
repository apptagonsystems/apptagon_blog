import React from 'react';
import { BlogPostGridProps } from '@/lib/types/types';
import { formatDate } from '@/lib/utils/formatDate';
import { Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import EmptyState from './EmptyState';

 
export default function BlogPostGrid({ posts ,dir}: BlogPostGridProps) {
  return (
    <>
     {posts.length == 0 &&  <div className='w-full'><EmptyState/></div> }

     
     {posts &&     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      { posts.sort((a,b) => {
           if(new Date(a.publishedAt) > new Date(b.publishedAt)){
               return -1;
           }
           return 1;
       }).map((post, index) => (
         <Link href={`/blog/${post.category}/${post.slug}`} key={index}>
           <article key={index} className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
           <div className="aspect-[16/9] overflow-hidden">
             <Image
               src={`/images/${dir}/${post.image}`}
               width={240}
               height={240}
             
               alt={post.title}
               className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
             />
           </div>
           <div className="p-4 hover:translate-y-1 transition-all">
             <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
               {post.category}
             </span>
             <h3 className="mt-2 text-xl font-semibold text-gray-900 truncate">
               {post.title}
             </h3>
             <p className="mt-2 text-gray-600 line-clamp-2">{post.summary}</p>
             <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
               <div className="flex items-center space-x-1">
                 <User className="h-4 w-4" />
                 <span>{post.author}</span>
               </div>
               <div className="flex items-center space-x-1">
                 <Clock className="h-4 w-4" />
                 <span>{formatDate(post.publishedAt)}</span>
               </div>
             </div>
           </div>
         </article>
       </Link>
 
       ))}
     </div>
        
         
         }
 
      
    </>
  );
}