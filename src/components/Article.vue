<template>
  <div class="article">
    <h1 class="blog__title">{{ article.title }}</h1>
    <router-link to="/blog">Back</router-link>
    <hr>
    <div class="article__body" v-html="article.body"></div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: {
        title: this.id,
        body: '<h2>Testing</h2><p>Ok, let\'s do more now!</p>',
      },
    };
  },
};
</script>
