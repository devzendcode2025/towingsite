"use client";

import { motion } from 'framer-motion';

interface ContactProps {
  title: string;
  subtitle: string;
  phone_number: string;
  availability: string;
  email_address: string;
  location: string;
}

export default function Contact({ title, subtitle, phone_number, availability, email_address, location }: ContactProps) {
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

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <h4 className="card-title mb-3">Contact Information</h4>
            <p className="mb-2"><strong>Phone:</strong> {phone_number}</p>
            <p className="mb-2"><strong>Availability:</strong> {availability}</p>
            <p className="mb-2"><strong>Email:</strong> {email_address}</p>
            <p className="mb-2"><strong>Location:</strong> {location}</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h4 className="card-title mb-3">Send Message Us</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" rows={5} className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
