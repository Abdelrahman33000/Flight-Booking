//Imported Icons ===========>
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { useEffect, useState } from "react";

//Imported Image ===========>

const Navbar = () => {

  const [active , setActive] =useState('navBarMenu')
  const showNavbar =() =>{
    setActive('navBarMenu  showNavbar')
  }

  const removeNavbar =() =>{
    setActive('navBarMenu')
  }



// useEffect(() =>{
//   const addBgColor =() =>{
//     if(window.scrollY >= 10){

//       setActive('NavBarTwo  navBar_with_Bg')
//     }else{
//       setActive('NavBarTwo')

//     }
//   }

// },[])

  window.addEventListener('scroll', ()=>{
    if(scrollY>=10){
      document.getElementById('navBarTwo').style.backgroundColor ="#d6e2df"
      document.getElementById('navBarTwo').style.opacity =".8"
    }
    else{
      document.getElementById('navBarTwo').style.backgroundColor ="transparent"
    }
  })


  return (
    <div className="NavBar flex">
      <div className="NavBarOne flex">
       <div>
         <SiConsul className="icon" />
       </div>

       <div className="none flex">
<li className="flex"> <BsPhoneVibrate className="icon"/> Support</li>
<li className="flex"> <AiOutlineGlobal className="icon" /> Languages</li>
       </div>

       <div className="atb flex">
 <span> Sign In</span>
 <span> Sign Out</span>
       </div>


        </div>

        <div className="navBarTwo" id="navBarTwo">
          <div className="logoDiv">
          <img src="/logo.svg"  alt="" className="logo"  />
          </div>

          <div className={active}>
            <ul className="Menu flex">
              <li onClick={removeNavbar} className="listItem">Home</li>
              <li onClick={removeNavbar} className="listItem">About</li>
              <li onClick={removeNavbar} className="listItem">Offers</li>
              <li onClick={removeNavbar} className="listItem">Seats</li>
              <li onClick={removeNavbar} className="listItem">Destinations</li>
            </ul>
<button onClick={removeNavbar} className="btn flex btnOne">
  Contact
</button>
          </div>

          <button className="btn flex btnTwo">
            Contact
           </button>

<div onClick={showNavbar} className="toggleIcon">
<CgMenuGridR  className="icon"/>
</div>
        </div>
    </div>
  )
}

export default Navbar