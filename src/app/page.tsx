'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Code, Settings, Check } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const features = [
    { icon: <Code size={24} />, title: 'AI-Powered Naming', description: 'Suggests relevant names based on file content' },
    { icon: <Settings size={24} />, title: 'Multiple Formats', description: 'Supports various naming conventions and file types' },
    { icon: <Check size={24} />, title: 'Easy Integration', description: 'Seamlessly integrates with VS Code workflows' },
  ]

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image src="/renameit.png" alt="ReNameIt Logo" width={150} height={150} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        ReNameIt
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl mb-8 text-center max-w-2xl"
      >
        AI-Powered File Naming for Visual Studio Code
      </motion.p>

      <motion.a
        href="https://marketplace.visualstudio.com/items?itemName=DeepakJoshi.renameit"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 flex items-center"
      >
        <Download size={24} className="mr-2" />
        Download Now
      </motion.a>

      <div className="mt-16 w-full max-w-3xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => toggleSection(`feature${index}`)}
              className="w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="mr-4 text-blue-500">{feature.icon}</div>
                <h2 className="text-lg font-semibold">{feature.title}</h2>
              </div>
              <ChevronDown
                size={24}
                className={`transform transition-transform duration-300 ${
                  activeSection === `feature${index}` ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeSection === `feature${index}` && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-b-lg p-4 shadow-md mt-1"
              >
                <p>{feature.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-sm text-gray-600"
      >
        © 2023 ReNameIt. All rights reserved.
      </motion.footer>
    </div>
  )
}