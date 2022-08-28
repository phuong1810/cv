import React from 'react'

export default function Contact() {
  return (
    <>
        <footer className="footer-area padding-top black-bg">
            <div className="contact-area  section-padding" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="page-title">
                                <h3>Contact</h3>
                                <h2>with me</h2>
                            </div>
                        </div>
                    </div>                    
                  
                    <div className="row text-center">
                        <div className="contact-info">
                            <h3>nguyentran<br className="sp"/>quephuong1810@gmail.com</h3>
                            <h4>0938 477 707</h4>
                            <div className="social-menu">
                                <a target="_blank" href="http://www.facebook.com/NTQuePhuong"><i className="fa fa-facebook"></i></a> 
                                <a href="#"><i className="fa fa-twitter"></i></a> 
                                <a target="_blank" href="#"><i className="fa fa-skype"></i></a> 
                                <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright-area">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <p>Copyright © 2016 <a href="#">QUEPHUONG</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
