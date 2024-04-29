import { TiLocationOutline } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCalendar } from "react-icons/rx";
import Aos from "aos";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="searchInputs flex"
        >
          <div className="singleInput flex">
            <div className="iconDiv">
              <TiLocationOutline className="icon" />
            </div>
            <div className="text">
              <h4>Location</h4>
              <input
                type="text"
                name=""
                id=""
                placeholder="where do you want to go ? "
              />
            </div>
          </div>
          {/* ================= */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <FaRegUserCircle className="icon" />
            </div>
            <div className="text">
              <h4>Travelers</h4>
              <input type="text" name="" id="" placeholder="Add guests " />
            </div>
          </div>

          {/* ================== */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="text">
              <h4>Check IN</h4>
              <input type="text" name="" id="" placeholder="Add Date " />
            </div>
          </div>

          {/* ==================== */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="text">
              <h4>Check Out</h4>
              <input type="text" name="" id="" placeholder="Add Date " />
            </div>
          </div>

          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
