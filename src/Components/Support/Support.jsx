import Aos from "aos";
import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="support container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="sectionContainer"
      >
        <div data-aos="fade-up" data-aos-duration="2500" className="titlesDiv">
          <small>Travel Support</small>
          <h2>plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans , see what to expect along
            the journey
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2900"
          className="infoDiv grid"
        >
          <div className="textDiv grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans , see what to expect
                along the journey to your favorite destinations
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number" style={{ backgroundColor: "#d31515" }}>
                02
              </span>
              <h4>Chauffeur services at your arrival </h4>
              <p>
                Find help with booking and travel plans , see what to expect
                along the journey to your favorite destinations
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="5500"
              className="singleInfo"
            >
              <span className="number" style={{ backgroundColor: "#d35115" }}>
                03
              </span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans , see what to expect
                along the journey to your favorite destinations
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="imgDiv">
            {/* <img src="/p1.jpg" alt="" style={{position:"absolute", }}/> */}
            {/* <img src="/p2.jpg" alt="" style={{position:"absolute" }}/> */}
            <img src="/p3.jpg" alt="" style={{ borderRadius: "15rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
