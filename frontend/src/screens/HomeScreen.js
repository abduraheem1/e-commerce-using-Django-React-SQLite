import React, {useState, useEffect} from 'react'
// import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
  const dispatch  = useDispatch()
  
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList
  // const [products, setProducts] = useState([])
  useEffect(
    ()=>{
      // async function fetchProducts(){
      //     const {data}= await axios.get('/api/products/')
      //     setProducts(data)
      // }
     // fetchProducts()

      dispatch(listProducts())

        
    },[]
  )

  return (
    <div>
        {loading ? <Loader/>
            : error ? <Message variant='danger'>{error}</Message>
              :
              <div>
                <h1>Latest Products</h1>
                <Row>                  
                    {products.map(value => (
                        <Col key={value._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={value}/>
                        </Col>
                    ))}
                </Row>
              </div>
        }

    </div>
  )
}

export default HomeScreen
