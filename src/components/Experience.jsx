import React from 'react'
import 'jquery/src/jquery'; 
import 'bootstrap3/dist/js/bootstrap.js'; 

export default function Experience() {
  return (
    <>
        <section className="experience-area section-padding" id="experience">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-title">
                        <h3>MY</h3>
                        <h2>EXPERIENCE</h2> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <ul className="exp-battn">
                        <li className="active"><a data-toggle="pill" href="#employment">Employment</a></li>
                        <li><a data-toggle="pill" href="#education">Education</a></li>
                    </ul>
                </div>
            </div>
            <div className="row tab-content">
                <div id="education" className="tab-pane fade">
                    <div className="col-xs-12 col-sm-6 fadeIn">
                        <div className="experience">
                            <div className="single-exp"> <span className="exp-no">01</span> <span className="exp-year">2011</span>
                                <div className="exp-details">
                                    <h3>UNIVERSITY OF FINANCE AND MARKETING</h3>
                                    <p>Study and work with graphics basics such as photoshop, css/html</p>
                                </div>
                            </div>
                            <div className="single-exp"> <span className="exp-no">02</span> <span className="exp-year">2012</span>
                                <div className="exp-details">
                                    <h3>UNIVERSITY OF FINANCE AND MARKETING</h3>
                                    <p>Continue to study some programming subjects such as programming engineering, web application development and web design, basic html/css, javascript learning.</p>
                                </div>
                            </div>
                            <div className="single-exp"> <span className="exp-no">03</span> <span className="exp-year">2013</span>
                                <div className="exp-details">
                                    <h3>UNIVERSITY OF FINANCE AND MARKETING</h3>
                                    <p>Continue to study some specialties such as Data Mechanics, Photo Design, Web layout design, continue to study html/css, javascript.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 fadeIn">
                        <div className="experience">
                            <div className="single-exp"> <span className="exp-no">04</span> <span className="exp-year">2014</span>
                                <div className="exp-details">
                                    <h3>Đông Thái</h3>
                                    <p>Internship and study at Dong Thai company, learn more knowledge of wordpress, SEO and image design for website, web administration.</p>
                                </div>
                            </div>
                            <div className="single-exp"> <span className="exp-no">05</span> <span className="exp-year">2015</span>
                                <div className="exp-details">
                                    <h3>NINA</h3>
                                    <p>Start working and learn experience at Nina company, learn more php css/html, javascript knowledge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="employment" className="tab-pane fade in active">
                    <div className="col-xs-12 col-sm-6 fadeIn">
                        <div className="experience">
                            <div className="single-exp"> <span className="exp-no">01</span> <span className="exp-year">03/2014</span>
                                <div className="exp-details">
                                    <h3>ĐÔNG THÁI</h3>
                                    <p>Internship and study at Dong Thai company, learn more knowledge of wordpress, SEO and image design for website, web administration.</p>
                                </div>
                            </div>
                            <div className="single-exp"> <span className="exp-no">02</span> <span className="exp-year">07/2015</span>
                                <div className="exp-details">
                                    <h3>NINA</h3>
                                    <p>Start working and learn experience at Nina company, learn more php css/html, javascript knowledge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 fadeIn">
                    	<div className="experience">
                    		
                            <div className="single-exp"> <span className="exp-no">04</span> <span className="exp-year">07/2017</span>
                                <div className="exp-details">
                                    <h3>Wakka Data Service</h3>
                                    <p>Starting to work and learn experience at Wakka Data Service company this is the first Japanese company that I started to learn more knowledge of Wordpress, css / html, javascript in addition to learning more soft skills from here.</p>
                                    <p>- Learning experience: AI, XD, JAVASCRIPT, JQUERY, ES6, JSON, API, SCSS, FLEXBOX, VUEJS, REACTJS, NODEJS, MONGODB, GRAPHQL...</p>
                                    <p>- Project manager: Backlog, Redmine, Monday</p>
                                    <p>- Pay attention to the details of each PIXEL PERFECT</p>
                                    <p>- Advance custom fields</p>
                                </div>
                            </div>
                    	</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
