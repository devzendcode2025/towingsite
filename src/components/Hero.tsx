"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
}

export default function Hero({ title, subtitle, button_text, button_link }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-white"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead mt-3">{subtitle}</p>
        <div className="mt-4">
          <Link href={button_link} className="btn btn-primary btn-lg">
            {button_text}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
