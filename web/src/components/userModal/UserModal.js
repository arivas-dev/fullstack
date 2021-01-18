import { getDateFormat } from 'utils/data';
import { Modal, message, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import './UserModal.scss';

const userFields = (adding = false) => ({
  date_of_birth: '',
  name: '',
  telephone: '',
  username: '',
  email: '',
  ...adding && {password: '',  password_confirmation: ''},
});

export const UserModal = ({ action, visible, setVisible, onSave, onUpdate, loading, user }) => {
  const [fields, setFields] = useState(userFields(action === 'New'));
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    if (
      action !== 'New' &&
      user.email !== fields.email &&
      user.id !== userId
    ) {
      setUserId(user.id);
      const { date_of_birth, name, telephone, username, email } = user;
      setFields({
        ...fields,
        date_of_birth: getDateFormat(date_of_birth),
        email,
        name,
        telephone,
        username
      });
    }
  }, [user, fields, action, userId]);

  useEffect(() => {
    if (visible && action === 'New') {
      setFields(userFields(true));
    }
  }, [visible, action]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFields((prevValue) => ({
      ...prevValue, 
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (action === 'New') {
      if (fields.password !== fields.password_confirmation) {
        return message.error('Password must be the same');
      }
      onSave(fields);
    } else {
      onUpdate(fields);
    }
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
                  name="password_confirmation"
                  value={fields.password_confirmation}
                />
              </Col>
            </Row>
          )
        }

        <div className="user-modal-submit">
            <input className="button is-dark" type="reset" value="Clean" />
            <input className={`button is-dark ${loading ? 'is-loading' : ''}`} type="submit" value="Save" />
        </div>
      </form>
    </Modal>
  );
};
