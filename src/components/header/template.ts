function template() {
  return `
  <a class="nav-link logo" href="#/site"></a>
  <nav class="nav-site">
    <ul class="nav-list">
      <li class="nav-item">
        <a class="nav-link" href="#/events" id="events">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/tree" id="tree">Tree</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/photos" id="photos">Photos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/map" id="map">Map</a>
      </li>
    </ul>
  </nav>
  <div class="burger" id="burger-menu">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div> 
  </div>
  <div class="profile-ico">
    <a class="profile" href="#/member" id="profile">&nbsp</a>
  </div>
  <div class="logout" id="logout">Log out</div>
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
  <div class="overlay"></div>`;
}

export default template;
