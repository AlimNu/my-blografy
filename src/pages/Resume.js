import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
<div class="row education">

   <div class="three columns header-col">
      <h1><span>Employment</span></h1>
   </div>

   <div class="nine columns main-col">

      <div class="row item">
         <div class="twelve columns">
            <h3>PT. Sigma Cipta Caraka</h3>
            <p class="info">Java Programmer <span>&bull;</span> <em class="date">Jan 2019 — Feb 2020</em></p>
            <p>
            SBL BIlateral PME 
            is project from KPEI indonesia that used to lend and borrowing Stock/Bond or other Equity from one stockholder 
            to another stockholder under the supervision of KPEI as a legal institution.
            • Build a web-based application
            • Using Java Spring Boot for back-end
            • Handle the main module for back-end of this project
            • Using the Thymeleaf Framework for front-end
            • Mostly use HTML, CSS, Javascript to build and control the User Interface
            • Using Oracle Database for database management
            • Run-on Apache Server using tomcat
            </p>
         </div>
      </div> 

      <div class="row item">
         <div class="twelve columns">
            <h3>KoinWorks</h3>
            <p class="info">Software Engineer ( Back-End) <span>&bull;</span> <em class="date">Mar 2020 — Apr 2020</em></p>
            <p>
            Provide Service API ( REST ) using rails 6 with ruby.
            </p>
         </div>
      </div> 
      <div class="row item">
         <div class="twelve columns">
            <h3>Astra Graphia Information Technology</h3>
            <p class="info">Java Programmer <span>&bull;</span> <em class="date">May 2020 — Present</em></p>
            <p>
            Provide service and application for the client (Telkomsel)  using Java as Back-end an JavaScriptpt for front-end.
            </p>
         </div>
      </div> 

   </div>

</div> 
</section>
      </React.Fragment>
 );
}
}