import { motion } from 'framer-motion';
import { PlaneTakeoff, Train, Ship, Truck, ArrowRight, Computer, Hospital } from 'lucide-react';

const sectors = [
  {
    id: 'airport',
    title: 'Airport Careers',
    description: 'Ground staff, terminal operations, and aviation security management roles.',
    icon: PlaneTakeoff,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'railway',
    title: 'Railway Careers',
    description: 'Station management, ticketing, operations, and customer service positions.',
    icon: Train,
    color: 'bg-emerald-50 text-emerald-600',
    hover: 'group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    id: 'marine',
    title: 'Marine Careers',
    description: 'Cruise ship hospitality, maritime logistics, and onboard services.',
    icon: Ship,
    color: 'bg-cyan-50 text-cyan-600',
    hover: 'group-hover:bg-cyan-600 group-hover:text-white',
  },
  {
    id: 'logistics',
    title: 'Logistics Careers',
    description: 'Supply chain management, freight forwarding, and transport operations.',
    icon: Truck,
    color: 'bg-indigo-50 text-indigo-600',
    hover: 'group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Careers',
    description: 'Premium hotel management, guest relations, and tourism services.',
    icon: Hospital,
    color: 'bg-red-50 text-red-600',
    hover: 'group-hover:bg-red-600 group-hover:text-white',
  },
  {
    id: 'Software ',
    title: 'Software Careers',
    description: 'Software development, web development, mobile app development, and other IT-related jobs.',
    icon: Computer,
    color: 'bg-orange-50 text-orange-600',
    hover: 'group-hover:bg-orange-600 group-hover:text-white',
  }
];

export function CareerSectors() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">Explore Opportunities</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">
              Promising Career Sectors
            </h3>
            <p className="text-gray-600 text-lg">
              We provide specialized training tailored for the most in-demand global industries, ensuring our students are industry-ready from day one.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              variants={item}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${sector.color} ${sector.hover}`}>
                  <sector.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold font-heading text-text-main mb-4 group-hover:text-primary-blue transition-colors">
                  {sector.title}
                </h4>
                <p className="text-gray-600 mb-8 line-clamp-3">
                  {sector.description}
                </p>
                <div className="flex items-center text-primary-blue font-medium group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
