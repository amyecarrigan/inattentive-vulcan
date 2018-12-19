<template>
  <div id="app">
    <header>
      <h1>Inattentive Vulcan</h1>
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
