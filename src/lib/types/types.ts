import { type LucideIcon } from "lucide-react"

export type SideBarItemType = {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive: boolean;
    items: SideBarSubItemType
  };

  export type SideBarSubItemType = {
    title: string;
    url: string;
  };


  export type BlogPost  = {
    title: string;
    summary: string;
    author: string;
    publishedAt: string;
    category: string;
    readTime: string;
    image: string;
    slug: string;
    tag: string|null;
  }
  export type BlogPostGridProps = {
  posts: BlogPost[];
  dir: string;
}



 