import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-body">
          <div className="banner-content">
            <div>
              <img src="/images/waranty.png" alt="" />
            </div>
            <div className="tex">
              <h1>1 Year Warranty</h1>
              <p>All our products come with a year free Warranty.</p>
            </div>
          </div>
          <div className="banner-content">
            <div>
              <img src="/images/fast.png" alt="" />
            </div>
            <div className="tex">
              <h1>Same Day Delivery</h1>
              <p>We deliver within 24 hours, once payment is confirmed.</p>
            </div>
          </div>
          <div className="banner-content">
            <div>
              <img src="/images/customer.png" alt="" />
            </div>

            <div className="tex">
              <h1>Customer Support</h1>
              <p>
                Our Support team are always on standby ro tespond to your
                quiries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="news">
          <h1>Join Our Newsletter</h1>
          <div className="newsletter">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footerTwo">
          <div className="footerTwo-items">
            <div className="item1">
              <img src="/images/icon.png" alt="" />
              <p>
                Jiggyl stores offers the best, the biggest gadgets and
                electronics household s with over 25 years market experience.
              </p>
            </div>

            <div className="item2">
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Voucher</a>
            </div>

            <div className="item2">
              <a href="">Delivery</a>
              <a href="">FAQs</a>
              <a href="">Services</a>
            </div>

            <div className="item2">
              <a href="">Clearance Sales</a>
              <a href="">Terms & Conditions</a>
              <a href="">Contact Us</a>
            </div>

            <div className="item3">
              <h5>Download Our Free App</h5>
              <p>Get access to exclusive offers!</p>
              <img src="/images/foot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-items">
            <i>
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
            <i>
              <FontAwesomeIcon icon={faXTwitter} />
            </i>
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
            <i>
              <FontAwesomeIcon icon={faSquareYoutube} />
            </i>
          </div>
          <div className="footer-bottom-items2">
            <p>Copyright &copy; 2024 Jiggylstores. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
