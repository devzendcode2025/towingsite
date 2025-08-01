// src/components/PreHeader.tsx
import React from 'react';
const PreHeader: React.FC = () => {
  return (
    <div className="bg-dark text-white py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fa fa-calendar-alt fa-xs me-2"></i> {/* Usando clases de Font Awesome */}
            <span>Book Online</span>
            <span className="ms-3">You can request booking (pending confirmation) in 24 hours</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-clock fa-xs me-2"></i> {/* Usando clases de Font Awesome */}
            <span>24 Hours</span>
            <i className="fa fa-map-marker-alt fa-xs ms-3 me-2"></i> {/* Usando clases de Font Awesome */}
            <span>Dallas, Texas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
