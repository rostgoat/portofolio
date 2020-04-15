<template>
  <div class="main">
    <div class="main__top">
      <div class="nav">
        <ul class="nav__list">
          <router-link tag="li" class="nav__item" to="/">Home</router-link>
          <div class="nav__item-separator">|</div>
          <router-link class="nav__item" to="/work">Work</router-link>
          <div class="nav__item-separator">|</div>
          <router-link class="nav__item" to="/about">Skills</router-link>
        </ul>
      </div>

      <div class="main__logo">
        <img src="../public/rm_logo.png" alt="logo" class="main__logo--image" />
      </div>
    </div>
    <v-content class="main__content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Home from "@/views/Home.vue";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {
  onClickHome() {
    this.$router.push("/");
  }

  onClickWork() {
    this.$router.push("/work");
  }

  onClickAbout() {
    this.$router.push("/about");
  }
}
</script>

<style lang="scss">
.main {
  &__top {
    position: fixed;
    top: 0;
    width: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    &--image {
      width: 75px;
      height: 75px;
    }
  }

  .nav {
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &__list {
      display: flex;
      align-items: center;
    }

    &__item {
      margin: 1rem;
      list-style-type: none;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
