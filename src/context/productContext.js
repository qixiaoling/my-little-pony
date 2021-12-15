import React, {useState, createContext, useEffect} from "react";
import {storeProducts, detailProduct} from "../data";

export const ProductContext = createContext({});

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [detailProduct, setDetailProduct] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [cartSubTotal, setCartSubTotal] = useState(7);
    const [cartTax, setCartTax] = useState(7);
    const [cartTotal, setCartTotal] = useState(7);

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

    function clearCart() {
        setCart([]);
        refreshProducts();
    }


    function getItem(id) {
        return products.find((item) => item.id === id);

    }

    function addToCart(id) {/*look for index!!!*/
        const tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;

        setProducts(tempProducts);
        cart.push(product);
        console.log(cart.length)
        addingTotal()


    }
    function addingTotal() {
        let temp = 0;
        for(let i=0;i<cart.length;i++){
            temp += cart[i].total;
        }
        setCartSubTotal(temp);
    }

    function handleDetails(id) {
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

    function increment(id) {/*look for index!!!*/
        const tempCart = [...cart];
        const tempProduct = tempCart.find((item) => item.id === id);
        const index = tempCart.indexOf(tempProduct)
        const selectedProduct = tempCart[index];
        selectedProduct.count = selectedProduct.count + 1;
        selectedProduct.total = selectedProduct.count * selectedProduct.price;
        setCart([...tempCart])
        addingTotal();

    }

    function decrement(id) {/*look for index!!!*/
        const tempCart = [...cart];
        const tempProduct = tempCart.find((item) => item.id === id);
        const index = tempCart.indexOf(tempProduct);
        const selectedProduct = tempCart[index];
        selectedProduct.count = selectedProduct.count - 1;
        if (selectedProduct.count === 0) {
            removeItem(id)
        } else {
            selectedProduct.total = selectedProduct.price * selectedProduct.count;
            setCart(tempCart);


        }
    }


    function removeItem(id) {/*look for index!!!*/
        let tempProduct = [...products];
        let tempCart = [...cart];

        const index = tempProduct.indexOf(getItem(id));
        let removedItem = tempProduct[index];

        removedItem.inCart = false;
        removedItem.count = 0;
        removedItem.total = 0;

        setProducts(tempProduct);

        tempCart = tempCart.filter(item => item.id !== id)
        setCart(tempCart);


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
                    cartSubTotal: cartSubTotal,
                    cartTax: cartTax,
                    cartTotal: cartTotal,
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
                    decrement: decrement,
                    removeItem: removeItem,
                    clearCart: clearCart,


                }}
            >
                {children}
            </ProductContext.Provider>
        </>

    )
}


