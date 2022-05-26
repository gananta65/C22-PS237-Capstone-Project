import About from "./Components/About";
import Banner from "./Components/Banner";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Supported from "./Components/Supported";
import Team from "./Components/Team";
import Info from "./Components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="container">
        <Info />
        <About />
        <Feature />
      </div>
      <Supported />
      <div className="container">
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
