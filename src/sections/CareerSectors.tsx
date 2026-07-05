import { motion } from 'framer-motion';
import { PlaneTakeoff, Train, Ship, Building, ArrowRight, Computer, Hospital, PlaneIcon, Toolbox, CompassIcon, BanknoteIcon, Stethoscope, ChartCandlestick, TimelineIcon, LucidePersonStanding, Handshake } from 'lucide-react';

const sectors = [
  {
    id: 'airport',
    title: 'Indian Airport Operations',
    description: 'Ground staff, terminal operations, and aviation security management roles.',
    icon: PlaneTakeoff,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'international-airport',
    title: 'International Airport Administration',
    description: 'Ground staff, terminal operations, and aviation security management roles.',
    icon: PlaneIcon,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Aircraft maintenance, engineering and cabin crew roles.',
    icon: Toolbox,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'aeronautical',
    title: 'Aeronautical',
    description: 'Aircraft maintenance, engineering and cabin crew roles.',
    icon: CompassIcon,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'banking',
    title: 'Domestic Banking',
    description: 'Aircraft maintenance, engineering and cabin crew roles.',
    icon: BanknoteIcon,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'asst-doctor',
    title: 'Assistant Doctor',
    description: 'Medical Assistant jobs focus on direct patient care support under a doctor\'s supervision.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'investment-sector',
    title: 'Investment Sector',
    description: 'Investment roles focus on analyzing financial markets, managing portfolios, and advising clients to maximize returns.',
    icon: ChartCandlestick,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    id: 'railway',
    title: 'Corporate Railways',
    description: 'Corporate railway roles, including station management, ticketing, operations, and customer service positions.',
    icon: Train,
    color: 'bg-emerald-50 text-emerald-600',
    hover: 'group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    id: 'marine',
    title: 'Universal Marine',
    description: 'Cruise ship hospitality, maritime logistics, and onboard services.',
    icon: Ship,
    color: 'bg-cyan-50 text-cyan-600',
    hover: 'group-hover:bg-cyan-600 group-hover:text-white',
  },
  {
    id: 'org-management',
    title: 'Organizational Management',
    description: 'Supply chain management, freight forwarding, and transport operations.',
    icon: Building,
    color: 'bg-indigo-50 text-indigo-600',
    hover: 'group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Premium hotel management, guest relations, and tourism services.',
    icon: Hospital,
    color: 'bg-pink-50 text-pink-600',
    hover: 'group-hover:bg-pink-600 group-hover:text-white',
  },
  {
    id: 'Software',
    title: 'Global Software',
    description: 'Software development, web development, mobile app development, and other IT-related jobs.',
    icon: Computer,
    color: 'bg-orange-50 text-orange-600',
    hover: 'group-hover:bg-orange-600 group-hover:text-white',
  },
  , {
    id: 'income-growth-guidance',
    title: 'Income Growth Guidance',
    description: 'Income growth guidance focuses on providing strategies and recommendations to help individuals and businesses increase their income.',
    icon: TimelineIcon,
    color: 'bg-orange-50 text-orange-600',
    hover: 'group-hover:bg-orange-600 group-hover:text-white',
  }
  , {
    id: 'corporate-police-officer',
    title: 'Corporate Police Officer',
    description: 'Corporate Police Officer roles focus on maintaining security and order within private organizations.',
    icon: LucidePersonStanding,
    color: 'bg-orange-50 text-orange-600',
    hover: 'group-hover:bg-orange-600 group-hover:text-white',
  }
  , {
    id: 'self-employment-choices',
    title: 'Self Employment Choices',
    description: 'Self-employment choices focus on providing strategies and recommendations to help individuals and businesses increase their income.',
    icon: Handshake,
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
