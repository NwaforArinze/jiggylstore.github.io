import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faNairaSign, faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [toggle, setToggle] = React.useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div className="tab">
      <ul>
        <li className="active" onClick={() => updateToggle(1)}>
          Recommended
        </li>
        <li onClick={() => updateToggle(2)}>Home appliances</li>
        <li onClick={() => updateToggle(3)}>Gadget</li>
        <li onClick={() => updateToggle(4)}>Electronics</li>
        <li onClick={() => updateToggle(5)}>Security gadget</li>
        <li onClick={() => updateToggle(6)}>Phones</li>
      </ul>
      <div className={toggle === 1 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/speaker.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Sound box</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/tv2.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Samsung Led TV</h6>
                <p>
                  200+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  300,000
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-head">
          <div className="home-item">
            <img src="/images/camera.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Nikon 7s camera</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  500,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/headset.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original Headset</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  55,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/phone1.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>iPhone 13</h6>
                <p>
                  50+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  350,000
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-head">
          <div className="home-item">
            <img src="/images/led.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ring light</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  25,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/phone2.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Techno spark 4</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  100,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/watch2.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>iWatch - series 7</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  150,000
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-head">
          <div className="home-item">
            <img src="/images/powerbank.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original power bank</h6>
                <p>
                  1000+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  100,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/kids.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Amazon Kids Tab</h6>
                <p>
                  70+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  5.0
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  95,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/skate.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Electric Skateboard</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  5.0
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  150,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 2 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img
              src="/images/tv1.png"
              alt=""
              style={{ width: 350, height: 190 }}
            />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Sony Led TV</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  250,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/speaker.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Sound box</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  25,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/tv2.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  300,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 3 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img
              src="/images/usb.png"
              alt=""
              style={{ width: 350, height: 190 }}
            />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Power bank</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  45,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img
              src="/images/airpod.png"
              alt=""
              style={{ width: 350, height: 190 }}
            />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original Airpod</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 4 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 5 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 6 ? "show-content" : "content"}>
        <div className="home-head">
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
          <div className="home-item">
            <img src="/images/earbud.png" alt="" />
            <i className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <div className="home-content">
              <div className="home-child">
                <h6>Original ear buds</h6>
                <p>
                  500+ Sold
                  <i>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  4.6
                </p>
              </div>
              <div className="home-child2">
                <h3>
                  <i>
                    <FontAwesomeIcon icon={faNairaSign} />
                  </i>
                  15,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
