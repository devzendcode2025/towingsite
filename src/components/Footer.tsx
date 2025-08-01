"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  company_name: string;
  copyright_year: string;
  address: string;
  phone_number: string;
  email_address: string;
  links: { text: string; href: string }[];
  services_links: { text: string; href: string }[];
}

export default function Footer({
  company_name,
  copyright_year,
  address,
  phone_number,
  email_address,
  links,
  services_links,
}: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-white py-4"
    >
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Company Info */}
        <div>
          <h4 className="h5 fw-bold mb-3">{company_name}</h4>
          <p className="mb-2">{address}</p>
          <p className="mb-2">Phone: {phone_number}</p>
          <p className="mb-2">Email: {email_address}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="h5 fw-bold mb-3">Company Info</h4>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="h5 fw-bold mb-3">Services</h4>
          <ul>
            {services_links.map((link, index) => (
              <li key={index} className="mb-2">
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 pt-3 border-top border-secondary">
        <p>Copyright © {copyright_year} {company_name}. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}
