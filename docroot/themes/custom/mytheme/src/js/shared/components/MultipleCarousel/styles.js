import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 60px;
`;
export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BtnWrapper = styled.div`
  flex: 1;
  margin-top: auto;

  button + button {
    margin-left: 20px;
  }
`;
