"use client";

import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export default function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-5 bg-white"
    >
      <div className="container">
        <h2 className="text-center mb-3">{title}</h2>
        <h3 className="text-center mb-4 text-muted">{subtitle}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col"
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
