import { forwardRef } from "react"

import { DeliveryTotal } from "../resusable/DeliveryTotal"
import { OrderItem } from "./OrderItem"
import "./OrderModal.css"
import { nanoid } from "nanoid"

export const OrderModal = forwardRef(({ cartItems,cartTotal }, modalRef) => {
    const clearAll = () => {
        return window.location.reload()
    }

    return (
        <dialog className="modal" ref={modalRef} datatype="modal">
            <div className="modal-inner">
                <img src="./assets/images/icon-order-confirmed.svg" alt="order confirmed" />
                <p className="modal-label">Order Confirmed</p>
                <p>We hope you enjoy your food!!</p>
                <div className="order-items">
                    {cartItems.map(({ name, quantityInCart, price, image}) => {
                        return (
                            <OrderItem key={nanoid()} name={name} quantityInCart={quantityInCart} price={price} image={image} uid={new Date().getTime()}/>
                        )
                    })}
                    <DeliveryTotal cartTotal={cartTotal} />
                </div>
                <button onClick={() => clearAll()} className="confirm-order-btn">Start New Order</button>
            </div>
        </dialog>
    )
})