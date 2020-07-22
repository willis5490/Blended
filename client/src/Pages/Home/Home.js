import React, { Component } from 'react';

// import axios from 'axios'
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



class Home extends Component {

   

//     state = {
//         name: '',
//         email: '',
//         subject: '',
//         subject2: '',
//         message: '',
//        }
    
//        notify = () => {
//         toast.success("Your Email Has Been Sent !", {
//           position: toast.POSITION.BOTTOM_CENTER
//         });
//       };
//       notifyError = () => {
//         toast.error("You Must Fill Out All Forms !", {
//           position: toast.POSITION.BOTTOM_CENTER
//         });
//       };
     
      
    
//        sendEmail = event => {
//         //  event.preventDefault()
//          if(this.state.name === ''){
//            this.notifyError()
//          }else if(this.state.email === ''){
//           this.notifyError()
//          }else if(this.state.subject === ''){
//           this.notifyError()
//          }else if(this.state.message === ''){
//           this.notifyError()
//          }
         
//          else {
//           axios.post("https://www.mayflywoodworks.com/sendEmail", {
//             email: this.state.email,
//              name: this.state.name,
//              subject: this.state.subject,             
//              message: this.state.message
//            })
//              .then((response) => {
//               console.log(response)
//              })
//              .catch((err) => {
//                console.log(err)
//              })           
//              this.notify()
//              this.emptyFields()
             
//          }
    
    
//        };
    
//        handleInputChange = event => {
//          const { name, value } = event.target;
//          this.setState({
//            [name]: value
//          });
//        };
    
//        emptyFields = () => {
//          this.setState({
//            name: '',
//            email: '',
//            subject: '',           
//            message: ''
//          })
//        }


//   thumbItem = (item, i) => (
//     <span key={item} onClick={() => this.Carousel._onDotClick(i)}>* </span>
//   )



  // render nav
  render() {
   
    return (
      <div >

        <div id='homeWrapper1'>
          <div className='uk-container uk-margin-large-top uk-margin-large-bottom'>
            <div id='SlideWrap' class=" uk-visible-toggle uk-light " tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 3000; pause-on-hover: false; ">
                  <ul class="uk-slider-items uk-child-width-1-1 uk-align-center">
                      <li>
                          <img  className='desktopSlidePics uk-align-center ' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>
                      <li>
                          <img className='desktopSlidePics uk-align-center' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>             
                      <li>
                          <img className='desktopSlidePics uk-align-center' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>                      
                      <li>
                          <img className='desktopSlidePics uk-align-center' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>  
                      <li>
                          <img className='desktopSlidePics uk-align-center' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>  
                      <li>
                          <img className='desktopSlidePics uk-align-center' src="https://vignette.wikia.nocookie.net/memepediadankmemes/images/9/91/DERP.jpg/revision/latest/top-crop/width/360/height/450?cb=20180915163408" alt=""/>        
                      </li>                                
                  </ul>              
              </div> 
              <button class="uk-button uk-button-primary uk-button-large uk-align-center uk-margin-remove-top">Order Online!</button>
          </div>
        </div>
          
      </div>
    );
  }
}


export default Home;