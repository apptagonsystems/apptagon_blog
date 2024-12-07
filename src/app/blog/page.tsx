import React from 'react'
import Link from "next/link"
import { FeaturedArticles } from './_components/FeaturedArticles'
import { TrendingArticles } from './_components/TrendingArticles'

const BlogHomePage = () => {
  return (

   
    
    <main className='min-h-screen w-full grid grid-cols-4'>
      <div className=' col-span-3 w-full h-full mr-5'>
    
        <div className="container mx-auto px-4 py-8">
          <div className="mb-12">
            {/* <FeaturedArticles /> */}
            <FeaturedArticles dir={'featured'}/>
          </div>

          {/* Follow Us Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Follow Us</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#3b5998] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Fans</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#1da1f2] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Followers</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#ff0000] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Subscribers</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#c32aa3] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Followers</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#1ab7ea] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Followers</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#00ab6c] text-white p-4 rounded-lg"
              >
                <span className="font-bold">34,456</span>
                <span className="text-sm">Fans</span>
              </Link>
            </div>
          </div>

          {/* TrendingSection */}
          <TrendingArticles dir={'trending'}/>
         
        </div>
      </div>
      <div className=' col-span-1 bg-red-400 w-full h-full ml-5'></div>

       
    </main>
  )
}

export default BlogHomePage



