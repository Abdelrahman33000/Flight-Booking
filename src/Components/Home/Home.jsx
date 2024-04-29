import Aos from "aos";
// import 'aos/dist/aos.css'
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With us
        </h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDev">
          <video src="/video.mp4" autoPlay muted loop className="video"></video>
        </div>

        <img src="/plane.png" alt="" className="plane" />
      </div>
    </div>
  );
};

export default Home;
