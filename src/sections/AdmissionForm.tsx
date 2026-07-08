import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Invalid email address"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select a gender"),
  qualification: z.string().optional(),
  sector: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  message: z.string().optional(),
});

const sectors = [
  "Indian Airport Operations",
  "International Airport Administration",
  "Aerospace",
  "Aeronautical",
  "Domestic Banking",
  "Assistant Doctor",
  "Investment Sector",
  "Corporate Railways",
  "Universal Marine",
  "Organizational Management",
  "Hospitality",
  "Global Software",
  "Income Growth Guidance",
  "Corporate Police Officer",
  "Self Employment Choices",
  "Others"
];

const inputStyle =
  `
w-full
h-14
px-4
rounded-xl
bg-white
border
border-slate-300
text-slate-800
placeholder:text-slate-400
transition-all
duration-200
outline-none

focus:border-emerald-500
focus:ring-4
focus:ring-emerald-100

hover:border-slate-400
`;

type FormData = z.infer<typeof formSchema>;

export function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // API Call
      const response = await fetch(
        "http://localhost:5000/api/admissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-primary-navy relative" id="apply">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">Reserve Now</h2>
              <h3 className="text-4xl font-heading font-bold text-text-main  mb-6">
                <span className="text-accent-green">Take the First Step Towards Your Dream Career</span>
              </h3>
              <p className="text-white mb-8 leading-relaxed">
                Fill out the admission inquiry form and our career counselors will get in touch with you shortly to guide you through the process and help you select the right program.
              </p>

              <div className="bg-bg-alt p-6 rounded-2xl border border-gray-100 hidden lg:block">
                <h4 className="font-bold text-lg mb-4 text-text-main">What happens next?</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-600 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 font-bold">1</span>
                    We verify your application and profile.
                  </li>
                  <li className="flex gap-3 text-gray-600 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 font-bold">2</span>
                    A counselor calls you to discuss your career goals.
                  </li>
                  <li className="flex gap-3 text-gray-600 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 font-bold">3</span>
                    You schedule a campus visit or virtual consultation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-[28px] p-8 md:p-10 border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.18)] backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      {...register('fullName')}
                      className={inputStyle}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-slate-700">Mobile Number *</label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      className={inputStyle}
                      placeholder="+91 9876543210"
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      {...register('email')}
                      type="email"
                      className={inputStyle}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      {...register('dob')}
                      type="date"
                      className={inputStyle}
                    />
                    {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                    <select
                      {...register('gender')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                  </div>

                  {/* Qualification */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Highest Qualification</label>
                    <select
                      {...register('qualification')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Qualification</option>
                      <option value="12th">10+2 / 12th Pass</option>
                      <option value="diploma">Diploma</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Post Graduate</option>
                    </select>
                    {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>}
                  </div>

                  {/* Preferred Sector */}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Career Sector
                    </label>

                    <select
                      {...register("sector")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a career sector
                      </option>

                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>

                    {errors.sector && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.sector.message}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      {...register('city')}
                      className={inputStyle}
                      placeholder="Your City"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      {...register('state')}
                      className={inputStyle}
                      placeholder="Your State"
                    />
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all resize-none"
                    placeholder="Any specific query?"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
                    <CheckCircle2 size={20} />
                    <p>Thank you! Your application has been submitted successfully.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
                    <AlertCircle size={20} />
                    <p>Something went wrong. Please try again later.</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Application
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
