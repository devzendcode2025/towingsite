"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FooterProps {
  company_name: string;
  slogan: string;
  copyright_year: string;
  address: string;
  phone_number: string;
  email_address: string;
  links: { text: string; href: string }[];
  services_links: { text: string; href: string }[];
  social_links: { icon: string; href: string }[];
}

export default function Footer({
  company_name,
  slogan,
  copyright_year,
  address,
  phone_number,
  email_address,
  links,
  services_links,
  social_links,
}: FooterProps) {
  const socialIconMap: { [key: string]: IconDefinition } = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-white py-5"
    >
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="h5 fw-bold mb-3">{company_name}</h4>
            <p className="text-white-50">{slogan}</p>
            <div className="mt-3">
              {social_links.map((link, index) => (
                <a key={index} href={link.href} className="text-white me-3 fs-4">
                  <FontAwesomeIcon icon={socialIconMap[link.icon]} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4 className="h5 fw-bold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              {links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="text-white-50 hover:text-white text-decoration-none">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-bold mb-3">Services</h4>
            <ul className="list-unstyled">
              {services_links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="text-white-50 hover:text-white text-decoration-none">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-bold mb-3">Contact Us</h4>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 mt-1 text-primary" />
                <span className="text-white-50">{address}</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                <a href={`tel:${phone_number}`} className="text-white-50 hover:text-white text-decoration-none">{phone_number}</a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                <a href={`mailto:${email_address}`} className="text-white-50 hover:text-white text-decoration-none">{email_address}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 pt-4 border-top border-secondary">
        <p className="text-white-50">Copyright &copy; {copyright_year} {company_name}. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}
