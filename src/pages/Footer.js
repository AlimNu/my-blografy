import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
          <footer>
            <div class="row">
            <div class="twelve columns">
                <ul class="social-links">
                    <li><a href="https://www.facebook.com/alimnuriqra/"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/lmnriqle"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/alimnuriqra/"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/alimnuriqra/"><i class="fa fa-instagram"></i></a></li>
                </ul>
                </div>
                    <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
                </div>
            </footer>
      </React.Fragment>
    );
    }
}