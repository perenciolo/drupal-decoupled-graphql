import styled from 'styled-components';

import { device } from '_shared/variables/devices';
import { colors } from '_shared/variables/colors';

export const Container = styled.div`
  padding: 25px;

  @media ${device.laptop} {
    padding: 50px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media ${device.laptop} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  /* slide enter */
  .slide-enter {
    transform: translate(100%);
  }

  .slide-enter.slide-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: translate(0%);
    transition: transform 500ms ease;
  }

  /* slide exit */
  .slide-exit {
    transform: translate(0);
    opacity: 0;
  }

  .slide-exit.slide-exit-active {
    opacity: 0.5;
    position: relative;
    top: 0;
    right: 0;
    z-index: 1;
    transform: translate(-100%);
    transition: transform 500ms ease;
  }

  .slide-exit-done {
    position: static;
  }
`;

export const CarouselNavigation = styled.div`
  padding-top: 50px;
  color: ${colors.grey};

  .carousel__name {
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-start;
    text-align: inherit;
    background: transparent;
    border: none;
    outline: 0;
    font-weight: bold;
    padding: 5px 5px 5px 20px;

    @media ${device.laptop} {
      align-items: center;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 4px;
      height: 100%;
      background: ${colors.offWhite};
      border-radius: 4px;
    }

    &--active {
      color: ${colors.red};
      &:before {
        background: ${colors.red};
      }
    }
  }
`;

export const CarouselCtl = styled.div`
  display: flex;
  flex-wrap: nowrap;

  > button {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.grey};
    border-radius: 0;
    background: transparent;

    & + button {
      margin-left: 1px;
    }
  }
`;
