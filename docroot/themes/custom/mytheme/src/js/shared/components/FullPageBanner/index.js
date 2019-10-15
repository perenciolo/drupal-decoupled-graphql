import React, { createRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

import { Container, Wrapper, Title, Desc, Icon } from './styles';
import { colors } from '_shared/variables/colors';

export default function FullPageBanner({ data }) {
  const {
    field_pdc_gci_description,
    field_pdc_gic_image, // { url, alt, width, height }
    field_pdc_gic_title,
    id,
  } = data;

  const [scrolled, setScrolled] = useState(false);

  const ref = createRef();

  function handleClick() {
    if (ref && Object.keys(ref.current).length) {
      if (!scrolled) {
        scroll.scrollTo(ref.current.clientHeight + 50);
        return setScrolled(true);
      }

      scroll.scrollToTop();
      return setScrolled(false);
    }
  }

  return (
    <div key={id} ref={ref} style={{ width: '100%', height: '100%' }}>
      <Container img={field_pdc_gic_image}>
        <Wrapper>
          <Title>{field_pdc_gic_title}</Title>
          <Desc>{field_pdc_gci_description}</Desc>
          <Icon onClick={handleClick}>
            <MdKeyboardArrowDown
              size={36}
              color={colors.offWhite}
            ></MdKeyboardArrowDown>
          </Icon>
        </Wrapper>
      </Container>
    </div>
  );
}
