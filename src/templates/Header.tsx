import Link from 'next/link'

function Header() {
  return (
    <div className="flex flex-wrap">
      <section className="relative w-full mx-auto">
        <nav className="flex justify-between h-20 text-white bg-primary">
          <div className="flex items-center px-5 py-6 xl:px-12">
            <Link href="/">LOGO</Link>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Header
