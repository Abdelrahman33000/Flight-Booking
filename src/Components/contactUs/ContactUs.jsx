import "./ContactUs.css";
import {Link} from 'react-router-dom'
import Lottie from "lottie-react";

import contact from '../../../public/contact.json';

const ContactUs = () => {
  return (
    <div className="container">


      <div className="  text-center p-4"style={{textAlign:"center" , padding:"20px"}}>
        <h1>
          <b>Contact form </b>{" "}
        </h1>
        <h4 style={{fontSize:"20px"}}>  We are always here for you to provide the best service .</h4>
      </div>

      <div className="container side rounded-5    me-2 ">
        <div className="as grid" style={{display:"flex", flexWrap:"wrap"}} >

          <div className="side1 " style={{borderRadius:"15px" , boxShadow:"5px 5px 15px #000" , margin:"20px auto", padding:"10px"}}>
        <Lottie animationData={contact}   />

            <h4  className="p-5">Request a call back </h4>
            <h5  className="mx-4 mb-4">Simply leave your contact number and we will call you back.

</h5>
<div className=""  style={{margin:"20px 0"}}>
  
  <button className=" btn5" style={{width:"100%" , padding:"7px" , borderRadius:"10px", }}><Link to={"https://api.whatsapp.com/send?phone=201011815928"} style={{textDecoration:"none" , color:"#fff"}}> Contact us on WhatsApp
 </Link>
  
  </button> <br />
  <button className="p-3 w-50 rounded-4 btn5" style={{width:"100%" , padding:"7px" , borderRadius:"10px", marginTop:"10px" }} >
    <Link to={""} style={{textDecoration:"none" , color:"#fff"}}> Message us on Instagram </Link>
  </button>
        
</div>  
          
          </div>

          <div className=" my-5 ms- shadow-lg   rounded-4 mt-2 col-lg-8"  style={{margin:"20px auto"}}>
            <form action={"#"} className="contact ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className="me-3 form-control">
                  <div>
                    <label>Name</label>
                  </div>
                  <input type="text" className="inp mt-3" style={{outline:"none"}} required />
                </div>
         
              </div>

              <div className="">
             
                <div className="">
                  <div>
                    <label>  Email </label>
                  </div>
                  <input type="email" className="inp " required />
                </div>
              </div>
<div>
             
              <textarea placeholder="Message" style={{backgroundColor:"#b4b4ad" , width:"100%", padding:"5px" ,borderRadius:"15px", margin:"20px auto" }} required></textarea>
              </div>

              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <button className="btn5 p-3 rounded-4 w-100" style={{width:"100%" , padding:"7px" , borderRadius:"10px", marginTop:"10px" }}>Send</button>
              </div>
            </form>
          </div>


        </div>
      </div>


    </div>
  );
};
export default ContactUs;
