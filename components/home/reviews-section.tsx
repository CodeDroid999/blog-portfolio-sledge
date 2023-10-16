import React from 'react';

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Some of our clients</h2>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <div className="img-box">
                  <img src="images/client.png" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Safecon Music</h4>
                  <p>
                    "Sledge Entertainment consistently delivers exceptional quality in their work. Their attention to
                    detail in post-production and their ability to bring our concepts to life is unparalleled."
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="img-box">
                  <img src="images/client01.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Phil-it Productions LTD</h4>
                  <p>
                    "We couldn't be happier with our collaboration with Sledge Entertainment. Their cinematography and
                    expert editing turned our scripts into cinematic gems that exceeded our expectations."
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="img-box">
                  <img src="images/client02.png" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Njugush.ke</h4>
                  <p>
                    "Sledge Entertainment's graphic design team consistently delivers eye-catching visuals that resonate
                    with our brand. Their creativity and attention to detail are truly impressive."
                  </p>
                </div>
              </div>
            </div>
            {/* Continue adding carousel items here */}
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
