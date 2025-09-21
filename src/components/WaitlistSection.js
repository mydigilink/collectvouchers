// components/WaitlistSection.js

import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const WaitlistSection = () => {
  return (
    <Container className="my-5">
      <div className="d-flex align-items-center justify-content-center border rounded-pill p-3 shadow-sm">
        <div className="d-flex flex-row-reverse align-items-center me-3">
          <div className="avatar">
            <Image 
              src="/uploads/image1.jpg" 
              alt="Person 1" 
              width={40} 
              height={40} 
              className="rounded-circle border border-white" 
            />
          </div>
          <div className="avatar me-n2">
            <Image 
              src="/uploads/image2.jpg" 
              alt="Person 2" 
              width={40} 
              height={40} 
              className="rounded-circle border border-white" 
            />
          </div>
          <div className="avatar me-n2">
            <Image 
              src="/uploads/image3.jpg" 
              alt="Person 3" 
              width={40} 
              height={40} 
              className="rounded-circle border border-white" 
            />
          </div>
          <div className="avatar me-n2">
            <Image 
              src="/uploads/image4.jpg" 
              alt="Person 4" 
              width={40} 
              height={40} 
              className="rounded-circle border border-white" 
            />
          </div>
          <div className="avatar me-n2">
            <Image 
              src="/uploads/image5.jpg" 
              alt="Person 5" 
              width={40} 
              height={40} 
              className="rounded-circle border border-white" 
            />
          </div>
        </div>
        <div className="fw-bold text-muted">
          Join 12,500 + others on the waitlist
        </div>
      </div>
    </Container>
  );
};

export default WaitlistSection;