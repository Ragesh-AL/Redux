import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from 'react-redux';

function CheckOut() {
    const [totalPrice, setTotalPrice] = useState(0);
    let data = useSelector((state) => state.shopSlice.data);

   useEffect(() =>{
    const total = data.reduce((acc, item) => acc + item.updatedPrice, 0);
    setTotalPrice(total);
   }, [data])
  return (
    <>
    <div className="checkoutCards mt-4">
        <h3 className="text-center">Order Summary</h3>

        <Row className="mb-2">
          <Col xs={6}>Total Items:</Col>
          <Col xs={6}><b>{data.length}</b></Col>
        </Row>

        <Row className="mb-2">
          <Col xs={6}>SUBTOTAL:</Col>
          <Col xs={6}><b>${totalPrice}</b></Col>
        </Row>

        <Row className="mb-2">
          <Col xs={6}>SHIPPING:</Col>
          <Col xs={6}>FREE</Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            Promo Code
          </Col>
          <Col xs={12}>
            <Form.Control type="text" className="mt-3" placeholder="Enter Promo Code" />
            <Button variant="warning" className="mt-3 text-center">Apply</Button>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={6}>Total:</Col>
          <Col xs={6}><b>${totalPrice}</b></Col>
        </Row>

      </div>   
    </>
  )
}

export default CheckOut
