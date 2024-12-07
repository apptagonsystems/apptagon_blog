


import React from 'react'

import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { CircleUser, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      {/* <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header> */}
      <header className="sticky top-0 flex h-16  shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
            
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
         
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
       <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
         <form className="ml-auto flex-1 sm:flex-initial">
           <div className="relative">
             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
             <Input
               type="search"
               placeholder="Search products..."
               className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
             />
           </div>
         </form>
         <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="secondary" size="icon" className="rounded-full">
               <CircleUser className="h-5 w-5" />
               <span className="sr-only">Toggle user menu</span>
             </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end">
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuItem>Settings</DropdownMenuItem>
             <DropdownMenuItem>Support</DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem>Logout</DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu>
       </div>
     </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-2">
        {children}
        
      </div>
      <footer className='sticky bottom-0   shrink-0 items-center gap-4 border-b bg-background  container mx-auto px-4 p-y4 md:px-6'>
        {/* <div className=' grid grid-cols-1 mt-4 gap-8 md:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <CircleUser className='h-6 w-6'/>
              <span className=' text-md font-semibold'>Apptagon Blog</span>
            </div>

            <div className=' text-gray-500 text-sm'>
              Stay up-to-date with the latest tips and insights from my blog
            </div>
            <div className='flex space-x-4'>
              <a href='' target='_blank' rel='noopener noreferrer'><Twitter className='h-6 w-6 text-gray-500 hover:text-gray-700  '/></a>
              <a href='' target='_blank' rel='noopener noreferrer'><Github className='h-6 w-6 text-gray-500 hover:text-gray-700  '/></a>

            </div>
        </div>

        <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:w3tsadev@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action={""}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  defaultValue=""
                  aria-describedby="email-error"
                />
                <Button>Subscribe</Button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                
              </div>
            </form>
          </div>
        </div> */}
        <div className="my-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Coding Apptagon. All rights reserved.
        </div>
      </footer>
      
    </SidebarInset>
  </SidebarProvider>
  );
}


