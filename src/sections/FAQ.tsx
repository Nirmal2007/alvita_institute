import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are the eligibility criteria for the training programs?",
    answer: "Most of our programs require candidates to have completed their 10+2 (Higher Secondary) education. Specific requirements like age, height (for cabin crew), and communication skills vary by course. Please contact our counselors for detailed criteria."
  },
  {
    question: "Do you provide placement guarantee?",
    answer: "We provide 100% placement assistance. Our dedicated placement cell works tirelessly with our network of 150+ hiring partners to schedule interviews for our students until they secure a job."
  },
  {
    question: "Are the certifications internationally recognized?",
    answer: "Yes, our training programs and certifications are designed according to industry standards and are widely recognized by domestic and international airlines, cruise lines, and corporate organizations."
  },
  {
    question: "Do you offer hostel or accommodation facilities?",
    answer: "Yes, we provide assistance in finding safe and affordable PG/hostel accommodations near our training centers for outstation students."
  },
  {
    question: "Can I pay the course fees in installments?",
    answer: "Absolutely. We offer flexible EMI options and installment plans to make our premium training programs accessible to all aspiring candidates."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-alt" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">Got Questions?</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">
                Frequently Asked <br/>Questions
              </h3>
              <p className="text-gray-600 mb-8">
                Find answers to common queries about our courses, placements, and facilities. Can't find what you're looking for? Reach out to us.
              </p>
              <a href="#contact" className="text-primary-blue font-semibold hover:underline">
                Contact Support &rarr;
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className="font-heading font-semibold text-lg text-text-main pr-8">{faq.question}</span>
                    <ChevronDown 
                      className={`text-primary-blue shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-600 border-t border-gray-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
