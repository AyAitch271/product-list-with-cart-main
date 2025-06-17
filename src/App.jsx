import { useId, useState } from 'react'
import './App.css'
import './components/main.css'

import productsData from '../data/data.json'
import { Cart } from './components/cart/Cart';

function App() {

  const [products, setProducts] = useState(productsData?.map((product) => {
    return { ...product, quantityInCart: 0, id: useId() }
  }));

  const [isVisible, setIsVisible] = useState(false)

  const removeFromCart = (id) => {
    const newProducts = [...products]
    newProducts.map((p => p.quantityInCart = p.id === id ? 0 : p.quantityInCart))
    setProducts(newProducts)
  }

  const updateCart = () => {

  }

  const clearAll = () => {
    const newProducts = [products]
    newProducts.map(p => p.quantityInCart = 0)
    setProducts(newProducts)
  }

  const increment = (index) => {
    const newProducts = [...products]
    newProducts[index].quantityInCart += 1
    setProducts(newProducts)
  }


  const decrement = (index) => {
    const newProducts = [...products]
    newProducts[index].quantityInCart -= 1
    setProducts(newProducts)
  }


  return (
    <>
      <h1 className='title'>Desserts</h1>

      <main className="main">
        <div className="products">
          {products.map((product, index) => {
            return (
              <div key={index} className="product-card">
                <div className="image-wrapper">
                  <img className={product.quantityInCart > 0 ? 'custom-border' : ''} src={product.image.tablet} srcSet={`${product.image.mobile} 240w, ${product.image.tablet} 300w, ${product.image.desktop} 720w`} alt={product.name} />
                  <div className="buttons">
                    {product.quantityInCart < 1 ?
                      <button className='add-to-cart-btn' onClick={() => increment(index)}>
                        <div className="add-to-cart-icon">
                          <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
                        </div>
                        <span>Add To Cart</span>
                      </button>
                      :
                      <div className='quantity-handlers'>
                        <button className="increment-btn" onClick={() => increment(index)}>
                        <img src="./assets/images/icon-increment-quantity.svg" alt="-" />
                        </button>
                        <p>{product.quantityInCart}</p>
                        <button className='decrement-btn' onClick={() => decrement(index)} >
                         <img src="./assets/images/icon-decrement-quantity.svg" alt="-" />
                        </button>
                      </div>}
                  </div>
                </div>
                <div className="product-details">
                  <p className="product-category">{product.category}</p>
                  <h2 className="product-name name">{product.name}</h2>
                  <p className='product-price'>{`$${product.price.toFixed(2)}`}</p>
                </div>
              </div>)
          })}
        </div>
        <Cart products={products} removeFromCart={removeFromCart} clearAll={clearAll}/>
      </main>
    </>
  )
}

export default App
