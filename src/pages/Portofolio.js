import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="portfolio">
            <div class="row">
                <div class="twelve columns collapsed">
                    <h1>Check Out Some of My Github Repository</h1>
                    <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="https://github.com/AlimNu/django-microservice" title="">
                                    <img alt="" src="images/portfolio/python.png"></img>
                                    <div class="overlay">
                                        <div class="portfolio-item-meta">
                                                <h5>Python</h5>
                                            <p>Back End API</p>
                                            </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                        </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="https://github.com/AlimNu/nex-carlos-recomendation-repo-web/tree/master/webapps/nexcarlos-recommendation" title="">
                                    <img alt="" src="images/portfolio/console.jpg"></img>
                                    <div class="overlay">
                                        <div class="portfolio-item-meta">
                                                <h5>Website</h5>
                                            <p>Web Development</p>
                                            </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                        </div>

                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="https://github.com/AlimNu/flask-micro-service" title="">
                                    <img alt="" src="images/portfolio/origami.jpg"></img>
                                    <div class="overlay">
                                        <div class="portfolio-item-meta">
                                                <h5>Python</h5>
                                            <p>Flask Microservice</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                        </div>

                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="https://github.com/AlimNu/covid-update-app" title="">
                                        <img alt="" src="images/portfolio/covid-box.png"></img>
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                    <h5>Mobile App</h5>
                                                <p>Flutter Application</p>
                                            </div>
                                        </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
              </div> 
        </section>
      </React.Fragment>
    );
    }
}