import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 px-8 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Revolutionize Your File Naming!</h2>
        <p className="text-lg mb-12 text-gray-700 max-w-xl mx-auto">
          Download ReNameIt now and experience the power of AI-assisted file naming right inside Visual Studio Code.
        </p>
        
        <motion.a
          href="https://marketplace.visualstudio.com/items?itemName=DeepakJoshi.renameit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          target='_blank'
          className="bg-gradient-to-r from-green-500 via-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
        >
          <Download size={28} className="mr-2" />
          Download Now
        </motion.a>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 2 }}
      />
    </section>
  )
}
