/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Cart from './Cart'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Cart/>
    <Navbar/>
    <Hero/>
    <Category/>
    </>
  )
}
