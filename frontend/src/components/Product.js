import React from "react";
import {Card} from "react-bootstrap"
import Rating from './Rating'
import { Link } from "react-router-dom";


function Product({product}){
    return(
        <div>
         <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image}/>
            </Link>

            <Card.Body>
                    <a href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                        <Card.Title as="div">
                        <strong>{product.name}</strong>
                        </Card.Title>
                    </a>
                <Card.Text as="div">
                    <div className="my-3">
                       {/* {product.rating} from {product.numReviews} reviews */}
                       <Rating value = {product.rating} total = {product.numReviews}/>

                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
                
            </Card.Body>

        </Card>
        </div>

    )
}

export default Product;