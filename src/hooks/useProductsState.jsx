import { useState } from "react";

import { nanoid } from "nanoid";

import productsData from '../../data/data.json'

export const useProductsState = () => {

    const [products, setProducts] = useState(productsData?.map((product) => {
        return { ...product, quantityInCart: 0, id: nanoid() }
      }));
    
    
      const removeFromCart = (id) => {
        const newProducts = [...products]
        newProducts.map((p => p.quantityInCart = p.id === id ? 0 : p.quantityInCart))
        setProducts(newProducts)
      }
    
    
      const increment = (index) => {
        const newProducts = [...products]
        newProducts[index].quantityInCart += 1
        setProducts(newProducts)
      }
    
    
      const decrement = (index) => {
        const newProducts = [...products]
        newProducts[index].quantityInCart -= 1
        setProducts(newProducts)
      }
    return {products, removeFromCart, increment, decrement}
}
