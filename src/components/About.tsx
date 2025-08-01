"use client";

import { motion } from 'framer-motion';

interface AboutProps {
  title: string;
  subtitle: string;
  contentHtml: string;
  phone_number: string;
  features: string[];
}

export default function About({ title, subtitle, contentHtml, phone_number, features }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-5 bg-light"
    >
      <div className="container">
        <h2 className="text-center mb-3">{title}</h2>
        <h3 className="text-center mb-4 text-muted">{subtitle}</h3>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="fw-semibold mt-3">{phone_number}</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
