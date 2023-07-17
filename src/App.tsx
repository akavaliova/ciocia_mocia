import { useState } from 'react'
// import './App.scss'
import sun from "./img/icons/sun.svg"
import moon from "./img/icons/moon.svg"
import "./styles/main.css"
import instagram from "./img/icons/instagram.svg"


function App() {
  return (
    <>
      <div className="App">
      <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>ciocia_mocia</strong> natural desserts</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                    <li className="nav-list__item"><a href="./projects.html" className="nav-list__link">Desserts</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Welcome to the <em>ciocia_mocia</em> page</strong><br />
            </h1>
            <div className="header__text">
                <p>with passion for sweets</p>
            </div>
            <a href="#!" className="btn">Download list of desserts</a>
        </div>
    </header>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Mochi</h2>
                        <p>Our patisserie specializes in making Japanese Mochi desserts</p>
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
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 ciocia_mocia.com</p>
                </div>
            </div>
        </div>
    </footer>
      </div>
    </>
  )
}

export default App
