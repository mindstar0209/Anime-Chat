<template>
  <div class="search-container">
    <div data-role="Header" class="search-header">
      <nav class="search-nav">
        <div class="search-container01">
          <img alt="image" src="/logo-live2dchat-200h.png" class="search-image" />
          <app-menu rootClassName="menu-root-class-name1"></app-menu>
          <div data-thq="thq-dropdown" class="search-thq-dropdown list-item">
            <div data-thq="thq-dropdown-toggle" class="search-dropdown-toggle">
              <router-link to="/personal">
                <img
                  alt="image"
                  src="/external/0g103353l6-400w-200w.jpg"
                  class="search-image1"
                />
              </router-link>
              <div data-thq="thq-dropdown-arrow" class="search-dropdown-arrow">
                <svg viewBox="0 0 1024 1024" class="search-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" class="search-dropdown-list">
              <li data-thq="thq-dropdown" class="search-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="search-dropdown-toggle1"
                >
                  <span class="search-text">帅哥</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" class="search-dropdown1 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="search-dropdown-toggle2"
                >
                  <button class="search-button button">
                    <svg viewBox="0 0 1024 1024" class="search-icon02">
                      <path
                        d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM704 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM320 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM512 832c-116.51 0-218.464-62.274-274.426-155.344l82.328-49.396c39.174 65.148 110.542 108.74 192.098 108.74s152.924-43.592 192.098-108.74l82.328 49.396c-55.962 93.070-157.916 155.344-274.426 155.344z"
                      ></path>
                    </svg>
                    <span class="search-text1">Set status</span>
                  </button>
                </div>
              </li>
              <div>
                <li data-thq="thq-dropdown" class="search-dropdown2 list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    class="search-dropdown-toggle3"
                  >
                    <span class="search-text2">Sub-menu Item</span>
                  </div>
                </li>
                <li data-thq="thq-dropdown" class="search-dropdown3 list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    class="search-dropdown-toggle4"
                  >
                    <span class="search-text3">Sub-menu Item</span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" class="search-mobile-menu">
        <div class="search-top">
          <router-link to="/home" class="search-navlink1 Large">
            Soft UI Design System
          </router-link>
          <div data-role="CloseMobileMenu" class="search-close-menu">
            <svg viewBox="0 0 1024 1024" class="search-icon04">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="search-mid">
          <div class="search-menu">
            <router-link to="/home" class="search-navlink2 Large">
              Home
            </router-link>
            <router-link to="/profile" class="search-navlink3 Large">
              Profile
            </router-link>
            <router-link to="/" class="search-navlink4 Large">
              Coming Soon
            </router-link>
          </div>
        </div>
        <div class="search-bot">
          <primary-pink-button button="buy now"></primary-pink-button>
        </div>
        <header data-role="Header" class="search-header1">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            class="search-image2"
          />
          <div class="search-icon-group">
            <div data-role="BurgerMenu" class="search-burger-menu">
              <svg viewBox="0 0 1024 1024" class="search-icon06">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <svg viewBox="0 0 1024 1024" class="search-icon08">
              <path
                d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
              ></path>
            </svg>
          </div>
          <div data-role="MobileMenu" class="search-mobile-menu1">
            <nav class="search-nav1">
              <div class="search-container03">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  class="search-image3"
                />
                <div data-role="CloseMobileMenu" class="search-close-mobile-menu">
                  <svg viewBox="0 0 1024 1024" class="search-icon10">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    ></path>
                  </svg>
                </div>
              </div>
              <navigation-links2
                rootClassName="rootClassName8"
              ></navigation-links2>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" class="search-icon12">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="search-icon14">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="search-icon16">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
        <header data-role="Header" class="search-header2">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            class="search-image4"
          />
          <div class="search-icon-group2">
            <div data-role="BurgerMenu" class="search-burger-menu1">
              <svg viewBox="0 0 1024 1024" class="search-icon18">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <svg viewBox="0 0 1024 1024" class="search-icon20">
              <path
                d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
              ></path>
            </svg>
          </div>
          <div data-role="MobileMenu" class="search-mobile-menu2">
            <nav class="search-nav2">
              <div class="search-container04">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  class="search-image5"
                />
                <div
                  data-role="CloseMobileMenu"
                  class="search-close-mobile-menu1"
                >
                  <svg viewBox="0 0 1024 1024" class="search-icon22">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    ></path>
                  </svg>
                </div>
              </div>
              <navigation-links2
                rootClassName="rootClassName9"
              ></navigation-links2>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" class="search-icon24">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="search-icon26">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="search-icon28">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
          <header data-role="Header" class="search-header3">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              class="search-image6"
            />
            <div class="search-icon-group4">
              <div data-role="BurgerMenu" class="search-burger-menu2">
                <svg viewBox="0 0 1024 1024" class="search-icon30">
                  <path
                    d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  ></path>
                </svg>
              </div>
              <svg viewBox="0 0 1024 1024" class="search-icon32">
                <path
                  d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                ></path>
              </svg>
            </div>
            <div data-role="MobileMenu" class="search-mobile-menu3">
              <nav class="search-nav3">
                <div class="search-container05">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    class="search-image7"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    class="search-close-mobile-menu2"
                  >
                    <svg viewBox="0 0 1024 1024" class="search-icon34">
                      <path
                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <navigation-links1
                  rootClassName="rootClassName8"
                ></navigation-links1>
              </nav>
              <div>
                <svg viewBox="0 0 950.8571428571428 1024" class="search-icon36">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path></svg
                ><svg viewBox="0 0 877.7142857142857 1024" class="search-icon38">
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  ></path></svg
                ><svg viewBox="0 0 602.2582857142856 1024" class="search-icon40">
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  ></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
      </div>
    </div>
    <div class="search-container06">
      <div class="search-container07">
        <input
          type="text"
          placeholder="神里绫华"
          class="search-textinput input"
        />
        <svg viewBox="0 0 1024 1024" class="search-icon42">
          <path
            d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="search-container08">
      <div class="search-container09">
        <feature-card
          text="张三"
          text1="2023-5-23 18:00"
          text2="1324"
          heading="万叶"
          image_src="/mmexport1685014477871-500w.png"
        ></feature-card>
        <feature-card
          text="李四"
          text1="2023-5-22 15:53"
          text2="134223"
          heading="神里绫华"
          image_src="/external/1683208050345869e5c49c6f2ead3a427cc10b7318cd1ab051aaca72f0ea578c2ae0e9aca6bd6.0_edit_45880411666435-500w.jpg"
        ></feature-card>
        <feature-card
          text="小玲"
          text1="2023-5-20 23:33"
          text2="254364"
          heading="纳西妲"
          image_src="/nahida_ico-500w.png"
        ></feature-card>
        <feature-card
          text="sllh的g"
          text1="2023-5-1 13:46"
          text2="4366856"
          heading="Q版海森"
          image_src="/external/img_20230112_150424-500w.jpg"
        ></feature-card>
        <feature-card
          text="dslfkj"
          text1="2023-1-3 8:00"
          text2="43656"
          heading="家主"
          image_src="/external/168320817113432b65f384e1c46da22f5c29dfa9ebec485c3ab50be4b71eec910efd2cdc11490.0_edit_45864665663834-500w.jpg"
        ></feature-card>
        <feature-card
          text="我是谁"
          text1="2023-3-1 16:32"
          text2="65745545"
          heading="旅行者"
          image_src="/external/16832081451716246ecfec44b9fbb19f5430bd63729c9b43897fd7b59f8fe076bdd5d6d6ac31a.0_edit_45873624077895-500w.jpg"
        ></feature-card>
      </div>
      <footer-gray rootClassName="footer-gray-root-class-name1"></footer-gray>
    </div>
  </div>
