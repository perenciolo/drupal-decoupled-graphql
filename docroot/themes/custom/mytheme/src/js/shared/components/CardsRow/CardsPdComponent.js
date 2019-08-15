import React from 'react';

import CardComponent from '_components/CardsRow/CardComponent';

import renderHTML from 'react-render-html';

const CardsPdComponent = ({ data }) => (
  <div className="cards-row">
    <div className="cards-row-header">
      <h1>{data.field_card_title}</h1>
      <div>{renderHTML(data.field_card_description)}</div>
    </div>

    {data.field_card_item.map((card, i) => (
      <CardComponent
        key={i}
        title={card.field_card_title}
        desc={card.field_card_description}
        columns={data.field_cr_num_colums}
      />
    ))}
  </div>
);

export default CardsPdComponent;
