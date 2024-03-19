import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductList from "./ProductList";
function Main() {
  return (
    <>
      <div className="mainContentArea">
        <Container>
          <Row>
            <ProductList />
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Main;
