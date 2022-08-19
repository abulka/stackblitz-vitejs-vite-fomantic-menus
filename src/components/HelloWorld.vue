<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { uniq } from 'lodash';

defineProps({
  msg: String,
});

const count = ref(0);

onMounted(() => {
  console.log('HelloWorld onMounted!', uniq([1, 2, 2, 3, 4, 3, 8, 6]));

  // Wire up fomantic events using jquery
  $('.ui.dropdown').dropdown();
  //$('.ui.menu').menu();
  // console.log('ui menu class', $('.ui.menu'))
  // $('.menu .item')
  //   .tab()

  // https://stackoverflow.com/questions/33041509/menu-not-working-for-semantic-ui-like-example-code 
  $('.ui.three .item').on('click', function () {
    $('.ui .item').removeClass('active');
    $(this).addClass('active');
  });
});
</script>

<template>
  <p>hello andy</p>

  
<div class="ui three item menu">
  <a class="item">Editorials</a>
  <a class="item active">Reviews</a>
  <a class="item">Upcoming Events</a>
</div>

  <div class="ui secondary vertical menu">
    <a class="active item"> Account </a>
    <a class="item"> Settings </a>
    <div class="ui dropdown item">
      <i class="dropdown icon"></i>
      Display Options
      <div class="menu">
        <div class="header">Text Size</div>
        <a class="item">Small</a>
        <a class="item">Medium</a>
        <a class="item">Large</a>
      </div>
    </div>
  </div>

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
