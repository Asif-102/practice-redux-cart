import React from 'react';

const Product = (props) => {

    const {addToCart} = props;
    const {name, id}= props.product;

    return (
        <div style={{border:'1px solid tomato'}}>
            <h5>{name}</h5>
            <button onClick={()=>addToCart(id, name)}>add to cart</button>
        </div>
    );
};

export default Product;