import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faNairaSign } from "@fortawesome/free-solid-svg-icons";

const Holder = () => {
  return (
    <>
      <div className="hot">
        <h1>Hot Pick For You</h1>
      </div>
      <div className="card">
        <div className="card-item">
          <div className="image">
            <img src="/images/airpod.png" alt="" />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            15,000{" "}
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>{" "}
              18,000{" "}
            </span>
          </h3>
          <p>
            300+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.6
          </p>
        </div>

        <div className="card-item">
          <div className="image">
            <img src="/images/watch1.png" alt="" />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            70,000
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>
              75,000
            </span>
          </h3>
          <p>
            1000+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.5
          </p>
        </div>

        <div className="card-item">
          <div className="image">
            <img src="/images/tv1.png" alt="" />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            300,000{" "}
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>{" "}
              450,000{" "}
            </span>
          </h3>
          <p>
            300+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.6
          </p>
        </div>

        <div className="card-item">
          <div className="image">
            <img src="/images/usb.png" alt="" />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            9,000{" "}
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>{" "}
              12,000{" "}
            </span>
          </h3>
          <p>
            500+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.6
          </p>
        </div>

        <div className="card-item">
          <div className="image">
            <img
              src="/images/camera.png"
              alt=""
              style={{ width: 250, height: 190 }}
            />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            600,000{" "}
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>
              680,000{" "}
            </span>
          </h3>
          <p>
            300+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.6
          </p>
        </div>

        <div className="card-item">
          <div className="image">
            <img
              src="/images/phone1.png"
              alt=""
              style={{ width: 250, height: 190 }}
            />
            <img className="off" src="/images/off.png" alt="" />
          </div>
          <h3>
            <i>
              <FontAwesomeIcon icon={faNairaSign} />
            </i>
            550,000{" "}
            <span className="strike">
              <i>
                <FontAwesomeIcon icon={faNairaSign} />
              </i>{" "}
              600,000{" "}
            </span>
          </h3>
          <p>
            300+ Sold
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            4.6
          </p>
        </div>
      </div>
    </>
  );
};

export default Holder;
