<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  font-family: Hack, monospace;
  background-color: #2b2b2b;
  color: rgb(243, 243, 243);
  height: 100%;
}
a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
