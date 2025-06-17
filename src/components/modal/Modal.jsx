import { forwardRef } from "react"

import "./Modal.css"

export const Modal = forwardRef(({ cartItems }, modalRef) => {
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
                    {cartItems.map(({ name, quantityInCart, price, image }) => {
                        return (
                            <div className="order-item">
                                <img className="order-image" src={image.thumbnail} alt="" />
                                <div className="basic-info-wrapper">
                                    <p className="name">{name}</p>
                                        <span className="quantity">{`${quantityInCart}x`}</span>
                                        <span className="price">{`@ $${(price).toFixed(2)}`}</span>
                                </div>
                                <div className="price-wrapper">
                                    <span className="price-quantity">{`$${(price * quantityInCart).toFixed(2)}`}</span>
                                </div>
                            </div>

                        )
                    })}
                    <div className="delivery-total">
                        <span className="total-label">Order Total</span>
                        <span className="total-value">{`$${cartItems?.map((item) => item.price * item.quantityInCart).reduce((prev, curr) => prev + curr, 0).toFixed(2)}`}</span>
                    </div>
                </div>
                    <button onClick={() => clearAll()} className="confirm-order-btn">Start New Order</button>

            </div>
        </dialog>
    )
})