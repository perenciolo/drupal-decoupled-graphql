import styled from 'styled-components';

import { device } from '_shared/variables/devices';
import { colors } from '_shared/variables/colors';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    flex: 1 0 100%;
    flex-direction: ${props => (+props.imgSide.value ? 'row' : 'row-reverse')};
  }
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #545454;

  @media ${device.laptop} {
    width: 60%;
    padding: 50px 0;
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 24px;

    @media ${device.laptop} {
      font-size: 36px;
      padding-left: ${props => (+props.imgSide.value ? '0' : '50px')};
    }
  }
`;

export const Wrapper = styled.div`
  max-height: 500px;
  overflow: hidden;
`;

export const ScrollWrapper = styled.div`
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 25px;

  @media ${device.laptop} {
    margin-bottom: 50px;
    ${props => {
      let cssRule = '';

      if (+props.showScrollbar) {
        cssRule += `
        height: auto;
        max-height: 200px;
        overflow-y: auto;
        padding-right: 10px;

        &::-webkit-scrollbar-track {
          border-radius: 4px;
        }

        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar:horizontal {
          height: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: ${colors.red};
          border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: ${colors.red};
        }

        &::-webkit-scrollbar-thumb {
          height: 10px;
        }

        &::-webkit-scrollbar-track-piece {
          background-color: ${colors.offWhite};
          border-radius: 4px;
        }
        `;

        if (+props.imgRight.value) {
          cssRule += `
            margin-right: 50px;
        `;
        } else {
          cssRule += `
            margin-left: 50px;
        `;
        }
      } else {
        if (+props.imgRight.value) {
          cssRule += `
            padding-right: 50px;
            padding-left: 0;
        `;
        } else {
          cssRule += `
            padding-left: 50px;
            padding-right: 0;
        `;
        }
      }

      return cssRule;
    }}
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BtnWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  button {
    flex: 1 1 50%;
  }

  button + button {
    margin-top: 20px;

    @media ${device.laptop} {
      margin-top: 0;
      margin-left: 20px;
    }
  }

  @media ${device.laptop} {
    align-items: center;
    flex-direction: row;
    max-width: 100%;
    margin-right: ${props => (+props.imgRight.value ? '50px' : '0')};
    margin-left: ${props => (!+props.imgRight.value ? '50px' : '0')};
  }
`;
