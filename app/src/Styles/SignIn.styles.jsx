import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  & .signin-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1080px;
    margin: auto;
    padding-top: 55px;
    position: relative;
  }
  & .signin-container__form {
    display: flex;
    flex-direction: column;
    min-width: 540px;
    margin: 0 auto;
  }
  & .signin-logo {
    font-size: 2.5rem;
    font-weight: 400;
    padding-left: 20px;
    padding-bottom: 30px;
  }

  & .signin-form__layout {
    display: flex;
    flex-direction: column;
    padding: 56px 48px;
    border-radius: 4px;
    box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.1),
      0 5px 15px 0 rgba(0, 0, 0, 0.07);
  }
  & .signin-form__title {
    display: flex;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
  & .signin-form_body {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
  }
  & .margin_top12 {
    margin-top: -12px;
  }

  & .input_title {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
  & .input_content {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    font-weight: 300;
    width: 100%;
    flex: 1 1 auto;
    border-radius: 4px;
    padding: 8px 16px;
    line-height: 28px;
  }
  & .password_title {
    display: flex;
    justify-content: space-between;
  }
  & button {
    font-size: 16px;
  }
  & a {
    text-decoration: none;
  }
  & input {
    border: 1px solid #d8d8d8;
  }
  & input:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 5px #719ece;
  }
  & .margin_top20 {
    margin-top: 20px;
  }
  & .margin_top12 {
    margin-top: 12px;
  }
  & .padding_top32 {
    padding-top: 32px;
  }

  & .button_container {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 4px;
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
  [name='signin-form__continue_button'] {
    background-color: #0071c2;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  & .signin-option__social {
    margin-bottom: -8px;
  }
  & .signin-option__social-divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px 0;
  }
  & .social-divider-line {
    height: 1px;
    width: 100%;
    background-color: #e4d9d9;
  }
  & .social-divider-line {
    height: 1px;
    width: 100%;
    background-color: #e4d9d9;
  }
  & .social-divider-text {
    white-space: nowrap;
    margin: 0 8px 2px;
  }
  & .signin-option__social-appIconContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 8px 0 0;
  }
  & .social-appIcons {
    display: flex;
    cursor:pointer;
    padding: 23px;
    border: 1px solid #d8d8d8;
    width: 72px;
    height: 72px;
    margin: 16px;
  }
  & a.social-appIcons {
    text-decoration: none;
    color: inherit;
    touch-action: manipulation;
    cursor: pointer;
  }
  & a.social-appIcons:hover {
    border: 2px solid #719ece;
    transition: all 0.25s ease-in-out;
  }
  & .social-appIcon-image {
    display: flex;
    align-items: center;
  }
  & .signin-form__register-link {
    padding-left: 20px;
    padding-top: 32px;
  }

  & .box-root {
    box-sizing: border-box;
  }
`;

