<template>
  <div>
    <h1>{{ name }}</h1>

    <button @click="updateName">update</button>

    <hr>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<script>

import { ref , reactive } from 'vue';
import useCounter from '../composables/useCounter'
export default {
  name: "HomeWorld",
  data () {
    return {
      // name : 'ahmad'
    }
  },

  setup() {
  let name = ref(2) ; // make variable reactive
  const {count , increment} = useCounter(name.value)
  // const count = ref(0)
  let obj = reactive({
    a: 'A',
    b: 'B'
  })
  function updateName () {
    console.log(name)
    console.log(name.value)
    console.log(obj)
    name.value = 'ali sheikh'
  }
  // function increment () {
  //   count.value++
  // }

  return {
    name,
    updateName,
    obj,
    count,
    increment
  }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
