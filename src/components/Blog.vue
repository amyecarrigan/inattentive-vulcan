<template>
  <div class="blog">
    <h1>Blog</h1>
    <router-link to="/">Home</router-link>
    <article v-for="article in articles" :key="article.slug" class="article">
        <h2 class="article__title">
          <router-link class="article__link" :to="`/blog/${ article.slug }`">
            {{ article.title }}
          </router-link>
        </h2>
        <p class="article__description">{{ article.description }}</p>
    </article>
  </div>
</template>

<script>
const posts = {};
const req = require.context('../posts/', false, /\.md$/);
req.keys().forEach((key) => {
  posts[key] = req(key);
});

export default {
  name: 'Blog',
  computed: {
    articles() {
      const articleArray = [];
      Object.keys(posts).forEach((key) => {
        const article = posts[key];
        article.slug = key.replace('./', '').replace('.md', '');
        articleArray.push(article);
      });
      articleArray.filter(post => post.status === 'publish').sort((a, b) => a.created < b.created);
      return articleArray;
    },
  },
};
</script>
