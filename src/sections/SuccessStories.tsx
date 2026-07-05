import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Cabin Crew',
    company: 'Emirates',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop',
    review: 'Arctic Professionals transformed my dream into reality. The mock interviews and grooming sessions were exactly what I needed to clear the rigorous Emirates selection process.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Ground Operations',
    company: 'IndiGo Airlines',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    review: 'The faculty is exceptionally knowledgeable. They guided me through every step, from technical knowledge to interview skills. Proud to be an Arctic  alumnus.',
  },
  {
    name: 'Elena Costa',
    role: 'Guest Relations',
    company: 'Royal Caribbean',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    review: 'I never thought a career at sea was possible until I joined the Marine Hospitality program. The placement support is 100% genuine and effective.',
  }
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-bg-alt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">
              Success Stories
            </h3>
            <p className="text-gray-600 text-lg">
              Hear directly from our alumni who are now soaring high in their respective careers globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative mt-10"
            >
              <div className="absolute -top-10 left-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute top-6 right-8 text-primary-blue/20">
                <Quote size={40} />
              </div>

              <div className="mt-10">
                <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
                  "{t.review}"
                </p>
                <div>
                  <h4 className="font-bold font-heading text-text-main text-lg">{t.name}</h4>
                  <p className="text-sm font-medium text-accent-green">{t.role} at {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
