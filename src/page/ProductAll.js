import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  
  const getProducts = useCallback(async () => {
    let searchQuery = query.get('q') || "";
    console.log('searchQuery',searchQuery);
    let url = `https://my-json-server.typicode.com/Jeongseoyoon/yoon-hnm/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    console.log('fdfd',data);
    setProducts(data);
  },[query]);

  useEffect(()=>{
      getProducts()
    },[getProducts, query]);
  return (
    <div>
      <Container>
      <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;
