import React, {useState, createContext, useEffect} from "react";
import {storeProducts} from "../data";

export const ProductContext = createContext({});

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(storeProducts)
    }, [])



    return (
        <>
            <ProductContext.Provider
                value={{
                    products: products,
                    setProducts: setProducts,
                }}
            >
                {children}
            </ProductContext.Provider>
        </>

    )
}


