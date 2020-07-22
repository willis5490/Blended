import React, { Component } from 'react';


class Footer extends Component {

  

  // render nav
  render() {

   


    return (
      <div >
          <div id='footerWrapper'>
            <div uk-grid='true' className=''>
                <div className='uk-width-1-3 footerContainers'>
                    <div className='uk-text-center'>
                    <a className='footerSocialMediaIcons' href="" uk-icon="icon: instagram; ratio: 2"></a>
                    <a className='footerSocialMediaIcons' href="" uk-icon="icon: facebook; ratio: 2"></a>
                    <a className='footerSocialMediaIcons' href="" uk-icon="icon: twitter; ratio: 2"></a>
                    <a className='footerSocialMediaIcons' href="" uk-icon="icon: tripadvisor; ratio: 2"></a>
                    <a className='footerSocialMediaIcons' href="" uk-icon="icon: yelp; ratio: 2"></a>
                    </div>
                </div>
                <div id='middleFooterContainer' className='uk-width-1-3 footerContainers ' >
                    <div className='uk-text-center '>
                        <h1>Reviews</h1>
                    </div>
                </div>
                <div className='uk-width-1-3 footerContainers'>
                    <div className='uk-text-center'>
                        <h1>Contact Info</h1>
                    </div>
                </div>
            </div>
          </div>
       
          
      </div>
    );
  }
}


export default Footer;