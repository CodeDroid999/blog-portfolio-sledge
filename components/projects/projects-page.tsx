import React from 'react';
import Shorts from './shorts-projects';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="team_section layout_padding bg-gray-100">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our Projects
                    </h2>
                    <p>
                        Discover a tapestry of our creative endeavors. Each project represents our passion for storytelling and our
                        commitment to delivering exceptional content. Explore our diverse portfolio, where every endeavor is a
                        testament to our dedication to crafting compelling narratives and captivating visuals.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe
                                    width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/vTuRO7-VwAo?si=Xny16GQDXTeZVf3L"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    The Handshake
                                </h5>
                                <h6>
                                    <a href="https://youtu.be/vTuRO7-VwAo?si=Xny16GQDXTeZVf3L">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe
                                    width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/Vs5wG7KJUZU?si=PjxAF9673K0BnrLZ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Choices
                                </h5>
                                <h6>
                                    <a href="https://youtu.be/Vs5wG7KJUZU?si=Tuzv_1GehLFNG6nj">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe
                                    width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/jmFkofn8wqc?si=nwmLXqxBLqcfyMx0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Real Talk
                                </h5>
                                <h6>
                                    <a href="https://youtu.be/jmFkofn8wqc?si=nwmLXqxBLqcfyMx0">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe
                                    width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/fnIqkRLIC5Y"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Revenge                                </h5>
                                <h6>
                                    <a href="https://youtu.be/fnIqkRLIC5Y">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/hFaFfyjSYzQ"
                                    title="(Celebrating Life (Episode 4) FRANCIS ODHIAMBO)" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>

                            </div>
                            <div className="detail-box">
                                <h5>
                                Celebrating Life (Episode 4)                              </h5>
                                <h6>
                                    <a href="https://youtu.be/hFaFfyjSYzQ">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <iframe width="360"
                                    height="250"
                                    src="https://www.youtube.com/embed/f-KlXHmc_iA" title="Sue Na Johnnie Ending" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            </div>
                            <div className="detail-box">
                                <h5>
                                    Sue na Johnnie
                                </h5>
                                <h6>
                                    <a href="https://youtu.be/jmFkofn8wqc?si=nwmLXqxBLqcfyMx0">Trailer</a>
                                </h6>
                            </div>
                        </div>
                    </div>

                </div>
                <Shorts/>
                <div className="btn-box">
                    <a href="https://www.youtube.com/@SilusSledgeAmbani">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;