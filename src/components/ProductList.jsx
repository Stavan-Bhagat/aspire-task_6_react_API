import React, { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/mainContent.css";
import { PRODUCTS_URL } from "../constant/constant";

const ProductList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(PRODUCTS_URL);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

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
        <h4>{`error : ${error}`}</h4>
      </div>
    );
  }

  return (
    <>
      {data &&
        data.products.map((item, index) => (
          <Col sm={4} className="my-3" key={index}>
            <Card className="custom-card">
              <Card.Img
                className="cardImage"
                variant="top"
                src={item.images[0]}
              />
              <Card.Body className="bg-secondary">
                <Card.Title className="title text-warning">
                  {item.title}
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className=" mt-auto">
                  <Button
                    variant="primary"
                    className="viewButton"
                    onClick={() => viewProduct(item.id)}
                  >
                    View
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default ProductList;
