
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 -z-10" />
      
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="heading-gradient">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}