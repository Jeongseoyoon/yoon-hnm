import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

  const ProductDetail = () => {
  let {id} = useParams();
  const [product , setProduct] = useState(null);
  const getProductDetail = async () => {
    console.log('dsds');
    let url = `https://my-json-server.typicode.com/<Jeongseoyoon>/<yoon-hnm>/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data)
  }
  useEffect(()=> {
    getProductDetail()
  },[getProductDetail]);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt='Product'/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
