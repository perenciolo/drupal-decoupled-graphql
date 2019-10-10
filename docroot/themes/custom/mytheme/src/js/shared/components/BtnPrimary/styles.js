import styled from 'styled-components';

export const Button = styled.button`
  outline: 0;
  border: none;
  padding: 20px;
  color: ${props => props.color || 'white'};
  background: ${props => props.bg || 'magenta'};
`;
