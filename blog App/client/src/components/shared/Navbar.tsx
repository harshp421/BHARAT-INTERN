import { Fragment, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { ModeToggle } from '../ui/mode-toggle'
import { Link, useLocation } from 'react-router-dom'
import useGetCurrentUser from '@/hooks/useGetCurrentUser'

export default function Example() {
 const location =useLocation();
 const currentUser=useGetCurrentUser();
 console.log(location.pathname,"location.pathname");

  return (
    <header >
       <Drawer>
      <nav className="mx-auto flex max-w-7xl items-center justify-between  p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <h1>Hunter Blog</h1>
          </Link>
        </div>
       
        <div className="flex lg:hidden">     
          <DrawerTrigger className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 border-2' >Open</DrawerTrigger>
          
        </div>
        <div className="hidden lg:flex lg:gap-x-12">    
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
         
          <Link  to="" className={`text-sm font-semibold leading-6 ${location.pathname==="/"?"text-blue-700":""}`}>
            Home
          </Link>
          <Link to="/all-post" className={`text-sm font-semibold leading-6 ${location.pathname==="/all-post"?"text-blue-700":""}`}>
            All-Blogs
          </Link>
          <Link to="/creat-blog" className={`text-sm font-semibold leading-6 ${location.pathname==="/creat-blog"?"text-blue-700":""}`}>
            Create-blog
          </Link>
           {
            currentUser ? (
              <Link to="/profile" className={`text-sm font-semibold leading-6 ${location.pathname==="/profile"?"text-blue-700":""}`}>
                 Log-Out
              </Link>
            ) : (
              <Link to="/auth/login" className={`text-sm font-semibold leading-6 ${location.pathname==="/auth/login"?"text-blue-700":""}`}>
                Login
              </Link>
            )
           }
        </div>
        <div className='hidden lg:block'>
        <ModeToggle />
        </div>
       
      </nav>
      </Drawer>
    </header>
  )
}
