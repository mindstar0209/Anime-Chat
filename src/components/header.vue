<template>
  <div data-role="Header" class="header-header" v-bind:class="rootClassName">
    <nav class="header-nav">
      <div class="header-container">
        <img :alt="image_alt1" :src="image_src1" class="header-image" />
        <div class="header-container1">
          <input
            type="text"
            :placeholder="inputplaceholder"
            class="header-textinput input"
          />
          <router-link to="/search" class="header-navlink">
            <svg viewBox="0 0 1024 1024" class="header-icon">
              <path
                d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
              ></path>
            </svg>
          </router-link>
        </div>
        <app-menu rootClassName="menu-root-class-name"></app-menu>
        <div data-thq="thq-dropdown" class="header-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle">
            <router-link to="/personal">
              <img
                alt="image"
                src="/OIP.jpg"
                class="header-image1"
              />
            </router-link>
            <div data-thq="thq-dropdown-arrow" class="header-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" class="header-icon02">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" class="header-dropdown-list">
            <li data-thq="thq-dropdown" class="header-dropdown list-item">
              <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle1">
                <span class="header-text">嘉心糖</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" class="header-dropdown1 list-item">
              <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle2">
                <button class="header-button button">
                  <svg viewBox="0 0 1024 1024" class="header-icon04">
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM704 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM320 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM512 832c-116.51 0-218.464-62.274-274.426-155.344l82.328-49.396c39.174 65.148 110.542 108.74 192.098 108.74s152.924-43.592 192.098-108.74l82.328 49.396c-55.962 93.070-157.916 155.344-274.426 155.344z"
                    ></path>
                  </svg>
                  <span class="header-text1">Set status</span>
                </button>
              </div>
            </li>
            <div>
              <li data-thq="thq-dropdown" class="header-dropdown2 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="header-dropdown-toggle3"
                >
                  <span class="header-text2">发布chatbot</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" class="header-dropdown3 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="header-dropdown-toggle4"
                >
                  <span class="header-text3">设置</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div data-role="MobileMenu" class="header-mobile-menu">
      <div class="header-top">
        <router-link to="/home" class="header-navlink2 Large">
          Soft UI Design System
        </router-link>
        <div data-role="CloseMobileMenu" class="header-close-menu">
          <svg viewBox="0 0 1024 1024" class="header-icon06">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu">
          <router-link to="/home" class="header-navlink3 Large">Home</router-link>
          <router-link to="/profile" class="header-navlink4 Large">
            Profile
          </router-link>
          <router-link to="/" class="header-navlink5 Large">
            Coming Soon
          </router-link>
        </div>
      </div>
      <div class="header-bot">
        <primary-pink-button button="buy now"></primary-pink-button>
      </div>
      <header data-role="Header" class="header-header1">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          class="header-image2"
        />
        <div class="header-icon-group">
          <div data-role="BurgerMenu" class="header-burger-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon08">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <svg viewBox="0 0 1024 1024" class="header-icon10">
            <path
              d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" class="header-mobile-menu1">
          <nav class="header-nav1">
            <div class="header-container3">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="header-image3"
              />
              <div data-role="CloseMobileMenu" class="header-close-mobile-menu">
                <svg viewBox="0 0 1024 1024" class="header-icon12">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <navigation-links2
              rootClassName="rootClassName13"
            ></navigation-links2>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" class="header-icon14">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon16">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon18">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <header data-role="Header" class="header-header2">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          class="header-image4"
        />
        <div class="header-icon-group2">
          <div data-role="BurgerMenu" class="header-burger-menu1">
            <svg viewBox="0 0 1024 1024" class="header-icon20">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <svg viewBox="0 0 1024 1024" class="header-icon22">
            <path
              d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" class="header-mobile-menu2">
          <nav class="header-nav2">
            <div class="header-container4">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="header-image5"
              />
              <div data-role="CloseMobileMenu" class="header-close-mobile-menu1">
                <svg viewBox="0 0 1024 1024" class="header-icon24">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <navigation-links2
              rootClassName="rootClassName13"
            ></navigation-links2>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" class="header-icon26">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon28">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon30">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
        <header data-role="Header" class="header-header3">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            class="header-image6"
          />
          <div class="header-icon-group4">
            <div data-role="BurgerMenu" class="header-burger-menu2">
              <svg viewBox="0 0 1024 1024" class="header-icon32">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <svg viewBox="0 0 1024 1024" class="header-icon34">
              <path
                d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
              ></path>
            </svg>
          </div>
          <div data-role="MobileMenu" class="header-mobile-menu3">
            <nav class="header-nav3">
              <div class="header-container5">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  class="header-image7"
                />
                <div
                  data-role="CloseMobileMenu"
                  class="header-close-mobile-menu2"
                >
                  <svg viewBox="0 0 1024 1024" class="header-icon36">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    ></path>
                  </svg>
                </div>
              </div>
              <navigation-links1
                rootClassName="rootClassName13"
              ></navigation-links1>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" class="header-icon38">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon40">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon42">
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
</template>

<script>
import AppMenu from './menu'
import PrimaryPinkButton from './primary-pink-button'
import NavigationLinks2 from './navigation-links2'
import NavigationLinks1 from './navigation-links1'

