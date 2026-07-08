import { motion, AnimatePresence } from "framer-motion";
import {
  PlaneTakeoff,
  PlaneLanding,
  Plane,
  Rocket,
  Landmark,
  Stethoscope,
  TrendingUp,
  Train,
  Ship,
  BriefcaseBusiness,
  Hotel,
  Laptop,
  BadgeIndianRupee,
  ShieldCheck,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { sectorDetails } from "../data/careerSectors";

interface SectorTheme {
  bg: string;
  light: string;
  text: string;
  border: string;
  button: string;
}

interface Sector {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  hover: string;
  theme: SectorTheme;
}

const sectors = [
  {
    id: "airport",
    title: "Indian Airport Operations",
    description:
      "Build a career in airport ground handling, passenger services, terminal operations, baggage handling, and aviation security.",
    icon: PlaneTakeoff,
    color: "bg-sky-50 text-sky-600",
    hover: "group-hover:bg-sky-600 group-hover:text-white",
    theme: {
      bg: "bg-sky-600",
      light: "bg-sky-50",
      text: "text-sky-600",
      border: "border-sky-200",
      button: "bg-sky-600 hover:bg-sky-700",
    },
  },
  {
    id: "international-airport",
    title: "International Airport Administration",
    description:
      "Explore global airport management, airline operations, customer service, immigration support, and international aviation careers.",
    icon: PlaneLanding,
    color: "bg-blue-50 text-blue-600",
    hover: "group-hover:bg-blue-600 group-hover:text-white",
    theme: {
      bg: "bg-blue-600",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
    },
  },
  {
    id: "aerospace",
    title: "Aerospace",
    description:
      "Launch a career in aerospace engineering, aircraft manufacturing, space technology, research, and advanced aviation systems.",
    icon: Rocket,
    color: "bg-violet-50 text-violet-600",
    hover: "group-hover:bg-violet-600 group-hover:text-white",
    theme: {
      bg: "bg-violet-600",
      light: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      button: "bg-violet-600 hover:bg-violet-700",
    },
  },
  {
    id: "aeronautical",
    title: "Aeronautical",
    description:
      "Specialize in aircraft design, maintenance, flight systems, aerodynamics, and aviation engineering technologies.",
    icon: Plane,
    color: "bg-indigo-50 text-indigo-600",
    hover: "group-hover:bg-indigo-600 group-hover:text-white",
    theme: {
      bg: "bg-indigo-600",
      light: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
  },
  {
    id: "banking",
    title: "Domestic Banking",
    description:
      "Prepare for careers in banking, retail finance, customer relationship management, loan processing, and financial services.",
    icon: Landmark,
    color: "bg-emerald-50 text-emerald-600",
    hover: "group-hover:bg-emerald-600 group-hover:text-white",
    theme: {
      bg: "bg-emerald-600",
      light: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      button: "bg-emerald-600 hover:bg-emerald-700",
    },
  },
  {
    id: "asst-doctor",
    title: "Assistant Doctor",
    description:
      "Develop the skills required to assist doctors in patient care, clinical procedures, diagnostics, and healthcare support services.",
    icon: Stethoscope,
    color: "bg-red-50 text-red-600",
    hover: "group-hover:bg-red-600 group-hover:text-white",
    theme: {
      bg: "bg-red-600",
      light: "bg-red-50",
      text: "text-red-600",
      border: "border-red-200",
      button: "bg-red-600 hover:bg-red-700",
    },
  },
  {
    id: "investment-sector",
    title: "Investment Sector",
    description:
      "Discover opportunities in investment banking, wealth management, stock markets, financial analysis, and portfolio management.",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
    hover: "group-hover:bg-green-600 group-hover:text-white",
    theme: {
      bg: "bg-green-600",
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      button: "bg-green-600 hover:bg-green-700",
    },
  },
  {
    id: "railway",
    title: "Corporate Railways",
    description:
      "Train for careers in railway operations, station management, ticketing, logistics, customer service, and transportation management.",
    icon: Train,
    color: "bg-amber-50 text-amber-600",
    hover: "group-hover:bg-amber-600 group-hover:text-white",
    theme: {
      bg: "bg-amber-600",
      light: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      button: "bg-amber-600 hover:bg-amber-700",
    },
  },
  {
    id: "marine",
    title: "Universal Marine",
    description:
      "Explore careers in merchant navy, cruise hospitality, maritime logistics, port operations, and marine services.",
    icon: Ship,
    color: "bg-cyan-50 text-cyan-600",
    hover: "group-hover:bg-cyan-600 group-hover:text-white",
    theme: {
      bg: "bg-cyan-600",
      light: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-200",
      button: "bg-cyan-600 hover:bg-cyan-700",
    },
  },
  {
    id: "org-management",
    title: "Organizational Management",
    description:
      "Build leadership skills for business administration, human resources, operations management, and corporate strategy.",
    icon: BriefcaseBusiness,
    color: "bg-slate-50 text-slate-600",
    hover: "group-hover:bg-slate-600 group-hover:text-white",
    theme: {
      bg: "bg-slate-600",
      light: "bg-slate-50",
      text: "text-slate-600",
      border: "border-slate-200",
      button: "bg-slate-600 hover:bg-slate-700",
    },
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Prepare for careers in hotel management, tourism, event management, guest relations, and luxury hospitality services.",
    icon: Hotel,
    color: "bg-rose-50 text-rose-600",
    hover: "group-hover:bg-rose-600 group-hover:text-white",
    theme: {
      bg: "bg-rose-600",
      light: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      button: "bg-rose-600 hover:bg-rose-700",
    },
  },
  {
    id: "software",
    title: "Global Software",
    description:
      "Start your journey in software development, web and mobile applications, cloud computing, cybersecurity, artificial intelligence, and IT services.",
    icon: Laptop,
    color: "bg-purple-50 text-purple-600",
    hover: "group-hover:bg-purple-600 group-hover:text-white",
    theme: {
      bg: "bg-purple-600",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
    },
  },
  {
    id: "income-growth-guidance",
    title: "Income Growth Guidance",
    description:
      "Learn practical strategies to increase your income through career planning, financial literacy, skill development, and smart investments.",
    icon: BadgeIndianRupee,
    color: "bg-lime-50 text-lime-600",
    hover: "group-hover:bg-lime-600 group-hover:text-white",
    theme: {
      bg: "bg-lime-600",
      light: "bg-lime-50",
      text: "text-lime-600",
      border: "border-lime-200",
      button: "bg-lime-600 hover:bg-lime-700",
    },
  },
  {
    id: "corporate-police-officer",
    title: "Corporate Police Officer",
    description:
      "Prepare for careers in corporate security, risk management, surveillance, emergency response, and workplace safety.",
    icon: ShieldCheck,
    color: "bg-gray-100 text-gray-700",
    hover: "group-hover:bg-gray-700 group-hover:text-white",
    theme: {
      bg: "bg-gray-700",
      light: "bg-gray-100",
      text: "text-gray-700",
      border: "border-gray-300",
      button: "bg-gray-700 hover:bg-gray-800",
    },
  },
  {
    id: "self-employment-choices",
    title: "Self Employment Choices",
    description:
      "Turn your ideas into a successful business through entrepreneurship, freelancing, startups, and independent career opportunities.",
    icon: Handshake,
    color: "bg-teal-50 text-teal-600",
    hover: "group-hover:bg-teal-600 group-hover:text-white",
    theme: {
      bg: "bg-teal-600",
      light: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-200",
      button: "bg-teal-600 hover:bg-teal-700",
    },
  },
];

export function CareerSectors() {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const details = selectedSector
    ? sectorDetails[selectedSector.id as keyof typeof sectorDetails]
    : null;

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
              onClick={() => setSelectedSector(sector)}
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
                <button
                  onClick={() => setSelectedSector(sector)}
                  className="flex items-center text-primary-blue font-medium group-hover:gap-2 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={18}
                    className="ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedSector && details && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSector(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedSector(null)}
                className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition"
              >
                <X className="mx-auto" size={22} />
              </button>

              <div className="overflow-y-auto max-h-[92vh]">

                {/* Header */}
                <div className={`${selectedSector.theme.bg} px-6 md:px-10 py-10`}>
                  <div className="flex flex-col lg:flex-row gap-6 items-center">

                    <div
                      className={`w-24 h-24 rounded-3xl ${selectedSector.theme.light} flex items-center justify-center shadow-xl`}
                    >
                      <selectedSector.icon
                        size={52}
                        className={selectedSector.theme.text}
                      />
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {selectedSector.title}
                      </h2>

                      <p className="text-white/90 mt-4 text-lg leading-8">
                        {selectedSector.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-8">

                  {/* Overview */}
                  <section
                    className={`rounded-2xl border ${selectedSector.theme.border} ${selectedSector.theme.light} p-6`}
                  >
                    <h3
                      className={`text-2xl font-bold mb-4 ${selectedSector.theme.text}`}
                    >
                      Program Overview
                    </h3>

                    <p className="leading-8 text-gray-700">
                      {details.overview}
                    </p>
                  </section>

                  {/* Quick Info */}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-xl border border-gray-200 p-5">
                      <h4 className={`font-semibold ${selectedSector.theme.text}`}>
                        Eligibility
                      </h4>

                      <p className="mt-2 text-gray-600 text-sm">
                        {details.eligibility}
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-5">
                      <h4 className={`font-semibold ${selectedSector.theme.text}`}>
                        Duration
                      </h4>

                      <p className="mt-2 text-gray-600 text-sm">
                        {details.duration}
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-5">
                      <h4 className={`font-semibold ${selectedSector.theme.text}`}>
                        Average Salary
                      </h4>

                      <p className="mt-2 text-gray-600 text-sm">
                        {details.averageSalary}
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-5">
                      <h4 className={`font-semibold ${selectedSector.theme.text}`}>
                        Placement
                      </h4>

                      <p className="mt-2 text-gray-600 text-sm">
                        {details.placement}
                      </p>
                    </div>

                  </div>

                  {/* Opportunities & Skills */}
                  <div className="grid lg:grid-cols-2 gap-8">

                    <div>
                      <h3
                        className={`text-xl font-bold mb-4 ${selectedSector.theme.text}`}
                      >
                        Career Opportunities
                      </h3>

                      <div className="grid gap-3">
                        {details.opportunities.map((job) => (
                          <div
                            key={job}
                            className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
                          >
                            <div
                              className={`w-2.5 h-2.5 rounded-full ${selectedSector.theme.bg}`}
                            />
                            <span>{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`text-xl font-bold mb-4 ${selectedSector.theme.text}`}
                      >
                        Skills You'll Learn
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        {details.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedSector.theme.light} ${selectedSector.theme.text}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Industries */}
                  <section>
                    <h3
                      className={`text-xl font-bold mb-4 ${selectedSector.theme.text}`}
                    >
                      Industries Hiring
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {details.industries.map((industry) => (
                        <div
                          key={industry}
                          className="border border-gray-200 rounded-lg p-3"
                        >
                          {industry}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Why Choose */}
                  <section>
                    <h3
                      className={`text-xl font-bold mb-4 ${selectedSector.theme.text}`}
                    >
                      Why Choose This Course?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                      {details.whyChoose.map((reason) => (
                        <div
                          key={reason}
                          className={`rounded-xl p-4 ${selectedSector.theme.light} border ${selectedSector.theme.border}`}
                        >
                          ✓ {reason}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">

                    <a
                      href="#apply"
                      onClick={() => setSelectedSector(null)}
                      className="flex-1"
                    >
                      <button
                        className={`w-full py-4 rounded-xl text-white font-semibold transition ${selectedSector.theme.button}`}
                      >
                        Apply Now
                      </button>
                    </a>

                    <button
                      onClick={() => setSelectedSector(null)}
                      className="flex-1 py-4 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                    >
                      Close
                    </button>

                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

  );
}
