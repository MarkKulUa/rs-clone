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
    <section class="records-section">
      <div class="records-section-container">
        <div class="records-text-container">
          <div class="records-text">
            <h2 class="title">Search billions of records</h2>
            <p class="subtitle">Dive into our huge international records database – just search a name to learn more about your ancestors. With exclusive content and accurate results we'll help you uncover more than you ever imagined.</p>
          </div>
        </div>
        <div class="records-animation-wrapper">
          <div class="records-animation">
            <div class="passport-record animation-item"></div>
            <div class="census-record animation-item"></div>
            <div class="newspapers-record animation-item"></div>
            <div class="man-record animation-item"></div>
            <div class="woman-record animation-item"></div>
            <div class="railway-record animation-item"></div>
            <div class="letter-record animation-item"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="discovery-section">
      <div class="discovery-container container">
        <div class="discovery-text">
          <h2 class="title">Easy automatic discoveries</h2>
          <p class="subtitle">The minute you create a family tree, we'll begin searching for you. Look forward to email alerts with Smart Matches and Record Matches revealing new family tree connections, records and newspaper articles about your ancestors.</p>
        </div>
        <div class="discovery-animation-wrapper">
          <div class="discovery-animation">
            <div class="box-front animation-item"></div>
            <div class="box-bg animation-item"></div>
            <div class="box-open-back animation-item"></div>
            <div class="box-open-front animation-item"></div>
            <div class="box-photo-family animation-item"></div>
            <div class="box-photo-id animation-item"></div>
            <div class="box-photo-table animation-item"></div>
            <div class="box-photo-portrait animation-item"></div>
            <div class="box-photo-people animation-item"></div>
            <div class="box-photo-cert animation-item"></div>
            <div class="box-photo-blue animation-item"></div>
            <div class="box-star1 box-star animation-item"></div>
            <div class="box-star2 box-star animation-item"></div>
            <div class="box-star3 box-star animation-item"></div>
            <div class="box-star4 box-star animation-item"></div>
            <div class="box-star5 box-star animation-item"></div>
            <div class="box-star6 box-star animation-item"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export default template;
