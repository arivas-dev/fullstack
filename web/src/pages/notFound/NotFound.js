import React from 'react';
import NotFoundImg from 'assets/img/notFound.svg';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
        <img src={NotFoundImg} alt="Not found" />
        <h3>Resource not found.</h3>
    </div>
  );
};

export default NotFound;
