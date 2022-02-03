import StyledButton from "./Styles/Button.styles";

function Button(props)
{
  return(
    <StyledButton onClick={props.handleClick}>
      Sign In
    </StyledButton>

  );
};

export default Button;