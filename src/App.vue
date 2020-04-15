<template>
  <div class="main">
    <div class="main__top">
      <div class="nav">
        <ul class="nav__list">
          <router-link tag="li" class="nav__item" to="/">Home</router-link>
          <div class="nav__item-separator">|</div>
          <router-link class="nav__item" to="/work">Work</router-link>
          <div class="nav__item-separator">|</div>
          <router-link class="nav__item" to="/skills">Skills</router-link>
        </ul>
      </div>

      <div class="main__logo">
        <img src="../public/rm_logo.png" alt="logo" class="main__logo--image" />
      </div>
    </div>

    <div class="main__content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
.main {
  &__top {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 10rem;
    background-color: #fafafa;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;

    &--image {
      width: 75px;
      height: 75px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;

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
