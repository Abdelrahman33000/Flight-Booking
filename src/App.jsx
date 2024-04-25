import { BrowserRouter } from "react-router-dom"
import { Footer, Home, Info, Lounge, Navbar, Search, Subscribers, Support, Travelers } from "./Components"
import ContactUs from "./Components/contactUs/ContactUs"
import Config from "./config"
// import Config from "./config"
import './main.css'

const App = () => {
  return (
    <div style={{backgroundColor:"#1ca0f9" ,overflow:"hidden"}}>
      <BrowserRouter >
      
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
    </div>
  )
}

export default App