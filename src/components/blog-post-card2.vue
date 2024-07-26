<template>
  <div class="blog-post-card2-blog-post-card" v-bind:class="rootClassName">
    <div class="blog-post-card2-container">
      <div class="blog-post-card2-container1">
        <div class="blog-post-card2-container2">
          <div class="blog-post-card2-container3">
            <img
              :alt="profile_alt"
              :src="profile_src"
              class="blog-post-card2-image"
            />
            <div class="blog-post-card2-container4">
              <span class="blog-post-card2-text">{{ author }}</span>
              <span class="blog-post-card2-text1">{{ text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-post-card2-container5">
        <div class="blog-post-card2-profile"></div>
        <img
          :alt="profile_alt1"
          :src="profile_src1"
          class="blog-post-card2-image1"
        />
        <span class="blog-post-card2-text2">{{ comment }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard2',
  props: {
    label: {
      type: String,
      default: 'ENTERPRISE',
    },
    profile_src1: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    profile_alt: {
      type: String,
      default: 'profile',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
    },
    description: {
      type: String,
      default: '我是神里绫华的狗',
    },
    when: {
      type: String,
      default: '3 days ago',
    },
    rootClassName: String,
    comment: {
      type: String,
      default: '神里绫华',
    },
    profile_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
    },
    text: {
      type: String,
      default: '我是神里绫华的狗',
    },
    profile_alt1: {
      type: String,
      default: 'profile',
    },
    author: {
      type: String,
      default: '旅行者',
    },
  },
}
</script>

<style scoped>
.blog-post-card2-blog-post-card {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card2-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-card2-container {
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  justify-content: space-between;
}
.blog-post-card2-container1 {
  flex: 0 0 auto;
  width: auto;
  height: 88px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.blog-post-card2-container2 {
  flex: 0 0 auto;
  width: auto;
  height: 88px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.blog-post-card2-container3 {
  flex: 0 0 auto;
  width: 498px;
  height: 88px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.blog-post-card2-image {
  width: 86px;
  height: 88px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.blog-post-card2-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.blog-post-card2-text {
  color: var(--dl-color-primary-500);
  font-size: 1.4rem;
  font-style: normal;
  margin-top: 10px;
  font-weight: 400;
  margin-left: 40px;
}
.blog-post-card2-text1 {
  color: #181819;
  font-size: 1.6rem;
  font-style: normal;
  margin-top: 10px;
  font-weight: 600;
  margin-left: 40px;
}
.blog-post-card2-container5 {
  width: 100%;
  display: flex;
  position: relative;
  align-self: flex-start;
  margin-top: 20px;
  align-items: flex-start;
  margin-left: 80px;
  flex-direction: row;
  justify-content: flex-start;
}
.blog-post-card2-profile {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
}
.blog-post-card2-image1 {
  width: 50px;
  height: 53px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.blog-post-card2-text2 {
  color: var(--dl-color-primary-softpurple);
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}

@media(max-width: 991px) {
  .blog-post-card2-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .blog-post-card2-blog-post-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .blog-post-card2-container5 {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
