function template() {
  return `
  <a class="nav-link logo" href="#/"></a>
  <nav class="nav">
  <div class="burger" id="burger-menu">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div> 
  </div>
    <ul class="nav-list">
      <li class="nav-item">
        <a class="nav-link" href="#/about" id="about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login" id="login">Log in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/team" id="team">About us</a>
      </li>
      <li class="nav-item">
        <div class="lang-container">
          <div class="lang-ico"></div>
          <ul class="lang-list">
              <li class="lang-item"><span class="lang-link" data-language="be">be</span></li>
              <li class="lang-item"><span class="slash">/</span></li>
              <li class="lang-item"><span class="lang-link" data-language="en">en</span></li>
              <li class="lang-item"><span class="slash">/</span></li>
              <li class="lang-item"><span class="lang-link" data-language="uk">uk</span></li>
          </ul>
      </div>
      </li>
    </ul>
  </nav>
  <div class="overlay"></div>`;
}

export default template;
