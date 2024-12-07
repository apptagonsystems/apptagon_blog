import { getBlogPostsFromDirectory } from '@/lib/utils/contentUtils';
import React from 'react'
import BlogPostGrid from './BlogPostGrid';
import { BlogPost } from '@/lib/types/types';
import { notFound } from 'next/navigation';

export const BlogPostsByDirectory = ({dir}:{dir: string}) => {
  
    const blogPosts =  getBlogPostsFromDirectory(dir);
    const posts: BlogPost[] = [];
    blogPosts.forEach((post)=> posts.push({
      author: post.metadata.author,
      category:post.metadata.category,
      image:post.metadata.image,
      publishedAt:post.metadata.publishedAt,
      readTime:post.metadata.readTime,
      summary:post.metadata.summary,
      title: post.metadata.title,
      slug: post.slug
    }))
    if (!posts.length) {
      notFound();
    }
  return (
    <>
      {blogPosts && <BlogPostGrid posts={posts} dir={dir}/>}
    </>
  )
}
