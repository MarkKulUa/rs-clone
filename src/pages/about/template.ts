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
            <a class="button login"  href="#">Log in</a>
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
    <section class="community_section community_cream">
      <div class="community_container container">
        <div class="title_wrapper">
          <h2 class="title">Join the MyHeritage community</h2>
          <p>Millions of families around the world use MyHeritage to explore their history. Collaborate with members and join the thousands who reunite with long-lost relatives every single day through our network.</p>
        </div>
        <ul class="counters">
          <li class="counter"><b>5.4 Billion</b> profiles<!-- --></li>
          <li class="counter"><b>102 Million</b> users<!-- --></li>
          <li class="counter"><b>90 Million</b> family trees<!-- --></li>
        </ul>
        <div class="image"></div>
      </div>
    </section>
    <section class="devices_section">
      <div class="devices_section_container container">
        <div class="devices_logo"></div>
        <div class="text">
          <h1>Anywhere, anytime and on any device</h1>
          <p class="description">Research your family history with three award-winning products, all private and secure. Sync between them and enjoy a captivating journey to your past, wherever you are.</p>
        </div>
        <div class="devices_images">
          <div class="device_image_item">
            <div class="tablet_image"></div>
            <div class="text_image">Tablet</div>
          </div>
          <div class="device_image_item">
            <div class="mobile_image"></div>
            <div class="text_image">Mobile</div>
          </div>
          <div class="device_image_item">
            <div class="desktop_image"></div>
            <div class="text_image">Desktop</div>
          </div>
        </div>
      </div>
    </section>
    <section class="quotes_section">
      <div class="quotes_section_container container">
        <div class="quotes_logos_wrapper">
          <div class="logos_with_links">
            <h1 class="featured_on_title">Featured on:</h1>
            <div class="fresnel-container">
              <div class="quotes_logos_with_links">
                <a class="mobile_logo" href="https://www.nytimes.com/2018/03/01/science/cousins-marriage-family-tree.html" target="_blank" rel="noopener noreferrer">
                  <div class="logo1 logo"></div>
                </a>
                <a class="mobile_logo us" href="https://techcrunch.com/2018/01/22/myheritage-says-it-sold-over-1m-dna-kits-last-year-annual-revenue-grew-to-133m/" target="_blank" rel="noopener noreferrer">
                  <div class="logo2 logo"></div>
                </a>
                <a class="mobile_logo us" href="https://abcnews.go.com/Lifestyle/woman-meets-birth-mother-1st-time-30-years/story?id=51173564" target="_blank" rel="noopener noreferrer">
                  <div class="logo3 logo"></div>
                <a class="mobile_logo us" href="http://insider.foxnews.com/2017/06/22/woman-finds-mom-mothers-day-my-heritage" target="_blank" rel="noopener noreferrer">
                  <div class="logo4 logo"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="quotes_users_wrapper">
          <div class="fresnel-container">
            <div class="carousel_container">
              <div class="carousel_items_container">
                <div class="carousel_item item_0 active">
                  <div class="testimonial_component">
                    <div class="citation_container">
                      <span class="before_citation"></span>
                      <div class="citation">WOW! MyHeritage is amazing! I cannot believe how super simple it is to research and create a family tree with very little information in hand. This is simply above and beyond anything else I've seen on the web! Thank you! Thank you! Thank you!</div>
                      <span class="after_citation"></span>
                    </div>
                    <div class="name_and_location">R. Sloan, Gallatin, Tennessee, USA</div>
                  </div>
                </div>
                <div class="carousel_item item_1">
                  <div class="testimonial_component">
                    <div class="citation_container">
                      <span class="before_citation"></span>
                      <div class="citation">I have been trying to piece together my family for over 35 years and Smart Matches made it go past my wildest dreams. Thanks to MyHeritage, this is a wonderful and really exciting hobby to really dig deep into.</div>
                      <span class="after_citation"></span>
                    </div>
                    <div class="name_and_location">D. Henry, North Lauderdale, Florida, USA</div>
                  </div>
                </div>
                <div class="carousel_item item_2">
                  <div class="testimonial_component">
                    <div class="citation_container">
                      <span class="before_citation"></span>
                      <div class="citation">MyHeritage is a great place to develop a family tree. In less than two weeks time I was able to track my family back to 1877. This is in no small part due to the vast storehouse of data that is available through MyHeritage.</div>
                      <span class="after_citation"></span>
                    </div>
                    <div class="name_and_location">W. Vacca, Bonita Springs, Florida, USA</div>
                  </div>
                </div>
                <div class="carousel_item item_3">
                  <div class="testimonial_component">
                    <div class="citation_container">
                      <span class="before_citation"></span>
                      <div class="citation">With MyHeritage I am having the time of my life. Thanks for offering such a fabulous site that is going to help so many!</div>
                      <span class="after_citation"></span>
                    </div>
                    <div class="name_and_location">K. N. Mathias , South Fulton, Tennessee, USA</div>
                  </div>
                </div>
                <div class="carousel_item item_4">
                  <div class="testimonial_component">
                    <div class="citation_container">
                      <span class="before_citation"></span>
                      <div class="citation">Thanks to MyHeritage I finally was able to unlock the mystery! It has been a great revelation to find so many family members after so many years.</div>
                      <span class="after_citation"></span>
                    </div>
                    <div class="name_and_location">A. Horst, Charlotte, North Carolina, USA</div>
                  </div>
                </div>
              </div>
              <div class="dots_container">
                <div class="dot dot_0 active default_color"></div>
                <div class="dot dot_1 default_color"></div>
                <div class="dot dot_2 default_color"></div>
                <div class="dot dot_3 default_color"></div>
                <div class="dot dot_4 default_color"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="discover_section">
        <div class="container">
          <div class="title_container">
            <h1>Discover and treasure<!-- --><br>your unique family history<!-- --></h1>
          </div>
          <a class="button login" href="#">Log in</a>
        </div>
      </section>
  `;
}

export default template;
