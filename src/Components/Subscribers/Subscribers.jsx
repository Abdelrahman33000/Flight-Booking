import Aos from "aos"
import { useEffect } from "react"

const Subscribers = () => {
  useEffect(()=>{
    Aos.init()
  } ,[])

  return (
    <div className="subscribe section">
      <div data-aos="fade-up" data-aos-duration="2000" className="sectionContainer container">
        <h2 data-aos="fade-right" data-aos-duration="2000"> Subscribe NewsLetters & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter Your Email Address" name="" id="" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers