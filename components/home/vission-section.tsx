import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="about_section layout_padding" style={{ backgroundColor: '#14013e' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="images/vision.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Our Vision</h2>
              </div>
              <p>
                "Our vision at Sledge Entertainment Limited is to be an epitome of storytelling through filmmaking. We
                aspire to set the standard for creative excellence in the industry, using the medium of film to weave
                compelling narratives that captivate, inspire, and leave a lasting impact. With innovation and dedication
                at our core, we aim to continuously push the boundaries of cinematic artistry, setting new benchmarks for
                the art of storytelling. Our commitment is to be a guiding light in the world of filmmaking, where every
                project we undertake reflects our unwavering pursuit of narrative brilliance."
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-3 pb-3">
          <div className="btn-box">
            <a href="your-pdf-file.pdf" download="suggested-filename.pdf">
              Download portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
