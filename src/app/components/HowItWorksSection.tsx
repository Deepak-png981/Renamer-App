import { motion } from 'framer-motion'
import { FileText, CheckCircle, ClipboardList, Zap } from 'lucide-react'

export default function HowItWorksSection({ controls, fadeInUp }: any) {
  return (
    <section id="how-it-works" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">How It Works</h2>
        <motion.ol
          className="space-y-8"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.2 }}
        >
          {[
            { step: 'Open a file in Visual Studio Code', icon: <FileText size={28} /> },
            { step: 'Trigger ReNameIt via command palette or context menu', icon: <ClipboardList size={28} /> },
            { step: 'Review and accept the AI-suggested file name', icon: <CheckCircle size={28} /> },
            { step: 'Your file is instantly renamed with a more relevant title', icon: <Zap size={28} /> }
          ].map((stepItem, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon + Description */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {/* Icon */}
                  <span className="text-blue-500">{stepItem.icon}</span>
                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-gray-900">{stepItem.step}</h3>
                </div>
                {/* Optional Description for each step */}
                <p className="text-gray-600">
                  {index === 0
                    ? "Start by opening any file in VS Code to get started."
                    : index === 1
                    ? "Use the command palette or right-click context menu to trigger ReNameIt."
                    : index === 2
                    ? "AI will suggest a relevant name based on your file content."
                    : "Your file will automatically be renamed in seconds!"}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
