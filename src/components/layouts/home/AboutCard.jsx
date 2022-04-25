import React, { useState, Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardModal from "../CardModal";

const AboutCard = (props) => {
  const data = props.data;
  const [modalShow, setModalShow] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [buttonDisable, setButtonDisable] = useState(false);
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Apr 29, 2022 12:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance <= 0) {
        // stop our timer
        // setShowTimer(false)
        // clearInterval(interval.current)
        // setShowMint(true)
        clearInterval(interval.current);
        setButtonDisable(true);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setButtonDisable(false);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <Fragment>
      <section className="about_card_container">
        <div className="card-mine">
          {data.slice(0).map((item, index) => (
            <div key={index}>
              <div
                className="sc-card-product"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <div className="card-media">
                  <model-viewer
                    src="/assets/Gachapon.glb"
                    poster="/images/littletokyo.jpg"
                    alt="gachapon"
                    loading="lazy"
                    camera-controls
                    disable-zoom
                    style={{ width: "317px", height: "317px" }}
                    field-of-view="30deg"
                    camera-orbit="120deg"
                    auto-rotate
                  />
                  <Link to="/login" className="wishlist-button heart">
                    <span className="number-like">{item.wishlist}</span>
                  </Link>
                  <div className="coming-soon">{item.feature}</div>
                </div>
                <div className="card-title">
                  <h5 className="style2">
                    <Link to="/gacha-details">{item.title}</Link>
                  </h5>
                  <div className="tags">
                    <img src={item.tags} alt="Chain" />
                  </div>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={item.imgAuthor} alt="Waifu" />
                    </div>
                    <div className="info">
                      <span>Owned By</span>
                      <h6>
                        {" "}
                        <Link to="/authors-02">{item.nameAuthor}</Link>{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <h5> {item.price}</h5>
                  </div>
                </div>
                <div className="card-bottom">
                  <button
                    className="sc-button style bag fl-button pri-3 no-bg"
                    onClick={() => setModalShow(true)}
                  >
                    <span>Gacha</span>
                  </button>
                  <div className="about-card-countdown">
                    <div className="about-time-box">
                      <h2>{timerDays}D</h2>
                    </div>
                    <div className="about-time-box">
                      <h2>{timerHours}H</h2>
                    </div>
                    <div className="about-time-box">
                      <h2>{timerMinutes}M</h2>
                    </div>
                    <div className="about-time-box">
                      <h2>{timerSeconds}S</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

AboutCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AboutCard;
