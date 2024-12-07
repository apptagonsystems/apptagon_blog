import React from 'react'


import fs from "fs";
import path from "path";
import { getBlogPostsFromDirectory } from '@/lib/utils/contentUtils';
// import { BlogPost } from '@/lib/types/types';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { BreadcrumbWithCustomSeparator } from '@/components/BreadcrumbWithCustomSeparator';
import { formatDate } from '@/lib/utils/formatDate';
import { CustomMDX } from '@/components/CustomMDX';


export async function generateStaticParams({
    params
  }: {
    params:  {slug: string, category: string } 
  }) {

    const {category}  = await params;

    const posts = getBlogPostsFromDirectory(category);
  
    return posts.map((post) => ({
      category: post.metadata.category,
    }));
  }
// export  async function generateStaticParams(){
//   const posts = getBlogPostsFromDirectory(category);
//   return posts.map((post) => ({
//           category: post.metadata.category,
//         }));

// }
  
export async function generateMetadata({ params }: { params: {  slug: string; category: string} }) {
  const { slug, category } =  await params;
  const response =  await fs.existsSync(path.join(process.cwd(),"src","content", category ));
  const blogPost =  getBlogPostsFromDirectory(category).filter(
    (post) => post.slug === slug
  );

  if(response){
    return;
  }
  if (!blogPost) {
    return;
  }
  return {
    title: category.toLocaleUpperCase(),
    description: `All articles reagarding ${category}`,
  };
}
const BlogDetailPage = async ({ params }: { params: {  slug: string; category: string} }) => {

  const response =  await fs.existsSync(path.join(process.cwd(),"src","content", params.category ));
  const blogPost =  await getBlogPostsFromDirectory(params.category).filter(
    (post) => post.slug === params.slug
  )[0];

  if(!response){
    return <h1>DIRECTORY DOES NOT EXIST</h1>
  }
  if (!blogPost) {    
    notFound();

  }
  return (
    <>
    <Header>
      <BreadcrumbWithCustomSeparator
            category={blogPost.metadata.category}
            slug={blogPost.slug}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
        {blogPost.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-4 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          {formatDate(blogPost.metadata.publishedAt)}
        </p>
      </div>
    </Header>
    <article className="prose mx-2">
          <CustomMDX source={blogPost.content} />
    </article>
    </>
  )
}

export default BlogDetailPage