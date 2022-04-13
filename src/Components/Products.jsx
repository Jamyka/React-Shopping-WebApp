import React, { useEffect, useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { productsList } from "../Assets/productList";

function Products() {
  let [filter, setFilter] = useState("all");
  let [filteredProductsList, setFilteredProductsList] = useState(productsList);

  let handelChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filter === "all") {
      return setFilteredProductsList(productsList);
    } else {
      setFilteredProductsList(
        productsList.filter(function (el) {
          return el.category === filter;
        })
      );
    }
  }, [filter]);

  return (
    <Container className="mt-5">
      <h2 className="p-3">Products List</h2>

      <Form.Control
        as="select"
        className="my-4"
        value={filter}
        onChange={handelChange}
      >
        <option value="all">All</option>
        <option value="mobile">Mobiles</option>
        <option value="labtop">Labtops</option>
        <option value="tv">TVs</option>
      </Form.Control>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Prduct Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Quantity Required</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductsList &&
            filteredProductsList.map((product, index) => {
              return (
                <ProductItem key={index} index={index} product={product} />
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Products;
