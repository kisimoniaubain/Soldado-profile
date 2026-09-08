import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="portfolio">
      <CustomCursor />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;