import React from 'react';
import renderHTML from 'react-render-html';

const CardComponent = ({ info, columns }) => {
  const entity = info.entity;
  const cardWidth = 100 / columns + '%';

  const styles = {
    width: cardWidth,
    float: 'left'
  };

  return (
    <div className="card-row-item" style={styles}>
      <h2>{entity.fieldCardTitle}</h2>
      {renderHTML(entity.fieldCardDescription.value)}
    </div>
  );
};

export default CardComponent;
