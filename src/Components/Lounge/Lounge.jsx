import Aos from "aos"
import { useEffect } from "react"

const Lounge = () => {
  useEffect(()=>{
    Aos.init()
  } ,[])

  return (
    <div className="lounge container section">
      <div  data-aos="fade-up" data-aos-duration="2000" className="sectionContainer grid">
        <div className="videoDiv">
          <video src="/v2.mp4" autoPlay muted loop></video>
        </div>
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          
       <div className="grids grid">
        <div data-aos="fade-down" data-aos-duration="2000" className="singleGrid">
          <span className="gridTitle">
            Help through the airport
          </span>
          <p>
            You can also call airlines from your phone and book a flight ticket to one of your favorite destinations . 
          </p>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className="singleGrid">
          <span className="gridTitle">
            Help through the airport
          </span>
          <p>
            You can also call airlines from your phone and book a flight ticket to one of your favorite destinations . 
          </p>
        </div>

        <div  data-aos="fade-up" data-aos-duration="2000" className="singleGrid">
          <span className="gridTitle">
            Priority Boarding
          </span>
          <p>
            You can also call airlines from your phone and book a flight ticket to one of your favorite destinations . 
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="singleGrid">
          <span className="gridTitle">
            Chauffeur-drive service
          </span>
          <p>
            You can also call airlines from your phone and book a flight ticket to one of your favorite destinations . 
          </p>
        </div>

       </div>


        </div>

      </div>
    </div>
  )
}

export default Lounge