export default {
  name: 'Header',
  props: {
    image_src1: {
      type: String,
      default: '/logo-live2dchat-200h.png',
    },
    heading: {
      type: String,
      default: '定义ChatBot',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    button1: {
      type: String,
      default: 'Button',
    },
    button: {
      type: String,
      default: '上传头像',
    },
    rootClassName: String,
    inputplaceholder: {
      type: String,
      default: '神里绫华',
    },
  },
  components: {
    AppMenu,
    PrimaryPinkButton,
    NavigationLinks2,
    NavigationLinks1,
  },
}
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: auto;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-nav {
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
.header-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-image {
  flex: 0 0 auto;
  width: 175px;
  height: 29px;
  z-index: 100;
  object-fit: cover;
  margin-right: var(--dl-space-space-halfunit);
}
.header-container1 {
  flex: 0 0 auto;
  width: 265px;
  height: 40px;
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
.header-container1:hover {
  background-color: rgba(193, 114, 213, 0.06);
}
.header-container1:focus-within {
  border-width: 1px;
  background-color: rgba(193, 114, 213, 0.06);
}
.header-textinput {
  flex: 0.4;
  color: var(--dl-color-secondary-700);
  width: 200px;
  height: 33px;
  align-self: flex-start;
  transition: 0.3s;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: transparent;
}
.header-textinput:focus {
  background-color: rgba(193, 114, 213, 0.06);
}
.header-navlink {
  display: contents;
}
.header-icon {
  fill: var(--dl-color-pink-700);
  width: auto;
  cursor: pointer;
  height: 100%;
  transition: 0.3s;
  margin-right: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-icon:hover {
  fill: rgba(203, 12, 159, 0.62);
}
.header-thq-dropdown {
  width: 100px;
  cursor: pointer;
  height: 100%;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-color: #a91cf1;
  border-width: 2px;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
}
.header-dropdown-arrow {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  transition: 0.3s;
}
.header-icon02 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin-top: auto;
  transition: 0.3s;
  margin-bottom: auto;
}
.header-dropdown-list {
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
.header-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.header-dropdown-toggle1 {
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
.header-dropdown-toggle1:hover {
  fill: #fff;
}
.header-text {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
}
.header-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius2);
  flex-direction: column;
}
.header-dropdown1:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.header-dropdown-toggle2 {
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
.header-button {
  width: var(--dl-size-size-large);
  display: flex;
  transition: 0.3s;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.37);
}
.header-button:hover {
  background-color: #b195b9;
}
.header-icon04 {
  color: var(--dl-color-gray-black);
  width: 24px;
  height: 24px;
  align-self: stretch;
  transition: 0.3s;
}

.header-text1 {
  color: var(--dl-color-gray-500);
  align-self: center;
  font-style: normal;
  transition: 0.3s;
  font-weight: 500;
  margin-left: var(--dl-space-space-halfunit1);
}
.header-text1:hover {
  color: #628ee1;
}
.header-dropdown2 {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown2:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.header-dropdown-toggle3 {
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
.header-text2 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown3 {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown3:hover {
  background-color: rgba(231, 182, 253, 0.37);
}
.header-dropdown-toggle4 {
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
.header-text3 {
  color: rgb(90, 89, 89);
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-mobile-menu {
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
.header-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink2 {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon06 {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-navlink3 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink3:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink4 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink4:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink5:hover {
  color: var(--dl-color-gray-500);
}
.header-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
.header-header1 {
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
.header-image2 {
  height: 2rem;
}
.header-icon-group {
  display: flex;
}
.header-burger-menu {
  display: none;
}
.header-icon08 {
  width: 16px;
  height: 16px;
  display: flex;
}
.header-icon10 {
  width: 16px;
  height: 16px;
}
.header-mobile-menu1 {
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
.header-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.header-image3 {
  height: 2rem;
}
.header-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon12 {
  width: 16px;
  height: 16px;
}
.header-icon14 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon16 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon18 {
  width: 16px;
  height: 16px;
}
.header-header2 {
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
.header-image4 {
  height: 2rem;
}
.header-icon-group2 {
  display: flex;
}
.header-burger-menu1 {
  display: none;
}
.header-icon20 {
  width: 16px;
  height: 16px;
  display: flex;
}
.header-icon22 {
  width: 16px;
  height: 16px;
}
.header-mobile-menu2 {
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
.header-nav2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container4 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.header-image5 {
  height: 2rem;
}
.header-close-mobile-menu1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon24 {
  width: 16px;
  height: 16px;
}
.header-icon26 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon28 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon30 {
  width: 16px;
  height: 16px;
}
.header-header3 {
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
.header-image6 {
  height: 2rem;
}
.header-icon-group4 {
  display: flex;
}
.header-burger-menu2 {
  display: none;
}
.header-icon32 {
  width: 16px;
  height: 16px;
  display: flex;
}
.header-icon34 {
  width: 16px;
  height: 16px;
}
.header-mobile-menu3 {
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
.header-nav3 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container5 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.header-image7 {
  height: 2rem;
}
.header-close-mobile-menu2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon36 {
  width: 16px;
  height: 16px;
}
.header-icon38 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon40 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon42 {
  width: 16px;
  height: 16px;
}
.header-root-class-name {
  max-width: 100%;
}
.header-root-class-name1 {
  max-width: 100%;
}
.header-root-class-name2 {
  flex: 1;
  max-width: 100%;
}
.header-root-class-name3 {
  top: 0px;
  flex: 1;
  left: 0px;
  width: auto;
  position: static;
  align-self: flex-start;
  margin-right: 190px;
}
@media(max-width: 991px) {
  .header-nav {
    max-width: 960px;
  }
}
@media(max-width: 767px) {
  .header-header1 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .header-header2 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-burger-menu1 {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .header-header3 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-burger-menu2 {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .header-header1 {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu1 {
    padding: 16px;
  }
  .header-header2 {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu2 {
    padding: 16px;
  }
  .header-header3 {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu3 {
    padding: 16px;
  }
}
</style>
