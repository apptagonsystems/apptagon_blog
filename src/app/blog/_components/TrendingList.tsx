'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/types/types'
import { formatDate } from '@/lib/utils/formatDate'



export default function TrendingList({posts,dir}:{posts: BlogPost[], dir: string}) {


  return (
    <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Trending</h2>
              
            </div>
            <div className="space-y-6">
              {posts.map((post, index) => (
                <div key={index} className="flex gap-4">
                  <div className=" flex-shrink-0">
                    
                    <Image
                      src={ post.image ? `/images/${dir}/${post.image}` : "/placeholder.svg"}
                      alt="Article thumbnail"
                      width={70}
                      height={70}
                      className="rounded-lg object-cover h-[70px] w-[70px]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-sm mb-2 justify-start">
                      <Link href="#" className="text-blue-500 hover:underline">
                        {post.tag}
                      </Link>
                      <span className="text-gray-500 ml-3 text-xs">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3 className="font-bold">
                    {post.title}
                    </h3>
                  </div>
                  <div className="text-4xl font-bold text-gray-200">{index}</div>
                </div>
              ))}
            </div>
          </div>
  )
}

