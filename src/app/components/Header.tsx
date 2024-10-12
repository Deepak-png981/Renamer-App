import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center">
          <Image src="/renameit.png" alt="ReNameIt Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-extrabold tracking-tight text-gray-900">
            ReNameIt
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-gray-900 transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition">
            How It Works
          </Link>
          <Link href="#download" className="text-gray-700 hover:text-gray-900 transition">
            Download
          </Link>
        </nav>

        {/* Download Button with Gradient */}
        <Link 
          href="https://marketplace.visualstudio.com/items?itemName=DeepakJoshi.renameit"
          target='_blank'
          className="hidden lg:inline-block bg-gradient-to-r from-green-500 via-purple-600 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
        >
          Download Now
        </Link>
      </div>
    </header>
  )
}
