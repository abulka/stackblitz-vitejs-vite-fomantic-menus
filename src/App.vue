<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import { RouterLink, RouterView, useLink } from 'vue-router';
</script>

<template>
  <div>
    <h1>Hello App!!</h1>
    <div class="ui container center aligned">
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <br />
      <router-link to="/about">Go to About</router-link>
      <br />
      <router-link to="/foamy">Go to Foamy</router-link>
    </div>

    <h2>Same router menu, except as fomantic menu</h2>
    <p>
      This almost works, but you have to click on the link not the menu item
      area around it. Its a fluke it works, actualy - not satisfactory.
      <b>Probably the click event bubbles up</b> - thus the router responds to the link click, and then fomantic responds to the bubbled up
      click. And if you click on the fomantic outer menu item, then its just fomantic responding - but why does it add `active` without
      explicit js?
      <b>because</b>the jquery wiring of the helloworld component hangs around even though we have switched router pages, I think because the app.vue component is permanently there. THUS mixing jquery, fomantic and vue and vue routes is a REALLY tangled web of incompatible
      active classes, events, mounted lifecycles - yikes!
    </p>
    <div class="ui container">
      <div class="ui three item menu">
        <a class="item"><router-link to="/">Home</router-link></a>
        <a class="item"><router-link to="/about">About</router-link></a>
        <a class="item"><router-link to="/foamy">Foamy</router-link></a>
      </div>
    </div>

    <p>yet this is a normal fomantic menu, with no js behind the scenes</p>
    <div class="ui three item menu">
      <a class="item">Editorials</a>
      <a class="item active">Reviews</a>
      <a class="item">Upcoming Events</a>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="standout"></router-view>

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

.standout {
  background-color: cyan;
}
</style>
