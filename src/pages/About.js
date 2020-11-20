import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
            <section id="about">
                <div class="row">
                    <div class="three columns">
                        <img class="profile-pic"  src="images/profilepic.jpg" alt="" />
                    </div>
                    <div class="nine columns main-col">
                        <h2>About Me</h2>
                        <p>Experienced Java Software Engineer with a demonstrated history of working in the information 
                        technology and services industry. Skilled in Spring Boot, Oracle Database, PHP, and Java. 
                        Strong engineering professional with a Informatics focused in Computer Science from Institut 
                        Teknologi Telkom.
                        </p>
                        <div class="row">
                            <div class="columns contact-details">
                                <h2>Contact Details</h2>
                                <p class="address">
                                        <span>Alim Nur Iqra A</span><br></br>
                                        <span>Jl Mampang Prapatan 4<br></br>
                                            Jakarta Selatan, DKI Jakarta 94043 ID
                                        </span><br></br>
                                        <span>082115583033</span><br></br>
                                        <span>noeralim21@gmail.com</span>
                                </p>
                            </div>
                            <div class="columns download">
                                <p>
                                    <a href="#" class="button"><i class="fa fa-download"></i>Download Resume</a>
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