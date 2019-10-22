import React from 'react';

import CardComponent from '_components/CardsRow/CardComponent';

import renderHTML from 'react-render-html';

const CardsRow = ({ data }) => {
  const {
    field_card_columns,
    field_card_description,
    field_card_item,
    field_card_title,
    field_cr_background_type,
  } = data;
  return (
    <div
      className={`cards-row ${+field_cr_background_type > 1 ? 'bg-alter' : ''}`}
    >
      {(field_card_title || field_card_description) && (
        <div className="cards-row-header">
          <h3>{data.field_card_title}</h3>
          <div className="cards-desc">
            {renderHTML(data.field_card_description)}
          </div>
        </div>
      )}

      {field_card_item && field_card_item.length && (
        <div className="cards-wrapper">
          {field_card_item.map((card, i) => (
            <CardComponent
              key={String(card.id)}
              title={card.field_card_title}
              desc={card.field_card_description}
              columns={field_card_columns}
              bgType={field_cr_background_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsRow;
