function template() {
  return `
    <section class="family-tree-section">
      <div class="container family-tree-container">
        <div class="family-tree-wrapper">
          <div class="title-wrapper">
            <h2 class="title">Create your online family tree</h2>
            <p class="family-tree-text">Your past begins with your family tree and it's easy to build one on MyHeritage. Add names, dates, photos and stories and share with your family.</p>
          </div>
          <div class="tree-chart">
            <div class="tree-chart-animation">
              <div class="father-parents" id="father-parents"></div>
              <div class="mother-parents"></div>
              <div class="parents-connector mother-connector">
                <div class="horizontal-line"></div>
                <div class="vertical-line"></div>
              </div>
              <div class="parents-connector father-connector">
                <div class="horizontal-line"></div>
                <div class="vertical-line"></div>
              </div>
              <div class="parent-container parent-mother-container">
                <div class="mother-container">
                  <div class="mother animation-item"></div>
                </div>
              </div>
              <div class="parent-container parent-father-container">
                <div class="father-container">
                  <div class="father animation-item"></div>
                </div>
              </div>
              <div class="parents-connector mother-father-connector">
                <div class="horizontal-line"></div>
                <div class="vertical-line"></div>
              </div>
            </div>
            <a class="button login-button">Log in</a>
          </div>
        </div>
      </div>
    </section>
    <section class="animate-section">
      <div class="container about-project-conainer">
        <div class="animate-wrapper">
          <div class="title-wrapper">
            <h2 class="title">Animate your family photos</h2>
            <p>Deep Nostalgia™ — the sensation that’s taken the internet by storm!<br>
            <b>Over 106 million animations and counting!</b></p>
          </div>
          <div class="image"></div>
        </div>
      </div>
    </section>
  `;
}

export default template;
