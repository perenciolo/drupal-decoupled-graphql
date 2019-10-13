import React from 'react';
import renderHTML from 'react-render-html';

import {
  Container,
  SideLeft,
  SideRight,
  BtnWrapper,
  ScrollWrapper,
} from './styles';

import BtnPrimary from '_components/BtnPrimary';

const CarouselItem = ({ data, handleClick, navType }) => {
  const {
    id,
    field_dc_title_txt,
    field_dc_body_copy,
    field_dc_show_scrollbar,
    field_dc_image: { uri, alt, width, height, title },
    field_dc_image_side,
    field_dc_primary_cta,
    field_dc_secondary_cta,
  } = data;

  return (
    <Container imgSide={field_dc_image_side}>
      <SideLeft imgSide={field_dc_image_side}>
        <h2>{field_dc_title_txt}</h2>
        <ScrollWrapper
          showScrollbar={field_dc_show_scrollbar}
          imgRight={field_dc_image_side}
        >
          {renderHTML(field_dc_body_copy)}
        </ScrollWrapper>
        {((field_dc_primary_cta && field_dc_primary_cta.length) ||
          (field_dc_secondary_cta && field_dc_secondary_cta.length)) && (
          <BtnWrapper imgRight={field_dc_image_side}>
            {field_dc_primary_cta && field_dc_primary_cta.length && (
              <BtnPrimary
                bg="#ca001b"
                onClick={() => console.log(field_dc_primary_cta[0].uri)}
              >
                {field_dc_primary_cta[0].title}
              </BtnPrimary>
            )}
            {field_dc_secondary_cta && field_dc_secondary_cta.length && (
              <BtnPrimary
                bg="transparent"
                color="#ca001b"
                outline
                onClick={() => console.log(field_dc_secondary_cta[0].uri)}
              >
                {field_dc_secondary_cta[0].title}
              </BtnPrimary>
            )}
          </BtnWrapper>
        )}
      </SideLeft>
      <SideRight>
        {uri && (
          <div>
            <img src={uri} alt={alt} title={title} />
          </div>
        )}
      </SideRight>
    </Container>
  );
};

export default CarouselItem;
