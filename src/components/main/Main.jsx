import { useProductsState } from "../../hooks/useProductsState"

import { Products } from "../products/Products"
import { Cart } from "../cart/Cart"

import './Main.css'
 
export const Main = () => {
    const {products, removeFromCart, increment, decrement } = useProductsState()
    return (
        <main className="main">
            <h1 className='title'>Desserts</h1>
            <Products products={products} increment={increment} decrement={decrement} />
            <Cart products={products} removeFromCart={removeFromCart} />
        </main>
    )
}