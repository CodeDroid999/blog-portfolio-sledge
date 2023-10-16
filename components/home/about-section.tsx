import React from 'react';



const AboutSection = () => {
    return (
      <section id="about" className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img_container">
                <div className="img-box">
                  <img src="/images/about-img.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Who Are We?</h2>
                </div>
                <p>
                  Sledge Entertainment Limited is a film production company founded in 2021 with the sole purpose of
                  rendering film/video production services. Our services range from pre-production, production to post
                  production. We are a pool of professionals, dedicated and innovative individuals specialized in subject
                  matter delivery methodologies in ideation and concept development, scripting, shooting the concept in the
                  most professional way, video editing, audio final mix, color grading, graphics design, and final packaging
                  of TV shows, feature films, adverts, documentaries, and short films.
                </p>
                <div className="btn-box">
                  <a href="#contact">Get a quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  