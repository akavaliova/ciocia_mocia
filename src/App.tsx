// import './App.scss'
import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
// import Contacts from "./pages/Contacts";
// import Home from "./pages/Home";
import Desserts from "./pages/Desserts";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        <Desserts />
        {/* <Contacts /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
