
import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 70 },
      { name: 'Figma', level: 85 },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's my technical expertise and proficiency levels in various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}