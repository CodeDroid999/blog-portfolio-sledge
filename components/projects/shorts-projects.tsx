import React from 'react';

const Shorts: React.FC = () => {
    return (
        <section id="projects" className="team_section layout_padding">
            <div className="container">
              
                <div className="row">
                   
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                            <iframe width="324" height="576" src="https://www.youtube.com/embed/eZWZpbnJ_Cg" title="There is beauty in everything!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="detail-box">
                                
                                <h6>
                                    <a href="https://youtu.be/eZWZpbnJ_Cg">There is beauty in everything</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                            <iframe width="324" height="576" src="https://www.youtube.com/embed/rdnrM0lI3I4" title="Maybe Reality is just an illusion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            </div>
                            <div className="detail-box">
                               
                                <h5>
                                    <a href="https://youtu.be/rdnrM0lI3I4">Maybe Reality is just an illusion</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                            <iframe width="324" height="576" src="https://www.youtube.com/embed/GL7ffn_ZlNw" title="How do you call someone who has made you angry - Kenyan dictionary 😂😂😂😂" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                <div className="btn-box">
                    <a href="https://www.youtube.com/@SilusSledgeAmbani">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Shorts;