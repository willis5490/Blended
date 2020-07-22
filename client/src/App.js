import React from 'react';
import { Route, Router, Switch } from "react-router-dom";

import Home from './Pages/Home/Home'
import History from './Pages/History/History'
import NotFound from './Pages/NotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <Router  history={History}>
    <div className="App">

    <div uk-sticky="true ">
    <div className='desktopMenu uk-visible@m'>
        <a href='' ><h3>About</h3></a>
        <a href='' ><h3>Menu</h3></a>
        <a href='' ><h3>Events</h3></a>
        <a href='' ><h3>Catering</h3></a>
        <a href='' ><h3>Locations</h3></a>
        <a href='' ><h3>Contact</h3></a>
        
      </div>
   </div>

    <Header></Header>

  

       <Switch>
         <Route exact path="/" render={props =><Home/>} />
         <Route render={props =><NotFound/>}/>
         
       </Switch>

       <Footer></Footer>
       
   </div>
 </Router>
  );
}

export default App;
