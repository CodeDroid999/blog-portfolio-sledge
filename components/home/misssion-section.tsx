import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="about_section layout_padding" style={{ backgroundColor: '#9d9999' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="images/mission.jpg" alt="Mission" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Our mission</h2>
              </div>
              <p>
                Our mission at Sledge Entertainment Limited is simple yet profound: to bring a positive change to society
                through our craft. We believe in the transformative power of storytelling and visual artistry to inspire,
                educate, and uplift. With each project we undertake, our goal is to create content that not only
                entertains but also resonates with audiences, fostering understanding, empathy, and positive change.
                Through our dedication to excellence and the magic of film and video production, we strive to be a
                catalyst for a brighter and more enlightened society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
