import { useState, useEffect, useRef } from "react"

import './Cart.css'
import { OrderModal } from "../modal/OrderModal"
import { CartItem } from "./CartItem"
import { DeliveryTotal } from "../resusable/DeliveryTotal"
import { nanoid } from "nanoid"

export const Cart = ({ products, removeFromCart }) => {
    const [cartItems, setCartItems] = useState([])

    const modalRef = useRef()

    useEffect(() => {
        setCartItems(products.filter(item => item.quantityInCart > 0))
    }, [products])

    const showModal = () => {
        modalRef?.current.showModal()
    }

    const cartItemsAmount = cartItems?.reduce((total, item) => total + item.quantityInCart, 0);
    const cartTotal = cartItems?.reduce((total, item) => total + item.price * item.quantityInCart, 0).toFixed(2);
    return (
        <>
            <div className="cart">
                <h3 className="cart-label">{`Your Cart (${cartItemsAmount})`}</h3>
                {cartItems.length === 0 &&
                    <div className="empty-cart">
                        <img src="./assets/images/illustration-empty-cart.svg" alt="image of cake" />
                        <p>Your added items will appear here</p>
                    </div>}
                {cartItems.length > 0 &&
                    <>
                        <div className="cart-items">
                            {cartItems.map(({ name, price, quantityInCart,id }) => {
                                return (
                                    <CartItem key={nanoid()} removeFromCart={removeFromCart} name={name} price={price} quantityInCart={quantityInCart} id={id} />
                                )
                            })}
                        </div>
                        <div className="delivery-details">
                            <DeliveryTotal cartTotal={cartTotal} />
                            <p className="delivery-carbon-details">
                                <img src="./assets/images/icon-carbon-neutral.svg"/>
                                This is <span>carbon neutral</span> delivery</p>
                            <button className="confirm-order-btn" onClick={() => showModal()}>Confirm Order</button>
                        </div>

                    </>}
            </div>
            <OrderModal cartTotal={cartTotal} cartItems={cartItems} ref={modalRef} />
        </>
    )
}