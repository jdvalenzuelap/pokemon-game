import Link from 'next/link'

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