import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Customer() {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
    <section className="client-area section-padding es-bg" id="client">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-title">
                        <h3>Loyal</h3>
                        <h2>Customer</h2> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-10.col-sm-offset-1">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="single-client">
                                <div className="client-photo"> <img src="./images/client-4.jpg" alt=""/> </div>
                                <div className="client-content">
                                    <h3>Ms Nhiên</h3> <span>ITC</span>
                                    <p>Phuong has a sociable, friendly personality that is easy to get along with everyone so I feel very comfortable working with her.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-client">
                                <div className="client-photo"> <img src="./images/client-5.jpg" alt=""/> </div>
                                <div className="client-content">
                                    <h3>Mr Tuấn</h3> <span>BACK-END</span>
                                    <p>Sometimes I have too many projects and have collaborated with Phuong on some projects that she does a lot of work and is very eager to learn new things.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-client">
                                <div className="client-photo"> <img src="./images/client-2.jpg" alt=""/> </div>
                                <div className="client-content">
                                    <h3>Mr Ninh</h3> <span>FRONT-END</span>
                                    <p>Sometimes I am too busy with work and projects too much I have collaborated with Phuong and she completed the assigned work very well.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-client">
                                <div className="client-photo"> <img src="./images/client-1.jpg" alt=""/> </div>
                                <div className="client-content">
                                    <h3>Mr Thy</h3> <span>DESIGNER</span>
                                    <p>I have collaborated with Phuong on a number of website projects that saw her doing very well, doing very well on the assigned time.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
