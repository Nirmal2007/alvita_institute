import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const programs = [
  {
    title: 'Cabin Crew Training',
    duration: '6 Months',
    icon: GraduationCap,
    description: 'Comprehensive training covering in-flight services, safety protocols, and emergency handling.',
  },
  {
    title: 'Airport Ground Staff',
    duration: '3 Months',
    icon: Briefcase,
    description: 'Learn passenger handling, check-in procedures, cargo operations, and terminal management.',
  },
  {
    title: 'Marine Training',
    duration: '6 Months',
    icon: Users,
    description: 'Prepare for hospitality and operational roles on international cruise ships and marine vessels.',
  },
  {
    title: 'Interview Preparation',
    duration: '1 Month',
    icon: BookOpen,
    description: 'Intensive mock interviews, resume building, and communication skill enhancement.',
  },
];

export function TrainingPrograms() {
  return (
    <section className="py-24 bg-bg-alt" id="programs-list">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">
              Training Programs
            </h3>
            <p className="text-gray-600 text-lg">
              Industry-aligned curriculums designed by experts to give you the practical skills needed to excel.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-primary-blue/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <program.icon size={28} className="text-primary-blue group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-heading text-text-main mb-2">
                {program.title}
              </h4>
              <div className="inline-block px-3 py-1 bg-accent-green/10 text-accent-green text-sm font-semibold rounded-full mb-4">
                {program.duration}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
