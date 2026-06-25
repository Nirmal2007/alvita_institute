import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-20 bg-accent-green relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Accelerate Your Career Growth?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Join thousands of successful professionals who started their journey with Alvita International Institute. Admissions are now open!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#apply" 
              className="bg-primary-navy hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform transform hover:-translate-y-1 shadow-xl"
            >
              Enroll Now <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-accent-green text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Contact Counselors
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
