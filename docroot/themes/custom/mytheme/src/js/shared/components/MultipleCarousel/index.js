import React from 'react';
import renderHTML from 'react-render-html';

import { Container, SideLeft, SideRight, BtnWrapper } from './styles';

import BtnPrimary from '_components/BtnPrimary';

const MultipleCarousel = ({ data }) => {
  const {
    field_dc_title_txt,
    field_dc_body_copy,
    field_dc_image: { uid, uri, alt, width, height, title },
    field_dc_primary_cta,
    field_dc_secondary_cta,
  } = data;
  return (
    <Container>
      <SideLeft>
        <h2>{field_dc_title_txt}</h2>
        <div>{renderHTML(field_dc_body_copy)}</div>
        {((field_dc_primary_cta && field_dc_primary_cta.length) ||
          (field_dc_secondary_cta && field_dc_secondary_cta.length)) && (
          <BtnWrapper>
            {field_dc_primary_cta && field_dc_primary_cta.length && (
              <BtnPrimary
                onClick={() => console.log(field_dc_primary_cta[0].uri)}
              >
                {field_dc_primary_cta[0].title}
              </BtnPrimary>
            )}
            {field_dc_secondary_cta && field_dc_secondary_cta.length && (
              <BtnPrimary
                onClick={() => console.log(field_dc_secondary_cta[0].uri)}
              >
                {field_dc_secondary_cta[0].title}
              </BtnPrimary>
            )}
          </BtnWrapper>
        )}
      </SideLeft>
      <SideRight>
        <img src={uri} alt={alt} title={title} />
      </SideRight>
    </Container>
  );
};

export default MultipleCarousel;
