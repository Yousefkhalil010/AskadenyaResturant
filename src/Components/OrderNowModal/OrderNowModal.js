import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import "./OrderFormModal.css";

const OrderFormModal = ({ show, handleClose }) => {
  const initialFormData = {
    name: '',
    location: '',
    phone: '',
    date: '',
    orderDetails: ''
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, location, phone, date, orderDetails } = formData;
    if (!name || !location || !phone || !date || !orderDetails) {
      alert('Please fill in all required fields.');
      return;
    }

    setOrderSubmitted(true);
  };

  const handleModalClose = () => {
    setFormData({ ...initialFormData }); 
    setOrderSubmitted(false); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Place Your Order:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!orderSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="orderDetails">
              <Form.Label>Order Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your order details"
                value={formData.orderDetails}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Modal.Footer style={{ borderTop: "none", paddingTop: "0", display: "flex", justifyContent: "space-between" }}>
              <Button style={{ color: "#fff", backgroundColor: "#6c757d", borderColor: "#6c757d" }} onClick={handleModalClose}>
                Close
              </Button>
              <Button style={{ backgroundColor: "#f04d1b", borderColor: "#f04d1b" }} type="submit">
                Submit Order
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <div className="success-message">
            <span style={{fontWeight:"bold"}}>Your order has been submitted successfully! </span>
            <CheckCircleFill style={{ color: "#28a745", marginRight: "8px" ,fontSize:"20px" }} size={24} />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default OrderFormModal;

