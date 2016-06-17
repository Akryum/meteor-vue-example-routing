<template>
  <div class="app-menu">
    <a v-link="{ name:'home', exact: true }">Home</a>
    <a v-link="{ name:'page1' }">Page 1</a>
    <a v-link="{ name:'page2' }">Page 2</a>
  </div>
</template>

<style scoped>
.app-menu {
  margin: 32px 0;
  text-align: center;
}
.app-menu a {
  display: inline-block;
  padding: 6px;
  margin: 0 6px;
  border-radius: 3px;
}
.app-menu a.v-link-active {
  background: #40b883;
  color: white;
}
</style>
