'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BlogPost } from '@/lib/types/types'



export default function ArticleCarousel({posts,dir}:{posts: BlogPost[], dir: string}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Featured Articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={scrollPrev}
                  disabled={!prevBtnEnabled}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon"  onClick={scrollNext}
                  disabled={!nextBtnEnabled}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.category}/${post.slug}`} key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] ">
              <div  className="mr-4">
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                    {post.category}
                  </span>
                  </div>
                  <Image
                    src={ post.image ? `/images/${dir}/${post.image}` : "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-[300px]"
                  />
                  <div className="mt-4">
                    <div className="flex items-center gap-3 text-sm mb-2">
                      <Link href="#" className="text-blue-500 hover:underline">
                        {post.category}
                      </Link>
                      <span className="text-gray-500">{post.publishedAt}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 truncate">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
     
    </div>
  )
}

