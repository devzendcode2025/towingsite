"use client";

import { motion } from 'framer-motion';

interface WhyChooseUsProps {
  title: string;
  points: string[];
}

export default function WhyChooseUs({ title, points }: WhyChooseUsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-5 bg-white"
    >
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col"
            >
              <div className="card h-100 shadow-sm p-3">
                <p className="card-text">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
