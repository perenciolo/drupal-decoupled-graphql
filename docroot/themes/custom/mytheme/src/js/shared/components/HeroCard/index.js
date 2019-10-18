import React from 'react';
import renderHTML from 'react-render-html';

// import { Container } from './styles';

export default function HeroCard({ data }) {
  const {
    id,
    field_pdc_gic_title,
    field_pdc_gci_description,
    field_hc_show_scrollbar,
    field_pdc_gic_image: { alt, height, width, title, url },
    primary_cta,
    secondary_cta,
  } = data;
  return (
    <div className="container">
      <div className="side-left">
        <h2>{field_pdc_gic_title}</h2>
        <div className={+field_hc_show_scrollbar === 1 ? 'show-scrollbar' : ''}>
          {renderHTML(field_pdc_gci_description)}
        </div>
      </div>
      <div className="side-right">
        <div className="img-wrapper">
          <img src={url} alt={alt} width={width} height={height} />
        </div>
      </div>
    </div>
  );
}
