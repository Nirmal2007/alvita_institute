import { motion } from 'framer-motion';

const videos = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder
    title: 'My Journey to becoming a Cabin Crew',
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'How Arctic Professionals helped me secure a Railway Job',
    thumbnail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Life at Sea: Marine Hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1974&auto=format&fit=crop',
  }
];

export function VideoReviews() {
  return (
    <section className="py-24 bg-primary-navy relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent-green font-semibold tracking-wider uppercase text-sm mb-2">Student Voices</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Video Reviews
            </h3>
            <p className="text-gray-300 text-lg">
              Watch our students share their transformational journeys and experiences at Arctic Professionals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-xl border border-white/10"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-navy/40 group-hover:bg-primary-navy/20 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center shadow-lg shadow-primary-blue/50 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-medium line-clamp-1">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
