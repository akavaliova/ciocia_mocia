import Header from "./../components/header/Header"
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
