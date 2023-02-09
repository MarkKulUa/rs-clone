function template(page?: string | undefined) {
  return `<div class="container simple_header">
    <div class="logo"></div>
    <nav class="nav">
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
  </div>`;
}

export default template;
