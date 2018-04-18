<template>
  <div class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <router-link to="/blog">Back</router-link>
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
      article: require(`../posts/${this.id}.md`), // eslint-disable-line global-require, import/no-dynamic-require
    };
  },
};
</script>

