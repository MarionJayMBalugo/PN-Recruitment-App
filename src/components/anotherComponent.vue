<template>
  <v-app>
    <p>ans: {{count}}</p>
    <v-btn @click="increment">+</v-btn>
    <v-btn @click="decrement">-</v-btn>
  </v-app>
</template>

<script>
import store from "./store"
export default {
  name: "another",
  computed: {
    count:()=>{
      return store.state.count;
    }
  },
  methods: {
    increment() {   
        store.commit("increment")
    },
    decrement() {     
    }
  }
};
</script>
