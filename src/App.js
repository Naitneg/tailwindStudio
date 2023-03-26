import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Footer from "./Routes/Footer";
import Home from "./Routes/Home";
import Navbar from "./Routes/Navbar";
import Services from "./Routes/Services";
import Work from "./Routes/Work";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
