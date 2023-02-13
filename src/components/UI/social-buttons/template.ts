function template() {
  return `
<div class="modal-window" id="modalWin">
<div class="modal-window-content">
  <h5 class="modal-window-title">Log in to your account</h5>
  <div class="sign-in-with modal-reg">
    <button onclick="" class="button button-with-fb"><img class="button-icon" src="./assets/icons/fb.svg" alt="facebook">Sign In with Facebook</button>
    <button onclick="" class="button button-with-google"><img class="button-icon" src="./assets/icons/google.svg" alt="google">Sign In with Google</button>
  </div>
  <div class="new-account">
    <div class="new-account-main">
      <div class="or-title modal-reg">
        <div class="modal-line"></div>
        <span class="or-text">or</span>
        <div class="modal-line"></div>
      </div>
      <form class="new-account-register" action="">
        <div class="new-account-data">
          <div class="account-data">
            <label class="account-data-title" for="email">E-mail</label>
            <input class="email-input" type="email" id="email">
          </div>
          <div class="account-data">
            <label class="account-data-title" for="password">Password</label>
            <input class="password-input" type="password" id="password">
          </div>
        </div>
        <button class="button button-register" type="submit">Sign In</button>
      </form>
      <p class="forgot-password modal-reg">Forgot Your Password?</p>
    </div>
    <div class="new-account-footer">
      <div class="modal-line"></div>
      <div class="account-register">
        <p class="if-not-account">Don’t have an account?</p>
        <p class="forgot-password create-account">Register</p>
      </div>
    </div>
  </div>
</div>
</div>`;
}
