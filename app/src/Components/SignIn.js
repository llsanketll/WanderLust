import SignInContainer from "./Styles/SignIn.styles";

function SignIn(props) {
  return (
    <SignInContainer>
      {/* creating account's main body */}
      <div className="app">
        <div className="signin-container">
          {/* creating square box in middle */}
          <div className="signin-container__form">
            {/* creating a box for websiteLogo */}
            <div className="signin-logo">WanderlustLogo/Name</div>
            {/* creating a box for signin form */}
            <div className="signin-form__layout">
              {/* creating signin title */}
              <div className="signin-form__title">
                <span>Sign in to your account</span>
              </div>
              {/* creating signin form */}
              <div className="signin-form_body">
                <form>
                  <div className="Email_container">
                    <div className="Email_title">
                      <label htmlFor="Email">Email</label>
                    </div>
                    <div className="Email__input">
                      <input type="email" name="Email" id="Email" />
                    </div>
                  </div>
                  <div className="signin-form__padding"></div>

                  <div className="Password_container">
                    <div className="Password_title">
                      <label htmlFor="Password">Password</label>
                    </div>
                    <a name="reset" href="#">
                      <div className="Password_forgot">Forgot Password? </div>
                    </a>
                    <div className="Password__input">
                      <input type="password" name="Password" id="Password" />
                    </div>
                  </div>
                  <div className="signin-form__padding"></div>
                  <div className="signin-form__continueButton">
                    <button
                      name="signin-form__continueButton"
                      type="submit"
                    >
                      Continue
                    </button>

                    <button onClick={props.google}>Sign In with Google</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* creating account's footer element */}
        <div className="account-access_footer"></div>
      </div>
    </SignInContainer>
  );
}

export default SignIn;
