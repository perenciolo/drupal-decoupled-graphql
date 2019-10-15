import styled, { createGlobalStyle } from 'styled-components';

import { device } from '_shared/variables/devices';
import { colors } from '_shared/variables/colors';
import { animations } from '_shared/variables/animations';

export const GlobalStyle = createGlobalStyle`
  .is-front {
    > header {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .region-header {
    padding: 0;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .full-page-background__wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  ${props => {
    if (props.img && Object.keys(props.img).length) {
      const { url } = props.img;
      return `
      background: url(${url}) center center no-repeat;
      background-size: cover;
      `;
    }

    return '';
  }}
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
  color: ${colors.offBlack};

  @media ${device.laptop} {
    font-size: 7.2rem;
  }
`;

export const Desc = styled.div`
  color: ${colors.offBlack};
  font-size: 1.8rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`;

export const Icon = styled.button`
  border: 0;
  background: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);

  > svg {
    display: block;
    position: relative;
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: ease-in-out;
  }

  /* Animations */
  ${animations.bounce}
`;
