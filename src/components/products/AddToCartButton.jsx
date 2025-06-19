export const AddToCartButton = ({ increment, index }) => {
    return (
        <button className='add-to-cart-btn' onClick={() => increment(index)}>
            <div className="add-to-cart-icon">
                <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
            </div>
            <span>Add to Cart</span>
        </button>
    )
}