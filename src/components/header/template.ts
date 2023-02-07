function template() {
  return `<div class="container simple_header">
    <div class="logo"></div>
    <nav class="nav">
      <div class="burger" id="burger-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div> 
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" id="about">О проекте</a>
        </li>
        <li class="nav-item">
          <a href="#" id="registration">Регистрация</a>
        </li>
        <li class="nav-item">
          <a href="#" id="sign">Войти</a>
        </li>
        <li class="nav-item">
          <a href="#" id="team">О команде</a>
        </li>
        <li class="nav-item">
          <div class="lang-ico"></div>
          <a href="#" id="lang">Русский</a>
        </li>
      </ul>
    </nav>
    <div class="overlay"></div>
  </div>`;
}

export default template;
