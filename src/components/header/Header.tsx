import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong className="title-2">
            Welcome to the ciocia_mocia page
          </strong>
          <br />
        </h1>
        <div className="header__text">
          <p>with passion for sweets</p>
        </div>  
      </div>
    </header>
  );
};

export default Header;
