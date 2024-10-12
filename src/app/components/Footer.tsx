import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center">
          <Image src="/renameit.png" alt="ReNameIt Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">ReNameIt</span>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/Deepak-png981" target="_blank"
            className="hover:text-blue-400"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/deepak-joshi-a15b21228/"
            target="_blank"
            className="hover:text-blue-400"><Linkedin size={24} /></a>
        </div>
        <div className="mt-4 md:mt-0">
          <p>&copy; 2024 ReNameIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
