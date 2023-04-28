import Link from 'next/link'
import { useState } from 'react'

const LogOut = () => {
  const handleOnClick = (e) => {
    //TODO delete this function, it is to represent how to make fetch requests
    fetchSomething().then((value) => console.log(value))
    console.log('Logout!')
  }

  return (
    <button
      className="flex w-full items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      onClick={handleOnClick}
    >
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="7%"
      >
        <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
      </svg>
      Log Out
    </button>
  )
}

const MenuDropdown = () => {
  return (
    <div className="duration absolute right-0 z-10 mt-10 min-w-[15rem] rounded-lg bg-white p-2 opacity-100 shadow-md transition-[opacity,margin] dark:border dark:border-gray-700 dark:bg-gray-800">
      <div className="-m-2 rounded-t-lg bg-gray-100 py-3 px-5 dark:bg-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
          james@site.com
        </p>
      </div>

      {/* Logout */}
      <div className="mt-5">
        <LogOut />
      </div>
    </div>
  )
}

const Header = () => {

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-4 text-sm dark:border-gray-700 dark:bg-slate-900 sm:flex-nowrap sm:justify-start sm:py-2.5">
      <nav className="mx-auto flex w-full max-w-7xl basis-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-5 md:mr-5">
          <Link
            className="flex-none whitespace-nowrap text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Photo App"
          >
            Adivina el pokemon
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
