
import { motion } from 'framer-motion'
import { Code2, Palette, Globe2 } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Building robust applications with modern technologies',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful and intuitive user interfaces',
  },
  {
    icon: Globe2,
    title: 'Strategy',
    description: 'Developing effective solutions for complex problems',
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful and functional digital experiences.
            With expertise in both frontend and backend development, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{skill.title}</h3>
              <p className="text-muted-foreground text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}