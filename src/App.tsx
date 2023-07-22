// import './App.scss'
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CertainDessert from "./pages/CertainDessert";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Desserts from "./pages/Desserts";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/dessert" element={<CertainDessert />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
