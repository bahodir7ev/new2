import React from "react";
import "./components/index"

function CartPage() {
  return (
    <div className="container">
      <div className="card-text">
        <h1 className="card-text__h1">Корзина</h1>
      </div>
      <div className="card-main">
        <div className="card-panel">
          <div className="card-panel-text">
            <p>Очистить корзину</p>
          </div>
          <div className="card-panel__box">
            <img
              src="../../../public/images/Sweets.png"
              alt="sweets"
              className="card-panel__box__icon"
            />
            <div className="card-panel__box__text">
              <p className="card-panel__box__title">
                M&M’s шоколадные конфеты <br /> 130гр{" "}
              </p>
              <p className="card-panel__box__subtitle">Осталось: 2 шт.</p>
            </div>
            <button className="card-panel__box__button">
              <div className="button-in">
                <img src="../../../public/icons/minus.svg" alt="minus" />
                <p>1</p>
                <img src="../../../public/icons/plus.svg" alt="plus" />
              </div>
            </button>
            <div className="card-panel__box__cost">
              <p className="card-panel__box__cost__title">820 тг.</p>
              <p className="card-panel__box__cost__subtitle">410 тг./шт.</p>
            </div>
            <img
              src="../../../public/icons/delete.svg"
              alt="delete"
              className="card-panel__box__delete"
            />
          </div>
          <div className="card-panel__box">
            <img
              src="../../../public/images/Sweets.png"
              alt="sweets"
              className="card-panel__box__icon"
            />
            <div className="card-panel__box__text">
              <p className="card-panel__box__title">
                M&M’s шоколадные конфеты <br /> 130гр{" "}
              </p>
              <p className="card-panel__box__subtitle">Осталось: 2 шт.</p>
            </div>
            <button className="card-panel__box__button">
              <div className="button-in">
                <img src="../../../public/icons/minus.svg" alt="minus" />
                <p>1</p>
                <img src="../../../public/icons/plus.svg" alt="plus" />
              </div>
            </button>
            <div className="card-panel__box__cost">
              <p className="card-panel__box__cost__title">820 тг.</p>
              <p className="card-panel__box__cost__subtitle">410 тг./шт.</p>
            </div>
            <img
              src="../../../public/icons/delete.svg"
              alt="delete"
              className="card-panel__box__delete"
            />
          </div>
          <div className="card-panel__box">
            <img
              src="../../../public/images/Sweets.png"
              alt="sweets"
              className="card-panel__box__icon"
            />
            <div className="card-panel__box__text">
              <p className="card-panel__box__title">
                M&M’s шоколадные конфеты <br /> 130гр{" "}
              </p>
              <p className="card-panel__box__subtitle">Осталось: 2 шт.</p>
            </div>
            <button className="card-panel__box__button">
              <div className="button-in">
                <img src="../../../public/icons/minus.svg" alt="minus" />
                <p>1</p>
                <img src="../../../public/icons/plus.svg" alt="plus" />
              </div>
            </button>
            <div className="card-panel__box__cost">
              <p className="card-panel__box__cost__title">820 тг.</p>
              <p className="card-panel__box__cost__subtitle">410 тг./шт.</p>
            </div>
            <img
              src="../../../public/icons/delete.svg"
              alt="delete"
              className="card-panel__box__delete"
            />
          </div>
          <div className="card-panel__box">
            <img
              src="../../../public/images/Sweets.png"
              alt="sweets"
              className="card-panel__box__icon"
            />
            <div className="card-panel__box__text">
              <p className="card-panel__box__title">
                M&M’s шоколадные конфеты <br /> 130гр{" "}
              </p>
              <p className="card-panel__box__subtitle">Осталось: 2 шт.</p>
            </div>
            <button className="card-panel__box__button">
              <div className="button-in">
                <img src="../../../public/icons/minus.svg" alt="minus" />
                <p>1</p>
                <img src="../../../public/icons/plus.svg" alt="plus" />
              </div>
            </button>
            <div className="card-panel__box__cost">
              <p className="card-panel__box__cost__title">820 тг.</p>
              <p className="card-panel__box__cost__subtitle">410 тг./шт.</p>
            </div>
            <img
              src="../../../public/icons/delete.svg"
              alt="delete"
              className="card-panel__box__delete"
            />
          </div>
        </div>
        <div className="card-login">
          <button className="card-login__buyurtma">Оформить заказ</button>
          <button className="card-login__promokod">Использовать промокод</button>
          <div className="card-login__text">
            <div className="card-login__title">Итоговый вес:</div>
            <div className="card-login__subtitle">2 239 г.</div>
          </div>
          <div className="card-login__text">
            <div className="card-login__title">Тип заказа:</div>
            <div className="card-login__subtitle">бандероль</div>
          </div>
          <div className="card-login__text">
            <div className="card-login__title">Сумма заказа:</div>
            <div className="card-login__subtitle">34 000 тг.</div>
          </div>
          <div className="card-login__text">
            <div className="card-login__title">Промокод:</div>
            <div className="card-login__subtitle">-3 000 тг.</div>
          </div>
          <div className="card-login__text">
            <div className="card-login__title">Cтоимость доставки</div>
            <div className="card-login__subtitle">1 500 тг.</div>
          </div>
          <div className="card-login__text card-login__itogo">
            <div className="card-login__title card-login__itogo"><b>Итого:</b></div>
            <div className="card-login__subtitle card-login__itogo"><b>32 500 тг.</b></div>
          </div>
          <div className="card-login-title">
          <div className="card-login__txt">Минимальная сумма заказа: 4 000 тг.</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default CartPage;
