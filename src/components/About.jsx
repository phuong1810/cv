import React from 'react'

export default function About() {
    
  return (
    <>
        <section className="about-area section-padding" id="about">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-title">
                        <h3>Who</h3>
                        <h2>AM I?</h2> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="about-photo wow fadeInLeft img-full">
                        <img src="./images/about-photo.jpg" alt=""/>
                        <div className="about-desc" >
                            <h2>NGUYEN TRAN QUE PHUONG</h2>
                            <p className="title">FULL-STACK</p>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <div className="about-address" >
                                <p><strong>Day of Birth:</strong> 18-10-1993</p>
                                <p><strong>Country: </strong> Viet Nam</p>
                                <p><strong>Address: </strong>My Thuan, H.Dat Do, T.Ba Ria Vung Tau</p>
                                <p><strong>Phone number: </strong> 0938 477 707</p>
                                <p><strong>Email: </strong> nguyentranquephuong1810@gmail.com</p>
                                <div className="share-menu"> <a target="_blank" href="https://www.facebook.com/NTQuePhuong"><i className="fa fa-facebook"></i></a> <a target="_blank" href="#"><i className="fa fa-skype"></i></a> <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="about-text wow fadeIn">
                        <h3>I'm Nguyen Tran Que Phuong is a front end developer.</h3>
                        <p>As the person responsible for creating and implementing visual and interactive elements in a website that users can actively participate in through their web browser, working with developers, being responsible for all server-side applications that help run the site properly and efficiently. Being a Front-End developer means I'm very knowledgeable about end-to-end technology including graphic image interpretation and design in HTML, CSS, and JavaScript development languages. All are used to encode the design to create a web interface and create a great feeling to the user.</p>
                        <p> I am a developer whose task is to get the information for a company or business is provided with how they expect their website from which I can have the insights and feelings, receptiveness to build a brand and create a website in accordance with the requirements and wishes of the customers. With this information, I can work together with a UX designer to create a design that interacts with my clients. Developing a website also includes testing it on different browsers, platforms and devices to ensure that it works properly or without problems where the user is.</p>
                        <p>To make sure the technical issues create a website that works well in every browser and I have learnt and mastered languages such as HTML/CSS, Bootstrap, Material UI, SASS, Javascript, Jquery, Vuejs, Reactjs, PHP, Wordpress, GraphQL, MongoDB... and file compression techniques to improve the speed of the website.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
