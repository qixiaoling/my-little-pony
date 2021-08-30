import React, { Component } from "react";
import { ProductConsumer } from "../context/productContext";
export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return (
                                            <article key={product.id}>
                                                <h1>{product.title}</h1>
                                            </article>
                                        );

                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

