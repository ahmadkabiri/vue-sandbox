import { ref } from "vue";

export default function (counter) {
  const count = ref(0);
  function increment() {
    count.value+=counter;
  }

  return {count,increment}
}
