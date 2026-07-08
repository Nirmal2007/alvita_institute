import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from = 0, to, duration = 2, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setDisplayValue(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export function PlacementStats() {
  const stats = [
    { label: 'Youngsters Inspired', value: 2, suffix: ' Lakhs+' },
    { label: 'Placements', value: 8537, suffix: '+' },
    { label: 'Hiring Partners', value: 746, suffix: '+' },
    { label: 'Placement Percentage', value: 99, suffix: '%' },
  ];

  return (
    <section className="py-20 bg-primary-blue text-white" id="placement">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`text-center px-4 ${idx === 0 ? 'border-l-0' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
