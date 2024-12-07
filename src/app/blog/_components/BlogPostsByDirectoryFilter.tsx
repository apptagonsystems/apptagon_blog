import { getBlogPostsFromDirectory } from '@/lib/utils/contentUtils';
import React from 'react'
import BlogPostGrid from './BlogPostGrid';
import { BlogPost } from '@/lib/types/types';
import { notFound } from 'next/navigation';

export const BlogPostsByDirectoryFilter = ({dir}:{dir: string}) => {
  const posts: BlogPost[] = [];
  const blogPosts =  getBlogPostsFromDirectory(dir).filter(
    (post) => post.metadata.category === dir
  );
  blogPosts.forEach((post)=> posts.push({
    author: post.metadata.author,
    category:post.metadata.category,
    image:post.metadata.image,
    publishedAt:post.metadata.publishedAt,
    readTime:post.metadata.readTime,
    summary:post.metadata.summary,
    title: post.metadata.title,
    slug: post.slug,
    tag: post.metadata.tag
  }))


    if (!posts) {
      notFound();
    }
  
  return (
    
    <>
      {posts && <BlogPostGrid posts={posts} dir={dir}/>}
    </>
  )
}
