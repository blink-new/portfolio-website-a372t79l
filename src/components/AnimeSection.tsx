
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimeCard {
  id: number;
  title: string;
  image: string;
  description: string;
}

const animeData: AnimeCard[] = [
  {
    id: 1,
    title: "Your Name",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600",
    description: "A beautiful story about connection across time and space"
  },
  {
    id: 2,
    title: "Spirited Away",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=600",
    description: "A magical journey into a mysterious spirit world"
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&h=600",
    description: "An epic tale of survival and mystery"
  }
];

export function AnimeSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="anime-section min-h-screen mesh-gradient py-24">
      {/* Animated sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="sparkle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 anime-title">
            <span className="gradient-text">Anime Favorites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my favorite anime that inspire creativity and imagination
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animeData.map((anime) => (
            <motion.div
              key={anime.id}
              className="anime-card glass-effect"
              onHoverStart={() => setHoveredCard(anime.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
                <p className="text-muted-foreground">{anime.description}</p>
                
                {hoveredCard === anime.id && (
                  <motion.div
                    className="absolute -inset-1 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-lg" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating character */}
        <motion.div
          className="fixed bottom-10 right-10 w-24 h-24 floating pulse-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=200"
            alt="Floating character"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}