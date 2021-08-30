import React, { Component } from "react";
import { storeProducts } from "../data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
    };
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState(() => {
            return {products};
        })

    }
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,

                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

