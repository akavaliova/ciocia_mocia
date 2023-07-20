import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Welcome to the ciocia_mocia page
          </strong>
          <br />
        </h1>
        <div className="header__text">
          <p>with passion for sweets</p>
        </div>
        <a href="#!" className="btn">
          Download list of desserts
        </a>
      </div>
    </header>
  );
};

export default Header;
