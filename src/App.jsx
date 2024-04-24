import { Footer, Home, Info, Lounge, Navbar, Search, Subscribers, Support, Travelers } from "./Components"
import Config from "./config"
// import Config from "./config"
import './main.css'

const App = () => {
  return (
    <div style={{backgroundColor:"#1ca0f9" ,overflow:"hidden"}}>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer /> 
      <Config />
    </div>
  )
}

export default App