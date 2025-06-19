import { AddToCartButton } from "./AddToCartButton"
import { QuantityHandlers } from "./QuantityHandlers"

import './Products.css'
import { nanoid } from "nanoid"

export const Products = ({products, increment, decrement}) => {
    return (
        <div className="products">
          {products.map((product, index) => {
            return (
              <div key={nanoid()} className="product-card">
                <div className="image-wrapper">
                  <img className={product.quantityInCart > 0 ? 'custom-border' : ''} src={product.image.tablet} srcSet={`${product.image.mobile} 240w, ${product.image.tablet} 300w, ${product.image.desktop} 720w`} alt={product.name} />
                  <div className="buttons">
                    {product.quantityInCart < 1 ?
                      <AddToCartButton index={index} increment={increment}/>
                      :
                      <QuantityHandlers quantityInCart={product.quantityInCart} index={index} increment={increment} decrement={decrement}/>
                    }
                  </div>
                </div>
                <div className="product-details">
                  <p className="product-category">{product.category}</p>
                  <h2 className="product-name">{product.name}</h2>
                  <p className='product-price'>{`$${product.price.toFixed(2)}`}</p>
                </div>
              </div>)
          })}
        </div>
    )
}