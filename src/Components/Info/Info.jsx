import { RxCalendar } from "react-icons/rx";
import { GoShieldCheck } from "react-icons/go";
import { BsBookmarkCheck } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";

const Info = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="info section">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="infoContainer container"
      >
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View all</button>
        </div>

        <div className="cardsDiv grid">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="singleCard grid"
          >
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle"> Book & Relax</span>
            <p>
              you can also call airlines from your phone and book a flight
              ticket !
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorOne">
              <GoShieldCheck className="icon" />
            </div>
            <span className="cardTitle"> Smart Checklist</span>
            <p>
              you can also call airlines from your phone and book a flight
              ticket !
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle"> Save More </span>
            <p>
              you can also call airlines from your phone and book a flight
              ticket !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
