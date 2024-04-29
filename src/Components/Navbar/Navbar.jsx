//Imported Icons ===========>
import { BsPhoneVibrate, BsYoutube } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Subscribers } from "../index";
import { Link } from "react-router-dom";

//Imported Image ===========>

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavbar = () => {
    setActive("navBarMenu  showNavbar");
  };

  const removeNavbar = () => {
    setActive("navBarMenu");
  };

  window.addEventListener("scroll", () => {
    if (scrollY >= 10) {
      document.getElementById("navBarTwo").style.backgroundColor = "#d6e2df";
      document.getElementById("navBarTwo").style.opacity = ".8";
    } else {
      document.getElementById("navBarTwo").style.backgroundColor =
        "transparent";
    }
  });

  const [search, setSearch] = useState(false);

  return (
    <div className="NavBar flex">
      <div className="NavBarOne flex">
        <div>
          <BiSearch
            className="icon"
            onClick={() => {
              setSearch(true);
            }}
          />
          {search && (
            <div
              style={{
                position: "fixed",
                right: "0",
                backgroundColor: "#0e8cec",
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: 5,
              }}
            >
              <CgClose
                style={{
                  margin: "200px auto ",
                  display: "flex",
                  fontSize: "30px",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSearch(false);
                }}
              />
              <input
                type="search"
                name=""
                id=""
                style={{
                  margin: "200px auto ",
                  display: "flex",
                  width: "90%",
                  borderRadius: "15px",
                  outline: "none",
                  background: "transparent",
                  height: "40px",
                }}
              />
            </div>
          )}
        </div>

        <div className="none flex">
          <li className="flex">
            
            <BsPhoneVibrate className="icon" /> +201011815928
          </li>
          <Link to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}>
            <li className="flex">
              
              <BsYoutube className="icon" /> Subscribe
            </li>
          </Link>
        </div>

        <div className="atb flex">
          <span> Sign In</span>
          <span> Sign Out</span>
        </div>
      </div>

      <div className="navBarTwo" id="navBarTwo">
        <div className="logoDiv">
          <img src="/logo.svg" alt="" className="logo" />
        </div>

        <div className={active}>
          <ul className="Menu flex">
            <li onClick={removeNavbar} className="listItem">
              Home
            </li>
            <li onClick={removeNavbar} className="listItem">
              About
            </li>
            <li onClick={removeNavbar} className="listItem">
              Offers
            </li>
            <li onClick={removeNavbar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavbar} className="listItem">
              Destinations
            </li>
          </ul>
          <button onClick={removeNavbar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavbar} className="toggleIcon">
          <CgMenuGridR className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
