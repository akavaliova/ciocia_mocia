import "./style.scss";
import instagram from "./../../img/icons/instagram.svg";

const Footer = () => {
    return (<footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item">
            <a href="https://www.instagram.com/ciocia_mocia/" target="_blank">
              <img src={instagram} alt="Link" />
            </a>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2023 ciocia_mocia.com</p>
        </div>
      </div>
    </div>
  </footer>);
}
 
export default Footer;