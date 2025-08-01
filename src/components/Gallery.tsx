"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryProps {
  title: string;
  subtitle: string;
}

export default function Gallery({ title, subtitle }: GalleryProps) {
  // Placeholder images for now. These should be replaced with actual images from the original site.
  const images = [
    '/images/gallery/image-1.jpg',
    '/images/gallery/image-2.jpg',
    '/images/gallery/image-3.jpg',
    '/images/gallery/image-4.jpg',
    '/images/gallery/image-5.jpg',
    '/images/gallery/image-6.jpg',
  ];

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col"
            >
              <div className="card h-100 shadow-sm">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="card-img-top object-fit-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
