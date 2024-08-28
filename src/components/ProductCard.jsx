import React from 'react'

function ProductCard({ product }) {
  const { image, title, quantity, weight, price, old_price } = product
  return (
    <div className='productcard' >
      <div className="productcard__image">
        <img src={image} alt={title} />
      </div>

      <div className="productcard__content">
        <h4 className="productcard__content-title">{title}</h4>
        <span className="productcard__content-count">{quantity}</span>
        <span className="productcard__content-weight">{weight}</span>
      </div>

      <div className="productcard__shop">
        <div className="productcard__shop-prices">
          <span className="productcard__shop-prices-old">{old_price.toLocaleString()} so'm</span>
          <span className="productcard__shop-prices-new">{price.toLocaleString()} so'm</span>
        </div>
        <div className="productcard__shop-btn">
          <button className='productcard__shop-btn__btn'>В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
