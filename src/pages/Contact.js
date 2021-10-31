import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
            <div class="row section-head">
                <div class="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
                <div class="ten columns">
                    <p class="lead">Open for any Collaboration, you can reach me on my email.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="eight columns">
                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                    <label for="contactName">Name <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactName" name="contactName"></input>
                            </div>
                            <div>
                                    <label for="contactEmail">Email <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactEmail" name="contactEmail"></input>
                            </div>
                            <div>
                                    <label for="contactSubject">Subject</label>
                                    <input type="text" value="" size="35" id="contactSubject" name="contactSubject"></input>
                            </div>
                            <div>
                                <label for="contactMessage">Message <span class="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>
                            <div>
                                <button class="submit">Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif"></img>
                                </span>
                            </div>
                        </fieldset>
                    </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i class="fa fa-check"></i>Your message was sent, thank you!<br></br>
                        </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
    }
}