import { useState, useEffect, useRef } from "react"

import './Cart.css'
import { Modal } from "../modal/Modal"

export const Cart = ({ products, removeFromCart, clearAll }) => {
    const [cartItems, setCartItems] = useState([])

    const modalRef = useRef()

    useEffect(() => {
        setCartItems(products.filter(item => item.quantityInCart > 0))
    }, [products])

    const showModal = () => {
        modalRef.current.showModal()


    }

    


    const cartItemsAmount = cartItems.length ? cartItems.map(item => item.quantityInCart).reduce((prev, curr) => prev + curr) : 0
    return (
        <>
            <div className="cart">
                <h3 className="cart-label">{`Your Cart (${cartItemsAmount})`}</h3>
                    {cartItems.length === 0 && 
                    <div className="empty-cart">
                    <img src="./assets/images/illustration-empty-cart.svg" alt="" />
                    <p>Your added items will appear here</p>
                    </div>}
                    {cartItems.length > 0 && 
                    <>
                    <div className="cart-items">
                        {cartItems.map(({ name, price, quantityInCart, id }) => {
                            return (
                                <>
                                    <div className="cart-item">
                                        <div className="cart-item-details">
                                            <h4 className="name">{name}</h4>
                                            <p className="quantity">{`${quantityInCart}x`}</p>
                                            <p className="price">{`@ $${price.toFixed(2)}`}</p>
                                            <p className="price-quantity">{`$${(price * quantityInCart).toFixed(2)}`}</p>
                                        </div>
                                        <button className="delete-btn" onClick={() => removeFromCart(id)}>
                                            <img src="./assets/images/icon-remove-item.svg" alt="delete" />
                                        </button>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                    <div className="delivery-details">
                        <div className="delivery-total">
                            <span className="total-label">Order Total</span>
                            <span className="total-value">{`$${(cartItems?.map((item) => item.price * item.quantityInCart).reduce((prev, curr) => prev + curr, 0)).toFixed(2)}`}</span>
                        </div>
                        <p className="delivery-carbon-details">
                            <img src="./assets/images/icon-carbon-neutral.svg" alt="" srcset="" />
                            This is <span>carbon neutral</span> delivery</p>
                        <button className="confirm-order-btn" onClick={() => showModal()}>Confirm Order</button>
                    </div>
                    
                    </>}
            </div>
            <Modal cartItems={cartItems} clearAll={clearAll} ref={modalRef} />
        </>
    )
}