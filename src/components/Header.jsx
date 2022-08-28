import React, {useState} from 'react'

export default function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
        <header className="header-area" id="home">
        <div id="wrapper" className={click ? "toggled" : ""}>
                <div className={click ? "overlay active" : "overlay"}></div>
                <nav className="navbar navbar-inverse" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <li className="scroll active"><a href="#home">home</a></li>
                        <li className="scroll"><a href="#about">about us</a></li>
                        <li className="scroll"><a href="#project">Projects</a></li>
                        <li className="scroll"><a href="#process">process</a></li>
                        <li className="scroll"><a href="#skills">Skills</a></li>
                        <li className="scroll"><a href="#contact">contact</a></li>
                    </ul>
                    <div className="social-menu"> <a target="_blank" href="http://www.facebook.com/xusotinhbant"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a target="_blank" href="#"><i className="fa fa-skype"></i></a> <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a> </div>
                </nav>
                <div id="page-content-wrapper">
                    <button type="button" className={click ? "hamburger is-open animated fadeInLeft" : "hamburger is-closed animated fadeInLeft"} data-toggle="offcanvas" onClick={handleClick}> <span className="hamb-top"></span> <span className="hamb-middle"></span> <span className="hamb-bottom"></span> </button>
                </div>
            </div>
            <div className="header-bg"></div>
            <div className="header-text-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                            <div className="header-text wow fadeInUp">
                                <h1 className="wow fadeInUp" data-wow-delay=".5s">Hello!</h1>
                                <p className="wow fadeInUp">I'm a <span className="text">Frontend Developer !!!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
