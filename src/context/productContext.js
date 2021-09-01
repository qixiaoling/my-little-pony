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

    function refreshProducts() {
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
        return products.find((item) => item.id === id);

    }

    function addToCart(id) {
        const tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;

        setProducts(tempProducts);
        setCart([...cart, product]);
    }
    function handleDetails(id){
        const tempProduct = getItem(id);
        setDetailProduct(tempProduct);
        console.log(detailProduct);
    }

    function openModal(id) {
        const tempItem = getItem(id);
        setModalProduct(tempItem);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function increment(id){
     const tempCart = [...cart];
     const tempProduct = tempCart.find((item)=> item.id === id);
     const index = tempCart.indexOf(tempProduct)
     const selectedProduct = tempCart[index];
     selectedProduct.count = selectedProduct.count+1;
     selectedProduct.total = selectedProduct.count * selectedProduct.price;
     setCart([...tempCart])
    }

    function decrement(id){
        const tempCart = [...cart];
        const tempProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(tempProduct);
        const selectedProduct = tempCart[index];
        if(selectedProduct.count>1){
            selectedProduct.count = selectedProduct.count-1;
        }else{
            removeItem(id)
        }

    }


    return (
        <>
            <ProductContext.Provider
                value={{
                    products: products,
                    setProducts: setProducts,
                    cart: cart,
                    setCart: setCart,
                    detailProduct: detailProduct,
                    setDetailProduct: setDetailProduct,
                    addToCart: addToCart,
                    modalOpen: modalOpen,
                    setModalOpen: setModalOpen,
                    modalProduct: modalProduct,
                    setModalProduct: setModalProduct,
                    handleDetail: handleDetails,
                    openModal: openModal,
                    closeModal: closeModal,
                    increment: increment,


                }}
            >
                {children}
            </ProductContext.Provider>
        </>

    )
}


