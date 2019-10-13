import React from 'react';

import { Button } from './styles';

export default function BtnPrimary({ bg, color, outline, children }) {
  return (
    <Button color={color} bg={bg} outline={outline}>
      {children}
    </Button>
  );
}
