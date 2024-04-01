import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { PRODUCTS_URL } from "../constant/constant";
function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${PRODUCTS_URL}?id=${id}`);
        const responseData = response.data;
        const product = responseData.products.find(
          (item) => item.id.toString() === id
        );
        if (product) {
          setData(product);
          setLoading(false);
        } else {
          setError("Product not found");
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h4>{`Error: ${error}`}</h4>
      </div>
    );
  }

  return (
    <Container className="mt-5 productContainer">
      <Row>
        <Col sm={6}>
          <div>
            <img
              src={data.thumbnail}
              alt={data.title}
              className="productImage"
            />
          </div>
        </Col>
        <Col sm={6}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Discount Percentage: {data.discountPercentage}%</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
