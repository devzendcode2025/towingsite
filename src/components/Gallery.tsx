// src/components/Gallery.tsx
'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryProps {
  title: string;
  subtitle: string;
  images: string[];
}

export default function Gallery({ title, subtitle, images }: GalleryProps) {
  return (
    <section className="gallery-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold">{title}</h2>
          <p className="lead">{subtitle}</p>
        </motion.div>
        <Row>
          {images.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="rounded"
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
