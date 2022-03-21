import styled from 'styled-components';

export const PostExpContainer = styled.div`
  display: grid;
  place-items: center;
  
  & h1{
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  & .form_container{
    display: block;
    width: 34rem;
    padding-top: 2.063rem;
    padding-bottom: 2rem;
    border-radius: 2px;
    box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.07);}
  
  & .form_content{
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  & #landmark{
    height: 2rem;
  }
  & #title{
    height: 2rem;
    width: 100%;
  }
  & #description{
    max-width: 100%;
    min-width: 100%;
    position: relative;
  }

  & button {
    justify-content: center;
    width: 100%;
    border: 0;
    border-radius: 4px;
    outline: none;
    min-height: 48px;
  }
  & button,
  [name='post'] {
    background-color: #0071c2;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  
    `;