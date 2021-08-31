import React, {useState, createContext, useEffect} from "react";
import {storeProducts, detailProduct} from "../data";

export const ProductContext = createContext({});

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [detailProduct, setDetailProduct] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        refreshProducts()
    }, [])

    function refreshProducts (){
        const tempItems = [...storeProducts];
        setProducts(tempItems)
        // let tempProducts = [];
        // storeProducts.forEach((item)=>{
        //     const tempItem = {...item};
        //     tempProducts = [tempProducts, tempItem];
        // })
        // setProducts(tempProducts)

    }

    function getItem(id) {
        const item = products.find((item)=>item.id === id);
        return item;
    }

    function addToCart(id){
        const tempProducts = [...products];
       const index = tempProducts.indexOf(getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       product.total = product.price;

       setProducts(tempProducts);
       setCart([...cart,product]);
       setDetailProduct(product)

    }
    function handleDetail(id) {
        console.log('detailed'+id)
    }
    function openModal(id){
        const tempItem = getItem(id);
        setModalProduct(tempItem);
        setModalOpen(true);
    }
    function closeModal(){
        setModalOpen(false);
        setModalProduct([]);
    }


    return (
        <>
            <ProductContext.Provider
                value={{
                    products: products,
                    setProducts: setProducts,
                    addToCart: addToCart,
                   handleDetail: handleDetail,
                    openModal: openModal,
                    closeModal: closeModal,

                }}
            >
                {children}
            </ProductContext.Provider>
        </>

    )
}


