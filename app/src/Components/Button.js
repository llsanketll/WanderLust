import { useState } from 'react';
import ButtonContainer from '../Styles/Button.styles';

function Button(props) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}

export default Button;
