function template(page?: string | undefined) {
  return `<div class="logo"></div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" id="about">About</a>
        </li>
        <li class="nav-item">
          <a href="#" id="login">Log in</a>
        </li>
        <li class="nav-item">
          <a href="#" id="team">About us</a>
        </li>
      </ul>
    </nav>
    <div class="lang-container">
      <div class="lang-ico"></div>
      <ul class="lang-list">
          <li class="lang-item"><span class="lang-link" data-language="be">be</span></li>
          <li class="lang-item"><span class="slash">/</span></li>
          <li class="lang-item"><span class="lang-link" data-language="en">en</span></li>
          <li class="lang-item"><span class="slash">/</span></li>
          <li class="lang-item"><span class="lang-link" data-language="uk">uk</span></li>
      </ul>
    </div>`;
}

export default template;
