import { getDateFormat } from 'utils/data';
import { Modal, Col, Row } from 'antd';
import React, { useState } from 'react';
import './UserModal.scss';

export const UserModal = ({ action, visible, setVisible, user }) => {
  const [fields, setFields] = useState({});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFields({...fields, [name]: value});
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <Modal
      className="user-modal"
      title={`${action} user`}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      sh
      width={1000}
      footer={null}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <Col sm={24} lg={{ span: 23, offset: 1 }} className="user-modal-item">
            <label>Birthdate</label>
            <input 
              required 
              className="input" 
              type="date" 
              placeholder="Input your birthdate" 
              onChange={handleChange}
              name="date_of_birth"
              value={fields.date_of_birth}
              defaultValue={getDateFormat(user.date_of_birth)}
            />
          </Col>
        </Row>

        <Row>
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
              defaultValue={user.name}
            />
          </Col>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Phone number</label>
            <input 
              className="input" 
              required
              type="text"
              placeholder="Input your phone number" 
              pattern="[2|6|7]{1}[0-9]{7}"
              onChange={handleChange}
              maxLength="8"
              minLength="8"
              name="telephone"
              value={fields.telephone}
              defaultValue={user.telephone}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Username</label>
            <input 
              required 
              className="input" 
              type="text" 
              placeholder="Input your username" 
              onChange={handleChange}
              maxLength="10"
              name="username"
              value={fields.username}
              defaultValue={user.username}
            />
          </Col>
          <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
            <label>Email</label>
            <input 
              required 
              className="input" 
              type="email" 
              placeholder="Input your email" 
              onChange={handleChange}
              name="email"
              value={fields.email}
              defaultValue={user.email}
            />
          </Col>
        </Row>

        {
          action === 'New' && (
            <Row>
              <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
                <label>Password</label>
                <input 
                  required 
                  className="input" 
                  type="password" 
                  placeholder="Input your password" 
                  onChange={handleChange}
                  maxLength="10"
                  name="password"
                  value={fields.password}
                />
              </Col>
              <Col sm={24} lg={{ span: 11, offset: 1 }} className="user-modal-item">
                <label>Confirm password</label>
                <input 
                  required 
                  className="input" 
                  type="password" 
                  placeholder="Confirm your password" 
                  onChange={handleChange}
                  maxLength="10"
                  name="confirm_password"
                  value={fields.confirm_password}
                />
              </Col>
            </Row>
          )
        }

        <div className="user-modal-submit">
            <input className="button is-dark" type="reset" value="Clean" />
            <input className="button is-dark" type="submit" value="Save" />
        </div>
      </form>
    </Modal>
  );
};
