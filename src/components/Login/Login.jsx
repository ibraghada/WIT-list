import React from 'react';

export const Login = () => (
  <div className="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    <div className="m-grid m-grid--hor m-grid--root m-page">
      <div
        className="m-login m-login--signin  m-login--5"
        id="m_login"
        style={{
          height: '100vh',
          backgroundImage: `url(${'../../../assets/app/media/img//bg/bg-3.jpg'})`,
        }}
      >
        <div className="m-login__wrapper-1 m-portlet-full-height">
          <div className="m-login__wrapper-1-1">
            <div className="m-login__contanier">
              <div className="m-login__content">
                <div className="m-login__logo">
                  <a href="#">
                    <img
                      src="../../../assets/images/MakaaniLogoPlus.png"
                      width="210"
                    />
                  </a>
                </div>
                <div className="m-login__title">
                  <h3>
                    Join Our Great Makaani-Plus Community Get Free Account
                  </h3>
                </div>
                <div className="m-login__form-action">
                  <button
                    type="button"
                    id="m_login_signup"
                    className="btn btn-outline-focus m-btn--pill"
                  >
                    Get An Account
                  </button>
                </div>
              </div>
            </div>
            <div className="m-login__border">
              <div />
            </div>
          </div>
        </div>
        <div className="m-login__wrapper-2 m-portlet-full-height">
          <div className="m-login__contanier">
            <div className="m-login__signin">
              <div className="m-login__head">
                <h3 className="m-login__title">Login To Your Account</h3>
              </div>
              <form className="m-login__form m-form" action="">
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input m-login__form-input--last"
                    type="Password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="row m-login__form-sub">
                  <div className="col m--align-left">
                    <label className="m-checkbox m-checkbox--focus">
                      <input type="checkbox" name="remember" />
                      Remember me
                      <span />
                    </label>
                  </div>
                  <div className="col m--align-right">
                    <a
                      href="javascript:;"
                      id="m_login_forget_password"
                      className="m-link"
                    >
                      Forget Password ?
                    </a>
                  </div>
                </div>
                <div className="m-login__form-action">
                  <button
                    id="m_login_signin_submit"
                    className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="m-login__signup">
              <div className="m-login__head">
                <h3 className="m-login__title">Sign Up</h3>
                <div className="m-login__desc">
                  Enter your details to create your account:
                </div>
              </div>
              <form className="m-login__form m-form" action="">
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="FirstName"
                    name="FirstName"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="LastName"
                    name="LastName"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="password"
                    placeholder="Confirm Password"
                    name="rpassword"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="PhoneNumber"
                    name="PhoneNumber"
                  />
                </div>
                <div className="form-group m-form__group">
                  <div className="input-group date">
                    <input
                      type="text"
                      className="form-control m-input"
                      readOnly
                      placeholder="Birthdate"
                      id="m_datetimepicker_3"
                    />
                  </div>
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="Facebook"
                    name="Facebook"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input m-login__form-input--last"
                    type="text"
                    placeholder="LinkedIn"
                    name="LinkedIn"
                    autoComplete="off"
                  />
                </div>
                <div className="m-login__form-sub">
                  <label className="m-checkbox m-checkbox--focus">
                    <input type="checkbox" name="agree" />I Agree the
                    <a href="#" className="m-link m-link--focus">
                      terms and conditions
                    </a>
                    .<span />
                  </label>
                  <span className="m-form__help" />
                </div>
                <div className="m-login__form-action">
                  <button
                    id="m_login_signup_submit"
                    className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                  >
                    Sign Up
                  </button>
                  <button
                    id="m_login_signup_cancel"
                    className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div className="m-login__forget-password">
              <div className="m-login__head">
                <h3 className="m-login__title">Forgotten Password ?</h3>
                <div className="m-login__desc">
                  Enter your email to reset your password:
                </div>
              </div>
              <form className="m-login__form m-form" action="">
                <div className="form-group m-form__group">
                  <input
                    className="form-control m-input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="m_email"
                    autoComplete="off"
                  />
                </div>
                <div className="m-login__form-action">
                  <button
                    id="m_login_forget_password_submit"
                    type="submit"
                    className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                  >
                    Request
                  </button>
                  <button
                    id="m_login_forget_password_cancel"
                    type="submit"
                    className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
