import styled from 'styled-components';

function SignIn() {
  return (
    <main>
      {/* creating account's main body */}
      <div class="app">
        <div class="signin-container">
          {/* creating square box in middle */}
          <div class="signin-container__form">
            {/* creating a box for websiteLogo */}
            <div class="signin-logo">WanderlustLogo/Name</div>
            {/* creating a box for signin form */}
            <div class="signin-form__layout">
              {/* creating signin title */}
              <div class="signin-form__title">
                <span>Sign in to your account</span>
              </div>
              {/* creating signin form */}
              <div class="signin-form_body">
                <form>
                  <div class="Email_container">
                    <div class="Email_title">
                      <label for="Email">Email</label>
                    </div>
                    <div class="Email__input">
                      <input type="email" name="Email" id="Email" />
                    </div>
                  </div>
                  <div class="signin-form__padding"></div>

                  <div class="Password_container">
                    <div class="Password_title">
                      <label for="Password">Password</label>
                    </div>
                    <a name="reset" href="#">
                      <div class="Password_forgot">Forgot Password? </div>
                    </a>
                    <div class="Password__input">
                      <input type="password" name="Password" id="Password" />
                    </div>
                  </div>
                  <div class="signin-form__padding"></div>
                  <div class="signin-form__continueButton">
                    <button
                      name="signin-form__continueButton"
                      type="submit"
                      style="color: rgb(255,255,255);"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* creating account's footer element */}
        <div class="account-access_footer"></div>
      </div>
    </main>
  );
}

export default SignIn;
