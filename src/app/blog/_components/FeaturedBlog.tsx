

import React from 'react';
import { Clock, User } from 'lucide-react';
import Image from 'next/image';

interface ArticleProps {
  article: {
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    readTime: string;
    category: string;
  };
}

export function FeaturedBlog({ article }: ArticleProps) {
  return (
    <div className="flex-none w-[400px]">
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all">
        <Image
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
          <p className="text-slate-300 mb-4 line-clamp-2">{article.description}</p>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}