export const CartItem = ({name, price, quantityInCart, removeFromCart, id}) => {
    return (
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
    )
}