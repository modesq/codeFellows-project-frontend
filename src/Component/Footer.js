import React from 'react';
import './StylingF.css';
import Container from 'react-bootstrap/Container';



class Footer extends React.Component {
  render () {
    return ( <>
      <div className="footer">
        <Container>
          <div className="footerB">
            <ul className="social">
            </ul>
          </div>
          <div className="footerB">
            <ul className="links">
              <li><a href="./Contact">Contact Us</a></li>
              <li><a href="./Main">Main st</a></li>
              <li><a href="#">Phone:+962799999999</a></li>
            </ul>
          </div>
          <div className="footerB">
            <div className="line">
              <div className="info">Amman , airport Street</div>
            </div>
            <div className="line">
              <div className="info">working Hours: From 8:00 AM to 5:00 PM</div>
            </div>
            <div className="line">
              <div className="info">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <iframe width="250" height="150" id="gmap_canvas" src='https://maps.google.com/maps?q=LTUC&t=&z=9&ie=UTF8&iwloc=&output=embed' title='LUTC' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
          </iframe>
        </Container>
        <p className="copyright">© 2022 Copyright </p>
      </div>
    </>
    );
  }
}

export default Footer;