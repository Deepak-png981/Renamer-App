import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start"
        >
          <Image src="/renameit.png" alt="ReNameIt Logo" width={150} height={150} />
        </motion.div>
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold mb-4 text-gray-900"
          >
            ReNameIt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-8 text-gray-700"
          >
            AI-Powered File Naming for Visual Studio Code
          </motion.p>
          <motion.a
            href="https://marketplace.visualstudio.com/items?itemName=DeepakJoshi.renameit"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-green-500 via-purple-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition duration-300 inline-flex items-center"
          >
            <Download size={24} className="mr-2" />
            Download Now
          </motion.a>
        </div>
      </div>
    </section>
  )
}
