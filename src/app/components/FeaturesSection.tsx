import { motion } from 'framer-motion'
import { Code, Settings, Check } from 'lucide-react'

export default function FeaturesSection({ controls, fadeInUp }: any) {
  return (
    <section id="features" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: <Code size={40} />, title: 'AI-Powered Naming', description: 'ReNameIt uses advanced AI to analyze your file content and suggest relevant, descriptive names.' },
            { icon: <Settings size={40} />, title: 'Multiple Formats', description: 'Support for various file types and naming conventions, including camelCase, PascalCase, and snake_case.' },
            { icon: <Check size={40} />, title: 'Easy Integration', description: 'Seamlessly integrates with your VS Code workflow, accessible via command palette or context menu.' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
