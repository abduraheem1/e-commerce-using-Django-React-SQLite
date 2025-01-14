import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap';
// import products from '../products';
//import axios from 'axios';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductsDetails } from '../actions/productActions'; 

function ProductScreen({ match}) {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector (state=>state.productDetails)
    const {loading, error, product} = productDetails 


    // const [product, setProduct] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(
      ()=>{
        // async function fetchProduct(){
        //     const {data}= await axios.get(`/api/product/${id}`)        
        //     setProduct(data)
        // }
        // fetchProduct()     
       dispatch(listProductsDetails(id)) //id pass here
        
      },[dispatch, id]
    )
    const addToCartHander = () =>{

        navigate(`/cart/${id}?qty=${qty}`);
    }

    // const product = products.find((p) => p._id === id);

    return (
        <div>
            <Link to = '/' className='btn btn-light my-3'>Go Back</Link>
        {
            loading ? <Loader/>
            : error
            ? <Message variant='danger'>{error} </Message>
            :
            (
                <Row>
                <Col md={6}>
                  <Image src={product.image} alt = {product.name} fluid />
                </Col>
             <Col md={3}>
                 <ListGroup>
                 <ListGroup.Item variant="flush">
                     <h3>{product.name}</h3>
                 </ListGroup.Item>
                 <ListGroup.Item>
                     <Rating value = {product.rating} total = {product.numReviews}/>
                 </ListGroup.Item>
                 <ListGroup.Item>
                     Price: ${product.price}
                 </ListGroup.Item>
                 <ListGroup.Item>
                     Description: {product.description}
                 </ListGroup.Item>
                 </ListGroup>
             </Col>

                 <Col md={3}>
                     <Card>
                         <ListGroup variant='flush'>
                             <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                             </ListGroup.Item>

                             <ListGroup.Item>
                             <Row>
                                 <Col>Status:</Col>
                                 <Col>
                                 {product.countInStock > 0 ? 'In stock' : "Out of stock"}
                                 </Col>
                             </Row> 
                             </ListGroup.Item>

                                {
                                    product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col xs="auto" className='my-1'>
                                                    <Form.Select
                                                        as="select"
                                                        value = {qty}
                                                        onChange={(e)=>setQty(e.target.value)}
                                                    > 

                                                        {
                                                            [...Array(product.countInStock).keys()].map((x)=>(
                                                                <option
                                                                    key={x+1}
                                                                    value={x+1}
                                                                >{x+1}</option>
                                                            ))

                                                        }
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                }

                             <ListGroup.Item>
                                 <Button onClick={addToCartHander} className='btn-block' type = 'button' disabled={product.countInStock == 0}>Add to Cart</Button>
                             </ListGroup.Item>           

                         </ListGroup>
                     </Card>
                 </Col>



         </Row>
            )
        }

          
           
        </div>
    );
}

export default ProductScreen;
