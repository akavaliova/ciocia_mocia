// import './App.scss'
import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar"
import instagram from "./img/icons/instagram.svg";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />

        <main className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Mochi</h2>
                <p>
                  Our patisserie specializes in making Japanese Mochi desserts
                </p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Other desserts</h2>
                <p>We also make cupcakes and cakes to order</p>
              </li>
            </ul>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer__wrapper">
              <ul className="social">
                <li className="social__item">
                  <a href="#!">
                    <img src={instagram} alt="Link" />
                  </a>
                </li>
              </ul>
              <div className="copyright">
                <p>© 2023 ciocia_mocia.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
