import React from 'react';

import Home from '../layout/home-section';
import Navbar from '../layout/navbar';

const AboutHeroArea = () => {
    return (
        <div className="hero_area">
            <div className="hero_bg_box">
                <div className="img-box">
                    <img src="/public/images/about-hero.jpg" alt="" />
                </div>
            </div>

            <Home />
            <section className=" slider_section ">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                About <br/>
                                                <span>
                                                    Sledge Entertainment </span>
                                            </h1>
                                            <p>
                                                Transforming ideas into captivating stories through the magic of film. Experience creativity in
                                                motion.
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Elevating visual
                                                <span>
                                                    storytelling </span>
                                            </h1>
                                            <p>
                                                Concepts become vivid realities, leaving an indelible mark on audiences. See your vision come
                                                alive.
                                            </p>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Unleash your
                                                <span>
                                                    creative vision </span>
                                            </h1>
                                            <p>
                                                Collaborate to bring your ideas to life with precision, creativity, and innovation. We are your
                                                creative partner. </p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container idicator_container">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHeroArea;
