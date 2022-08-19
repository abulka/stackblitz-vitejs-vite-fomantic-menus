<script setup>
import { computed } from 'vue'
import { ref, onMounted, onUnmounted } from "vue";
import { globals } from "../globals"

const lastState = ref() // seems this gets lost when unmounted due to router navigation!

onMounted(() => {
  console.log('Foamy onMounted!', globals, lastState.value, globals.lastState);

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
  lastState.value = e.target
  globals.lastState = e.target.text
  console.log('set globals.lastState to', globals.lastState)
}

</script>

<template>
  <div class="standout">
    <b>Foamy Component</b>
    <div class="ui raised segment">
      <div class="ui three foaminess item menu" @click="foamClick($event)">
        <a class="item">AAA</a>
        <a class="item">BBB</a>
        <a class="item">CCC</a>
      </div>
    </div>
    <b>Foamy Component without js</b>
    <div class="ui raised segment">
      <div class="ui three foaminess item menu">
        <a class="item">AAA2</a>
        <a class="item">BBB2</a>
        <a class="item">CCC2</a>
      </div>
    </div>
  </div>

</template>

<style scoped>

.foaminess {
  /* background-color: green; */
}
.standout {
  background-color: cyan;
}

</style>
