import React, { Component } from 'react';


class Header extends Component {

  

  // render nav
  render() {

   


    return (
      <div >
       
           <nav id='navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical uk-visible@m" uk-navbar='true' >
                <div className="uk-navbar-center uk-margin-auto-vertical ">
                <hr className='verticalHR' ></hr>
                <hr className='verticalHR' ></hr>
                <hr className='verticalHR' ></hr>
                    <h1 id='BlendedMainHeader' className='uk-margin-auto-vertical '>Blended</h1>
                <hr className='verticalHR' ></hr>
                <hr className='verticalHR' ></hr>
                <hr className='verticalHR' ></hr>
                </div>
                <div className="uk-navbar-right " uk-lightbox='true'>
                    <a  href="images/photo.jpg" data-caption="Caption 1"><span id='galeeryIcon' uk-icon="icon: image; ratio: 4" ></span></a>
                    <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 2">
                        <img src="images/photo.jpg" alt=""/>
                    </a>
                    <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 3">
                        <img src="images/photo.jpg" alt=""/>
                    </a>
                    <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 4">
                        <img src="images/photo.jpg" alt=""/>
                    </a>
                    <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 5">
                        <img src="images/photo.jpg" alt=""/>
                    </a>
                    <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 6">
                        <img src="images/photo.jpg" alt=""/>
                    </a>
                </div>
            </nav>

            {/* Mobile */}
            <nav id='navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical uk-hidden@m" uk-navbar='true' >
            <div className=" uk-margin-auto-vertical">
                              <a style={{ color: 'black' }} id="mobileMenu" uk-icon="icon: menu; ratio: 2.5" uk-toggle="target: #offcanvas-nav-primary"></a>
                              <div className="uk-offcanvas-content">
                                  <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                                      <div className="uk-offcanvas-bar">
                                          <ul className="uk-nav uk-nav-default uk-text-center">
                                              <li className="uk-nav-header">
                                                  <a className="uk-offcanvas-close" uk-close>X</a>
                                                  <a href='/'><img className="uk-align-center uk-margin-remove-bottom" id="logoimage" src="" alt="Blended logo" width="100" height="75"  ></img></a>
                                              </li>
                                              <hr className='uk-margin-small-top uk-align-center' style={{ borderBottom: '8px solid #7C619B', width: '60%' }}></hr>
  
                                              <li className=""><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/">Home</a></li>
                                              <li className=""><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/Videos">Videos</a></li>
                                              <li className=""><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/Images">Images</a></li>                                       
                                              <li className=""><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/About">About</a></li>
                                              <li className=""><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/Contact">Contact</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="uk-navbar-center uk-margin-auto-vertical ">
                            <hr className='verticalHR' ></hr>
                            <hr className='verticalHR' ></hr>
                            <hr className='verticalHR' ></hr>
                                <h1 id='BlendedMainHeader' className='uk-margin-auto-vertical '>Blended</h1>
                            <hr className='verticalHR' ></hr>
                            <hr className='verticalHR' ></hr>
                            <hr className='verticalHR' ></hr>
                            </div>
                          <div className="uk-navbar-right " uk-lightbox='true'>
                            <a  href="images/photo.jpg" data-caption="Caption 1"><span id='galeeryIcon' uk-icon="icon: image; ratio: 3" ></span></a>
                            <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 2">
                                <img src="images/photo.jpg" alt=""/>
                            </a>
                            <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 3">
                                <img src="images/photo.jpg" alt=""/>
                            </a>
                            <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 4">
                                <img src="images/photo.jpg" alt=""/>
                            </a>
                            <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 5">
                                <img src="images/photo.jpg" alt=""/>
                            </a>
                            <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 6">
                                <img src="images/photo.jpg" alt=""/>
                            </a>
                        </div>
            </nav>

            <nav id="secondNAvBar" style={{ backgroundColor: 'black', width:'100%' }} class="uk-navbar-container " uk-navbar='true'>
            <div class="uk-navbar-center uk-margin-small-top uk-margin-small-bottom">
              <h2 style={{ color: 'white' }} className='uk-text-center uk-margin-auto-vertical secondBorderText'>- Smoothies - Craft Sandwiches - Salads -</h2>
            </div>
          </nav>

          <nav id="thirdNAvBar" style={{ backgroundColor: 'grey', width:'100%' }} class="uk-navbar-container " uk-navbar='true'>
            <div class="uk-navbar-center uk-margin-small-top uk-margin-small-bottom">
              <h2 style={{ color: 'white' }} className='uk-text-center uk-margin-auto-vertical thirdBorderText'>" Colorado Roots. Globally Inspired. Born in New England. "</h2>
            </div>
          </nav>
      </div>
    );
  }
}


export default Header;