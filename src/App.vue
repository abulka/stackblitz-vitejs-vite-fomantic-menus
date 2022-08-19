<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView, useLink } from 'vue-router'

</script>

<template>
  <div>


  <h1>Hello App!!</h1>
  <div class="ui container center aligned">
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <br>
      <router-link to="/about">Go to About</router-link>
      <br>
      <router-link to="/foamy">Go to Foamy</router-link>
  </div>

  <h2>Same router menu, except as fomantic menu</h2>
  <div class="ui container">
    <div class="ui three item menu">
      <a class="item"><router-link to="/">Home</router-link></a>
      <a class="item"><router-link to="/about">About</router-link></a>
      <a class="item"><router-link to="/foamy">Foamy</router-link></a>
    </div>
  </div>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>




    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
