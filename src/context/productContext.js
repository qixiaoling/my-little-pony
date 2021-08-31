import React, {useState, createContext, useEffect} from "react";
import {storeProducts} from "../data";

export const ProductContext = createContext({});

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(storeProducts)
    }, [])

    function addToCart(id){
        console.log("hi from addToCart"+id)
    }
    function handleDetail(id) {
        console.log('set detail data ready'+ id)
    }


    return (
        <>
            <ProductContext.Provider
                value={{
                    products: products,
                    setProducts: setProducts,
                    addToCart: addToCart,
                   handleDetail: handleDetail,

                }}
            >
                {children}
            </ProductContext.Provider>
        </>

    )
}


