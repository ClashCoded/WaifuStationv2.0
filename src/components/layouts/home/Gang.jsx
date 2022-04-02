import React, { useEffect } from "react";
import img1 from "../../../assets/images/home/Team/test1-no-bg.png";
import img2 from "../../../assets/images/home/Team/test2-no-bg.png";
import img3 from "../../../assets/images/home/Team/test3-no-bg.png";
import img4 from "../../../assets/images/home/Team/test4-no-bg.png";
import img5 from "../../../assets/images/home/Team/test5-no-bg.png";
import img6 from "../../../assets/images/home/Team/test6-no-bg.png";
import img7 from "../../../assets/images/home/Team/test7-no-bg.png";
import img8 from "../../../assets/images/home/Team/test8-no-bg.png";
import discord from "../../../assets/images/home/Team/join-discord.png";
import waifuDemo from "../../../assets/images/home/Video/WaifustationDemo.mp4"
import AOS from "aos";
import "aos/dist/aos.css";
function Gang() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div id="gang" className="gang">
      <h1 data-aos="fade-up">Let's Join the gang!</h1>
      <video style={{width:'1000px', borderRadius:'25px'}} muted autoPlay controls controlsList="nodownload noplaybackrate" disablePictureInPicture> 
        <source src={waifuDemo} type="video/mp4" />
      </video>
      <div data-aos="fade-up" data-aos-delay="50" className="gang_btn-div">
        <a
          className="a-gang-button"
          href="http://discord.gg/BQacmjg8kg"
          target="__blank"
        >
          <img className="discord-button" src={discord} alt="discord" />
        </a>
      </div>
      <div className="gang-absolute">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="0"
          src={img1}
          data-aos-duration="600"
          alt="..."
          className="gang-img1"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          data-aos-duration="600"
          src={img2}
          alt="..."
          className="gang-img2"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="400"
          data-aos-duration="600"
          src={img3}
          alt="..."
          className="gang-img3"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="600"
          data-aos-duration="600"
          src={img4}
          alt="..."
          className="gang-img4"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="800"
          src={img5}
          data-aos-duration="600"
          alt="..."
          className="gang-img5"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1000"
          data-aos-duration="600"
          src={img6}
          alt="..."
          className="gang-img6"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1200"
          src={img7}
          data-aos-duration="600"
          alt="..."
          className="gang-img7"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1400"
          src={img8}
          data-aos-duration="600"
          alt="..."
          className="gang-img8"
        />
        {/* <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1200"
          src={img1}
          data-aos-duration="600"
          alt="..."
          className="gang-img9"
        /> */}
      </div>
    </div>
  );
}

export default Gang;
