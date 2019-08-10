import React from 'react';
import renderHTML from 'react-render-html';

import './CardComponent.scss';

const CardComponent = ({ info, columns }) => {
  const entity = info.entity;
  const classes = [`is-${columns}`];

  return (
    <div className="card-row-item" className={classes}>
      <h2>{entity.fieldCardTitle}</h2>
      {renderHTML(entity.fieldCardDescription.value)}
    </div>
  );
};

export default CardComponent;
