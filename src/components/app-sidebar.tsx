"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DATABASES_ROUTE, FIREBASE_ISSUES_ROUTE, FLUTTER_ISSUES_ROUTE, FLUTTER_ROUTE, FLUTTER_ROUTE_FEATURED_ARTICLES, REACT_ISSUES_ROUTE, REACT_NEXTJS_ROUTE, SUPABASE_ISSUES_ROUTE, SUPABASE_ROUTE, SWIFT_ROUTE, VUE_NUXT_ROUTE } from "@/lib/contants/navigationConstants"
import Image from "next/image"
import Link from "next/link"

const data = {
  user: {
    name: "MrSnave",
    email: "apptagon.evans@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Flutter",
      url: FLUTTER_ROUTE,
      icon: SquareTerminal,
      isActive: true,
      items: FLUTTER_ROUTE_FEATURED_ARTICLES
    },
    {
      title: "Supabase",
      url: SUPABASE_ROUTE,
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Swift",
      url: SWIFT_ROUTE,
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "React & NextJs",
      url: REACT_NEXTJS_ROUTE,
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Vue & Nuxt",
      url: VUE_NUXT_ROUTE,
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Databases",
      url: DATABASES_ROUTE,
      icon: Settings2,
      items: [
        {
          title: "MySQL",
          url: "#",
        },
        {
          title: "PosgreSQL",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Flutter",
      url: FLUTTER_ISSUES_ROUTE,
      icon: Frame,
    },
    {
      name: "Firebase",
      url: FIREBASE_ISSUES_ROUTE,
      icon: PieChart,
    },
    {
      name: "React",
      url: REACT_ISSUES_ROUTE,
      icon: Map,
    },
    {
      name: "Supabase",
      url: SUPABASE_ISSUES_ROUTE,
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/blog">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image alt="logo" src={"/brand.png"} width={20} height={20} className="size-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Apptagon</span>
                  <span className="truncate text-xs">Codes & Examples</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
