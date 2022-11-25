function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="m-10"
            weight={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-40">
            <img
              weight={18}
              height={18}
              className="ui-header"
              src="/img/cart.svg"
              alt="cart"
            />
            <span className="ml-10">1205 руб.</span>
          </li>
          <li className="mr-35">
            <img
              weight={18}
              height={18}
              className="ui-header"
              src="/img/heart.svg"
              alt="heart"
            />
          </li>
          <li>
            <img
              weight={18}
              height={18}
              className="ui-header"
              src="/img/user.svg"
              alt="svg"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex sneakers">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/nikeBlazerMidSuede.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center price-wrapper">
              <div className="d-flex flex-column">
                <span className="price-header">Цена:</span>
                <b className="price"> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/nikeAirMax270.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center price-wrapper">
              <div className="d-flex flex-column">
                <span className="price-header">Цена:</span>
                <b className="price"> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/nikeBlazerMidSuedeGrey.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center price-wrapper">
              <div className="d-flex flex-column">
                <span className="price-header">Цена:</span>
                <b className="price">8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/pumaXAkaBokuFutureRider.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center price-wrapper">
              <div className="d-flex flex-column">
                <span className="price-header">Цена:</span>
                <b className="price">8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
