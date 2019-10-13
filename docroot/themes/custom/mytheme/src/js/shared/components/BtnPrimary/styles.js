import styled from 'styled-components';

export const Button = styled.button`
  outline: 0;
  border: ${props =>
    props.outline ? `2px solid ${props.color || 'white'}` : 'none'};
  padding: 20px;
  color: ${props => props.color || 'white'};
  background: ${props => props.bg || 'magenta'};
  font-weight: bold;
`;
