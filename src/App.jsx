import { BrowserRouter } from "react-router-dom";
import {
  Footer,
  Home,
  Info,
  Lounge,
  Navbar,
  Search,
  Subscribers,
  Support,
  Travelers,
} from "./Components";
import ContactUs from "./Components/contactUs/ContactUs";
import Config from "./config";
// import Config from "./config"
import "./main.css";
import { BiUpArrowCircle } from "react-icons/bi";

const App = () => {
  window.addEventListener("scroll", () => {
    if (scrollY >= 10) {
      document.getElementById("up").style.display = "flex";
    } else {
      document.getElementById("up").style.display = "none";
    }
  });

  return (
    <div style={{ backgroundColor: "#1ca0f9", overflow: "hidden" }}>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Search />
        <Support />
        <Info />
        <Lounge />
        <Travelers />
        <Subscribers />
        <ContactUs />
        <Footer />
        <Config />
      </BrowserRouter>
      <a href="#" id="up">
        <BiUpArrowCircle
          style={{
            fontSize: "30px",
            position: "fixed",
            bottom: "20px",
            right: "30px",
          }}
        />
      </a>
    </div>
  );
};

export default App;
