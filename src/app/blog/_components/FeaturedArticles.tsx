import { getBlogPostsFromDirectory } from '@/lib/utils/contentUtils';
import React from 'react'
import { BlogPost } from '@/lib/types/types';
import { notFound } from 'next/navigation';
import ArticleCarousel from './ArticleCarousel';

export const FeaturedArticles = ({dir}:{dir: string}) => {
    
  const posts: BlogPost[] = [];
  const blogPosts =  getBlogPostsFromDirectory(dir);
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


    if (!posts) {
      notFound();
    }
  
  return (
    
    <>
      {posts && <ArticleCarousel posts={posts} dir={dir} />}
    </>
  )
}
