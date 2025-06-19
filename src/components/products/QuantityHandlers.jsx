export const QuantityHandlers = ({ increment, decrement, index, quantityInCart }) => {
    return (
        <div className='quantity-handlers'>
            <button className="increment-btn" onClick={() => increment(index)}>
                <img src="./assets/images/icon-increment-quantity.svg" alt="-" />
            </button>
            <p>{quantityInCart}</p>
            <button className='decrement-btn' onClick={() => decrement(index)} >
                <img src="./assets/images/icon-decrement-quantity.svg" alt="-" />
            </button>
        </div>
    )
}