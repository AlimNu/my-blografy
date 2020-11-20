import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">

      <nav id="nav-wrap">

         <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" class="nav">
            <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
	         <li><a class="smoothscroll" href="#resume">Resume</a></li>
            <li><a class="smoothscroll" href="#contact">Contact</a></li>
         </ul> 
      </nav>

      <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline">I'm Alim Nur Iqra A.</h1>
            <h3>I'm a Jakarta based <span>Software Engineer</span> creating awesome and
            effective software around the globe. Let's <a class="smoothscroll" href="#about"> start scrolling </a>
             and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul class="social">
               <li><a href="https://www.facebook.com/alimnuriqra/"><i class="fa fa-facebook"></i></a></li>
               <li><a href="https://twitter.com/lmnriqle"><i class="fa fa-twitter"></i></a></li>
               <li><a href="https://www.linkedin.com/in/alimnuriqra/"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="https://www.instagram.com/alimnuriqra/"><i class="fa fa-instagram"></i></a></li>
            </ul>
         </div>
      </div>

      <p class="scrolldown">
         <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
      </p>

   </header>
      </React.Fragment>
    );
  }
}
