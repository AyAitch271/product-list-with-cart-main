import { useProductsState } from "../../hooks/useProductsState"

import { Products } from "../products/Products"
import { Cart } from "../cart/Cart"

import './Main.css'
 
export const Main = () => {
    const {products, removeFromCart, increment, decrement, clearAll } = useProductsState()
    return (
        <main className="main">
            <Products products={products} increment={increment} decrement={decrement} />
            <Cart products={products} removeFromCart={removeFromCart} />
        </main>
    )
}