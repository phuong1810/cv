import React from 'react'

export default function Process() {
  return (
    <>
        <section className="process-area section-padding" id="process">
            <div className="container text-center">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-title">
                            <h3>my work</h3>
                            <h2>process</h2> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
                        <div className="prosess-item">
                            <div className="process-center-image">
                                <div className="tab-content">
                                    <div id="prosess_one" className="tab-pane fade in active"> <img src="./images/process-center-image.jpg" alt="process"/> </div>
                                    <div id="prosess_two" className="tab-pane fade"> <img src="./images/process-center-image-2.jpg"/> </div>
                                    <div id="prosess_three" className="tab-pane fade"> <img src="./images/process-center-image-1.jpg"/> </div>
                                    <div id="prosess_four" className="tab-pane fade"> <img src="./images/process-center-image-3.jpg" alt="process"/> </div>
                                </div>
                            </div>
                            <ul>
                                <li className="active single-process top wow fadeIn  animated">
                                    <a data-toggle="tab" href="#prosess_one">
                                        <div className="prosess-icon"> <i className="fa fa-pencil-square-o"></i> </div>
                                        <h3>Group Work</h3>
                                        <p>When many people agree to do the same thing, surely the result will be much higher than a person does and will help me to supplement my shortcomings and improve myself more.</p>
                                    </a>
                                </li>
                                <li className="single-process left wow fadeIn  animated">
                                    <a data-toggle="tab" href="#prosess_two">
                                        <div className="prosess-icon"> <i className="fa fa-gg"></i> </div>
                                        <h3>Creative</h3>
                                        <p>Always explore and learn new methods to activate creativity and to enhance thinking ability.</p>
                                    </a>
                                </li>
                                <li className="single-process right wow fadeIn  animated">
                                    <a data-toggle="tab" href="#prosess_three">
                                        <div className="prosess-icon"> <i className="fa fa-search"></i> </div>
                                        <h3>Search</h3>
                                        <p>Always looking for new things and filtering the best things to learn the useful things necessary for the job.</p>
                                    </a>
                                </li>
                                <li className="single-process down wow fadeIn  animated">
                                    <a data-toggle="tab" href="#prosess_four">
                                        <div className="prosess-icon"> <i className="fa fa-lightbulb-o"></i> </div>
                                        <h3>Brainstorming</h3>
                                        <p>Used to develop many creative answers to a problem that works by stating ideas focused on the problem, thereby, drawing a lot of answers that need to be solved.</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
