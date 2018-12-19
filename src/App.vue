<template>
  <div id="app">
    <header>
      <h1>AmyBeth Creative</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
