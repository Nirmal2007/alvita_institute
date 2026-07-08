import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Departmental Experts',
  'Career-Oriented Curriculum',
  'Ontime Placement',
  'Interview Ethics & Resume Building',
  'Global level Certifications',
  'Personalized Career Counseling Process',
  'Modernized Training Facilities',
  'Ever Green Success Principles'
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent-green font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Arctic</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-5">
                Modern Bridge for <br />Successful <br />Life
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We go beyond traditional career selection. Our approach integrates practical industry insights, personalized mentorship, and supersonic placement support to ensure that you will get ready for the Highly competetive world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-accent-green shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Professional Training"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary-navy/20 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
