import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, Users } from 'lucide-react';

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="Students learning"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white font-medium text-lg mb-1">10+ Years of Excellence</p>
                  <p className="text-gray-300 text-sm">Shaping careers globally</p>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-accent-green">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-xl">#1</h4>
                  <p className="text-gray-500 text-sm">Training Institute</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">About Alvita</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6 leading-tight">
                Empowering Students to Achieve <span className="text-accent-green">Global Careers</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Alvita International Institute is a premier career consultancy and training institute dedicated to bridging the gap between ambitious students and dynamic global industries. We specialize in transforming potential into excellence.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Target className="text-primary-blue mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2 text-text-main">Our Mission</h4>
                <p className="text-gray-600 text-sm">To provide world-class training and guarantee placement support for every dedicated student.</p>
              </motion.div>

              <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Lightbulb className="text-accent-green mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2 text-text-main">Our Vision</h4>
                <p className="text-gray-600 text-sm">To be the most trusted name globally in professional skill development and career building.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
