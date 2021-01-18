import { getDateFormat } from 'utils/data';
import { Modal, Col, Row } from 'antd';
import React, { useState } from 'react';
// import './UserModal.scss';

export const ProductModal = ({ action, visible, setVisible, product,onSave }) => {
  const [fields, setFields] = useState({});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFields({...fields, [name]: value});
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (action === 'New') {
      onSave(fields);
    } else {

    }
    setFields({});
    setVisible(false);
  };

  return (
    <Modal
      className="user-modal"
      title={`${action} Product`}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      sh
      width={1000}
      footer={null}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>SKU</label>
            <input 
              required 
              className="input" 
              type="text" 
              placeholder="Input SKU" 
              onChange={handleChange}
              name="SKU"
              value={fields.sku}
            />
          </Col>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Name</label>
            <input 
              required 
              className="input" 
              type="text" 
              placeholder="Input your name" 
              onChange={handleChange}
              maxLength="30"
              name="name"
              value={fields.name}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Quantity</label>
            <input 
              className="input" 
              required
              type="number"
              placeholder="Input quantity" 
              onChange={handleChange}
              name="quantity"
              value={fields.quantity}
            />
          </Col>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Price</label>
            <input 
              required 
              className="input" 
              type="money" 
              placeholder="Input Price" 
              onChange={handleChange}
              name="price"
              value={fields.price}
            />
          </Col>
        </Row>

        <Row>

          <Col sm={48} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Description</label>
            <textarea 
              required 
              className="input" 
              placeholder="Input description" 
              onChange={handleChange}
              name="description"
              value={fields.description}
              rows={3}
            />
          </Col>
        </Row>


        <div className="user-modal-submit">
            <input className="button is-dark" type="reset" value="Clean" />
            <input className="button is-dark" type="submit" value="Save" />
        </div>
      </form>
    </Modal>
  );
};