</template>

<script>
import AppMenu from '../components/menu'
import PrimaryPinkButton from '../components/primary-pink-button'
import NavigationLinks2 from '../components/navigation-links2'
import NavigationLinks1 from '../components/navigation-links1'
import FeatureCard from '../components/feature-card'
import FooterGray from '../components/footer-gray'

export default {
  name: 'Search',
  components: {
    AppMenu,
    PrimaryPinkButton,
    NavigationLinks2,
    NavigationLinks1,
    FeatureCard,
    FooterGray,
  },
  metaInfo: {
    title: 'Search - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Search - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.search-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(90deg, rgb(233, 247, 251) 1.00%,rgb(253, 239, 255) 100.00%);
}
.search-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  max-width: auto;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.search-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: hsla(0,0%,100%,.8)!important;
}
.search-container01 {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.search-image {
  flex: 0 0 auto;
  width: 175px;
  height: 29px;
  z-index: 100;
  object-fit: cover;
  margin-right: var(--dl-space-space-halfunit);
}
.search-thq-dropdown {
  width: 100px;
  cursor: pointer;
  height: 100%;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.search-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius2);
}
.search-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-color: #a91cf1;
  border-width: 3px;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
}
.search-dropdown-arrow {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  transition: 0.3s;
}
.search-icon {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin-top: auto;
  transition: 0.3s;
  margin-bottom: auto;
}
.search-dropdown-list {
  top: 42px;
  left: -108px;
  width: 207px;
  margin: auto;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.search-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.search-dropdown:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.search-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit1);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit1);
}
.search-dropdown-toggle1:hover {
  fill: #fff;
}
.search-text {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
}
.search-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius2);
  flex-direction: column;
}
.search-dropdown1:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.search-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit1);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit1);
}
.search-button {
  width: var(--dl-size-size-large);
  display: flex;
  transition: 0.3s;
  flex-direction: row;
  background-color: #f2e0f9;
}
.search-button:hover {
  background-color: #b195b9;
}
.search-icon02 {
  color: var(--dl-color-gray-black);
  width: 24px;
  height: 24px;
  align-self: stretch;
  transition: 0.3s;
}

