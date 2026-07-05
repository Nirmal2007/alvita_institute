import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';



export function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 300]);


  return (

    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-navy pt-32">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-navy/80 z-10" />

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/aviation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.video
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        ></motion.video>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-accent-green/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[30%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Build Your Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Arctic Professionals Career Hub
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Professional Training & Placement Support for Airport, Railway, and Marine Careers. Elevate your career with industry experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#apply"
              className="px-8 py-4 bg-primary-blue hover:bg-blue-600 text-white rounded-full font-semibold text-lg flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-blue/30"
            >
              Reserve Now <ArrowRight size={20} />
            </a>
            <a
              href="#programs"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg flex items-center gap-2 transition-all"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
