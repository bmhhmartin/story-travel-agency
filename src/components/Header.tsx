import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-white shadow-lg absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/"><h1 className="text-3xl font-bold text-indigo-600">Travel Agency</h1></Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/tours" className="text-gray-700 hover:text-indigo-600 transition-colors">Tours</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  