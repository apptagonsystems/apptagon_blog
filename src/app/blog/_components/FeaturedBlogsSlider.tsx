"use client"
import React from 'react'
import { FeaturedBlog } from './FeaturedBlog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Category {
    id: string;
    name: string;
    articles: Article[];
  }
  
  interface Article {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    readTime: string;
    category: string;
  }
  
  const categories: Category[] = [
    {
      id: 'web',
      name: 'Web Development',
      articles: [
        {
          id: '1',
          title: 'Modern CSS Techniques',
          description: 'Learn about the latest CSS features and how to use them effectively',
          imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop',
          author: 'Emma Wilson',
          readTime: '5 min read',
          category: 'Web Development'
        },
        {
          id: '2',
          title: 'React Performance Tips',
          description: 'Optimize your React applications for better performance',
          imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop',
          author: 'John Doe',
          readTime: '7 min read',
          category: 'Web Development'
        },
        {
          id: '3',
          title: 'TypeScript Best Practices',
          description: 'Write better TypeScript code with these proven patterns',
          imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
          author: 'Alice Chen',
          readTime: '6 min read',
          category: 'Web Development'
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      articles: [
        {
          id: '4',
          title: 'Flutter vs React Native',
          description: 'A comprehensive comparison of popular mobile frameworks',
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
          author: 'Mark Johnson',
          readTime: '8 min read',
          category: 'Mobile Development'
        },
        {
          id: '5',
          title: 'iOS Development Tips',
          description: 'Essential tips for building iOS applications',
          imageUrl: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=400&fit=crop',
          author: 'Sarah Smith',
          readTime: '6 min read',
          category: 'Mobile Development'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      articles: [
        {
          id: '6',
          title: 'Node.js Microservices',
          description: 'Building scalable microservices with Node.js',
          imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
          author: 'David Lee',
          readTime: '10 min read',
          category: 'Backend Development'
        },
        {
          id: '7',
          title: 'GraphQL vs REST',
          description: 'Choosing the right API architecture for your project',
          imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
          author: 'Michael Brown',
          readTime: '7 min read',
          category: 'Backend Development'
        }
      ]
    }
  ];
  
const FeaturedBlogsSlider = () => {
    const scrollContainer = (containerId: string, direction: 'left' | 'right') => {
        const container = document.getElementById(containerId);
        if (container) {
          const scrollAmount = direction === 'left' ? -400 : 400;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
  return (
    <div className="">
    {categories.map((category) => (
      <div key={category.id} >
        <div className="">
          <button
            onClick={() => scrollContainer(`scroll-${category.id}`, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => scrollContainer(`scroll-${category.id}`, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          <div
            id={`scroll-${category.id}`}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {category.articles.map((article) => (
              <FeaturedBlog key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default FeaturedBlogsSlider