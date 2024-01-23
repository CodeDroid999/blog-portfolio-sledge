// src/components/ServiceBox.tsx
import React, { ReactNode } from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description }) => {
  return (
    <div className="col-md-6">
      <div className="box">
        {/**<div className="img-box">
          {svg}
  </div>**/}
        <div className="detail-box">
          <h6>{title}</h6>
          <p>{description}</p>
          <a href="#contact">Get a quote</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
