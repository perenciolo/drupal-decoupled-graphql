import React from 'react';
import renderHTML from 'react-render-html';

const CardComponent = ({ title, desc, columns }) => {
  // const entity = info.entity;
  const classes = [`is-${columns}`];

  return (
    <div className="card-row-item" className={classes}>
      <h6 className="card-item-title">{title}</h6>
      <div className="card-item-desc">{renderHTML(desc)}</div>
    </div>
  );
};

export default CardComponent;
