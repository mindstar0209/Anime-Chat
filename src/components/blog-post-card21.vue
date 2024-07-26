<template>
  <div class="blog-post-card21-blog-post-card" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="blog-post-card21-image"
    />
    <div class="blog-post-card21-container">
      <div class="blog-post-card21-container1">
        <span class="blog-post-card21-text">{{ label }}</span>
        <span class="blog-post-card21-text1">{{ when }}</span>
      </div>
      <h1 class="blog-post-card21-text2">{{ title }}</h1>
      <span class="blog-post-card21-text3">{{ description }}</span>
      <div class="blog-post-card21-container2">
        <div class="blog-post-card21-profile">
          <img
            :alt="profile_alt"
            :src="profile_src"
            class="blog-post-card21-image1"
          />
          <span class="blog-post-card21-text4">{{ author }}</span>
        </div>
        <span class="blog-post-card21-text5">Read More -&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard21',
  props: {
    profile_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    label: {
      type: String,
      default: 'ENTERPRISE',
    },
    rootClassName: String,
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
    },
    when: {
      type: String,
      default: '3 days ago',
    },
    profile_alt: {
      type: String,
      default: 'profile',
    },
    author: {
      type: String,
      default: 'Jane Doe',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
  },
}
</script>

<style scoped>
.blog-post-card21-blog-post-card {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card21-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-card21-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.blog-post-card21-container {
  display: flex;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  justify-content: space-between;
}
.blog-post-card21-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card21-text {
  color: var(--dl-color-gray-500);
  font-weight: 600;
  text-transform: uppercase;
}
.blog-post-card21-text1 {
  color: var(--dl-color-gray-500);
  font-weight: 300;
}
.blog-post-card21-text2 {
  margin-bottom: 32px;
}
.blog-post-card21-text3 {
  color: var(--dl-color-gray-500);
  font-size: 1.25rem;
  margin-bottom: 32px;
}
.blog-post-card21-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card21-profile {
  display: flex;
  align-items: center;
}
.blog-post-card21-image1 {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.blog-post-card21-text4 {
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.blog-post-card21-text5 {
  color: var(--dl-color-gray-black);
  font-style: normal;
  font-weight: 500;
}



@media(max-width: 991px) {
  .blog-post-card21-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .blog-post-card21-blog-post-card {
    flex-direction: column;
  }
  .blog-post-card21-image {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .blog-post-card21-container2 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .blog-post-card21-text5 {
    width: auto;
  }
}
</style>
