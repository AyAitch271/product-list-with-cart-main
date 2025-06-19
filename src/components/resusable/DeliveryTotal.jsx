export const DeliveryTotal = ({cartTotal}) => {
    return (
        <>
            <div className="delivery-total">
                <span className="total-label">Order Total</span>
                <span className="total-value">{`$${cartTotal}`}</span>
            </div>
        </>
    )
}