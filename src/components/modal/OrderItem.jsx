export const OrderItem = ({name, quantityInCart, price,image}) => {
    return <>
        <div className="order-item" >
            <img className="order-image" src={image.thumbnail} alt={`Image of ${name}`} />
            <div className="basic-info-wrapper">
                <p className="name">{name}</p>
                <span className="quantity">{`${quantityInCart}x`}</span>
                <span className="price">{`@ $${(price).toFixed(2)}`}</span>
            </div>
            <div className="price-wrapper">
                <span className="price-quantity">{`$${(price * quantityInCart).toFixed(2)}`}</span>
            </div>
        </div>
    </>
}