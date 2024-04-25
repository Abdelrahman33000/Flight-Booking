import { ImFacebook } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";

const Footer = () => {
  useEffect(()=>{
    Aos.init()
  } ,[])

  return (
    <div className="footer">
      <div data-aos="fade-up" data-aos-duration="2000" className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src="/logo.svg" alt="" className="logo" />
          </div>
          <p> Your Mind Should be Stronger Than Your Flyings , Fly!</p>
          <div data-aos="fade-down" data-aos-duration="2000" className="socialIcon flex">
  <ImFacebook  className="icon" />
  <FaYoutube  className="icon"/>
  <FaLinkedin  className="icon"/>
  <MdEmail  className="icon"/>
          </div>
        </div>

        <div  className="footerLinks">
          <span className="footerTitle">Information</span>
          <li><a href="" className=""> Home</a> </li>
          <li><a href="" className=""> Explore</a></li> 
          <li> <a href="" className=""> Flight Status</a></li> 
          <li><a href="" className=""> Travel</a></li> 
          <li><a href="" className=""> Check-In</a></li> 
          <li><a href="" className=""> Manage Your Booking</a></li> 
        </div>

        <div  className="footerLinks">
          <span className="footerTitle">Quick Guide</span>
          <li><a href="" className=""> FAQ</a> </li>
          <li><a href="" className=""> How To</a></li> 
          <li> <a href="" className=""> Feature</a></li> 
          <li><a href="" className=""> Baggage</a></li> 
          <li><a href="" className=""> Route Map</a></li> 
          <li><a href="" className=""> Our Communities</a></li> 
        </div>

        <div  className="footerLinks">
          <span className="footerTitle">Information </span>
          <li><a href="" className=""> Chauffeur</a> </li>
          <li><a href="" className=""> Our Partners</a></li> 
          <li> <a href="" className=""> Destinations</a></li> 
          <li><a href="" className=""> Careers</a></li> 
          <li><a href="" className=""> Transportation</a></li> 
          <li><a href="" className=""> Programme Rules</a></li> 
        </div>


      </div>
      

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed By :: <a href="https://www.facebook.com/profile.php?id=100069089196548" target="_blank">Eng | Abdelrahman Abdelwahab </a></p>
      </div>
    </div>
  )
}

export default Footer
