import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/addevents/addevents";
import Home from "./components/home/Home.js";
import {Routes, Route} from "react-router-dom";
import About from "./components/aboutus/AboutUs";
import ContactForm from "./components/contactus/ContactUs";
import NavBar from "./components/navbar/NavBar";
import EventGrid from "./components/eventsgrid/eventsgrid";

function App() {
  return (

    <>

  <div className="background">
    {/* <img src="https://c1.wallpaperflare.com/preview/397/588/977/party-lights-music-night.jpg" alt="background"/> */}
    <img src="https://c4.wallpaperflare.com/wallpaper/154/173/260/blue-gradient-simple-wallhaven-wallpaper-preview.jpg" alt="background"/>
    <div className="overlay"></div>
  </div>

    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addevent" element={<Form />} />
      <Route path="/eventsgrid" element={<EventGrid />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </>
  );
}

export default App;
