import React from 'react'
import { BlogPostsByDirectoryFilter } from '../_components/BlogPostsByDirectoryFilter';
import fs from "fs";
import path from "path";
import EmptyState from '../_components/EmptyState';
// import { getBlogPostsFromDirectory } from '@/lib/utils/contentUtils';

// export async function generateStaticParams({
//     params
//   }: {
//     params:  Promise<{ category: string }> 
//   }) {

//     const {category}  = await params;

//     const posts = getBlogPostsFromDirectory(category);
  
//     return posts.map((post) => ({
//       category: post.metadata.category,
//     }));
//   }


  
  export async function generateMetadata({ params }: { params: { category: string  } }) {
    const { category } =  await params;
  
    return {
      title: category.toLocaleUpperCase(),
      description: `All articles reagarding ${category}`,
    };
  }

const BlogsByCategoryPage = async ({ params }: { params: { category: string } }) => {
    const {category}  = await params;

    // FIRST CHECK IF DIRECTORY EXISTS
    const response =  await fs.existsSync(path.join(process.cwd(),"src","content", category ));

      return (

        <div className=' w-full'>
          {response ?
          <div className='min-h-screen'>
            <BlogPostsByDirectoryFilter dir={category} />
          </div>   
          : <EmptyState/>}  
        </div>
        
      )
}

export default BlogsByCategoryPage