<script setup>
import { computed } from 'vue'
import { ref, onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log('Foamy onMounted!');

  // https://stackoverflow.com/questions/33041509/menu-not-working-for-semantic-ui-like-example-code 
  // $('.ui .item').on('click', function () {
  //   console.log('foamy click', $('.ui .item'))
  //   $('.ui .item').removeClass('active');
  //   $(this).addClass('active');
  // });

})

function foamClick(e) {
  console.log('foamClick', e.target)
  // remove class 'active' from all sibling elements then add class 'active' to the clicked element without using jquery
  const siblings = e.target.parentNode.children
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('active')
  }
  e.target.classList.add('active')
}

</script>

<template>
  <h2>Foamy Component</h2>

  <div class="ui container">
    <div class="ui three foaminess item menu" @click="foamClick($event)">
      <a class="item">AAA</a>
      <a class="item">BBB</a>
      <a class="item">CCC</a>
    </div>
  </div>

</template>

<style scoped>

.foaminess {
  /* background-color: green; */
}

</style>