.search-text1 {
  color: var(--dl-color-gray-500);
  align-self: center;
  font-style: normal;
  transition: 0.3s;
  font-weight: 500;
  margin-left: var(--dl-space-space-halfunit1);
}
.search-text1:hover {
  color: #628ee1;
}
.search-dropdown2 {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.search-dropdown2:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.search-dropdown-toggle3 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit1);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit1);
}
.search-text2 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.search-dropdown3 {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.search-dropdown3:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.search-dropdown-toggle4 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit1);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit1);
}
.search-text3 {
  color: #5a5959;
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.search-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.search-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.search-navlink1 {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.search-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.search-icon04 {
  width: 24px;
  height: 24px;
}
.search-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.search-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.search-navlink2 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.search-navlink2:hover {
  color: var(--dl-color-gray-500);
}
.search-navlink3 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.search-navlink3:hover {
  color: var(--dl-color-gray-500);
}
.search-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.search-navlink4:hover {
  color: var(--dl-color-gray-500);
}
.search-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
.search-header1 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
}
.search-image2 {
  height: 2rem;
}
.search-icon-group {
  display: flex;
}
.search-burger-menu {
  display: none;
}
.search-icon06 {
  width: 16px;
  height: 16px;
  display: flex;
}
.search-icon08 {
  width: 16px;
  height: 16px;
}
.search-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.search-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.search-container03 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.search-image3 {
  height: 2rem;
}
.search-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-icon10 {
  width: 16px;
  height: 16px;
}
.search-icon12 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon14 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon16 {
  width: 16px;
  height: 16px;
}
.search-header2 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
}
.search-image4 {
  height: 2rem;
}
.search-icon-group2 {
  display: flex;
}
.search-burger-menu1 {
  display: none;
}
.search-icon18 {
  width: 16px;
  height: 16px;
  display: flex;
}
.search-icon20 {
  width: 16px;
  height: 16px;
}
.search-mobile-menu2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.search-nav2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.search-container04 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.search-image5 {
  height: 2rem;
}
.search-close-mobile-menu1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-icon22 {
  width: 16px;
  height: 16px;
}
.search-icon24 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon26 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon28 {
  width: 16px;
  height: 16px;
}
.search-header3 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
}
.search-image6 {
  height: 2rem;
}
.search-icon-group4 {
  display: flex;
}
.search-burger-menu2 {
  display: none;
}
.search-icon30 {
  width: 16px;
  height: 16px;
  display: flex;
}
.search-icon32 {
  width: 16px;
  height: 16px;
}
.search-mobile-menu3 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.search-nav3 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.search-container05 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.search-image7 {
  height: 2rem;
}
.search-close-mobile-menu2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-icon34 {
  width: 16px;
  height: 16px;
}
.search-icon36 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon38 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.search-icon40 {
  width: 16px;
  height: 16px;
}
.search-container06 {
  top: 15px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  display: flex;
  z-index: 100;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.search-container07 {
  width: 35%;
  height: 41px;
  display: flex;
  padding: 2px;
  transition: 0.3s;
  align-items: center;
  border-color: var(--dl-color-primary-100);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(193, 114, 213, 0.14);
}
.search-container07:hover {
  background-color: rgba(193, 114, 213, 0.06);
}
.search-container07:focus-within {
  border-width: 1px;
  background-color: rgba(193, 114, 213, 0.06);
}
.search-textinput {
  flex: 0.95;
  color: var(--dl-color-secondary-700);
  width: auto;
  height: auto;
  align-self: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: transparent;
}
.search-textinput:focus {
  background-color: rgba(193, 114, 213, 0.06);
}
.search-icon42 {
  fill: var(--dl-color-pink-700);
  width: auto;
  cursor: pointer;
  height: 100%;
  transition: 0.3s;
  margin-right: var(--dl-space-space-halfunit);
}
.search-icon42:hover {
  fill: rgba(203, 12, 159, 0.62);
}
.search-container08 {
  width: 100%;
  height: 833px;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.search-container09 {
  flex: 0 0 auto;
  width: 850px;
  height: 833px;
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .search-nav {
    max-width: 960px;
  }
}
@media(max-width: 767px) {
  .search-header1 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .search-burger-menu {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .search-header2 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .search-burger-menu1 {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .search-header3 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .search-burger-menu2 {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .search-container09 {
    padding: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .search-header1 {
    padding: var(--dl-space-space-unit);
  }
  .search-mobile-menu1 {
    padding: 16px;
  }
  .search-header2 {
    padding: var(--dl-space-space-unit);
  }
  .search-mobile-menu2 {
    padding: 16px;
  }
  .search-header3 {
    padding: var(--dl-space-space-unit);
  }
  .search-mobile-menu3 {
    padding: 16px;
  }
}
</style>
