import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  CarouselWrapper,
  CarouselNavigation,
  CarouselCtl,
} from './styles';

import CarouselItem from '_components/MultipleCarousel/CarouselItem';

const MultipleCarousel = ({ data, navType }) => {
  const [carouselItem, setCarouselItem] = useState(data[0]);
  const [appear, setAppear] = useState(true);

  function handleNavigate(id, prev = false) {
    if (!id) return false;

    let idx = 0;
    const filtered = data.filter(el => el.id === id);

    if (!filtered.length) return false;

    const maxIdx = data.length;
    let currentIdx = +data.indexOf(filtered[0]);

    if (prev) {
      if (currentIdx === 0) {
        idx = currentIdx - 1 - 1;
      } else {
        idx = currentIdx - 1;
      }
    } else {
      idx = currentIdx + 1;
    }
    idx = Math.abs(idx) % maxIdx;

    setCarouselItem(data[idx]);
  }

  function handleSlide(id) {
    const filtered = data.filter(el => +el.id === +id);

    if (!filtered.length) return;
    setCarouselItem(filtered[0]);
    setAppear(!appear);
  }

  return (
    carouselItem && (
      <Container>
        <CarouselWrapper>
          <TransitionGroup>
            <CSSTransition
              key={carouselItem.id}
              timeout={500}
              classNames="slide"
            >
              <CarouselItem
                id={carouselItem.id}
                key={String(carouselItem.id)}
                data={carouselItem}
                handleClick={handleNavigate}
                navType={navType}
              />
            </CSSTransition>
          </TransitionGroup>
        </CarouselWrapper>
        {+navType && (
          <CarouselNavigation>
            {data.map(item => (
              <button
                onClick={() => handleSlide(item.id)}
                className={
                  item.id === carouselItem.id
                    ? 'carousel__name carousel__name--active'
                    : 'carousel__name'
                }
                key={String(item.id)}
              >
                {item.field_dc_title_txt}
              </button>
            ))}
          </CarouselNavigation>
        )}
        {!+navType && (
          <CarouselCtl>
            <button onClick={() => handleNavigate(carouselItem.id, true)}>
              <MdChevronLeft color="#212121" size={24}></MdChevronLeft>
            </button>
            <button onClick={() => handleNavigate(carouselItem.id)}>
              <MdChevronRight color="#212121" size={24}></MdChevronRight>
            </button>
          </CarouselCtl>
        )}
      </Container>
    )
  );
};

export default MultipleCarousel;
