<template>
  <div class="profile">
    <div class="profile__title">
      Rost <span class="profile__title--last">Myshkin</span>
    </div>
    <div class="profile__details">
      <p>
        Hi! My name is
        <span class="profile__details-name">Rost</span> and I am a Full-Stack
        Developer from Vancouver, BC
        <i
          class="em em-flag-ca profile__details-location--icon"
          aria-role="presentation"
          aria-label="Canada Flag"
        ></i
        >. I am a graduate of British Columbia Institute of Technology with a
        Diploma of Computer System Technlogy. I design and build websites. You
        can find me on
        <span class="profile__details--linkedin"
          ><a href="https://www.linkedin.com/in/rostmyshkin/">LinkedIn</a></span
        >.
      </p>

      <p>
        Do you need help on a project and want to get in touch?
        <span class="profile__details--contact"
          ><a href="mailto: rostmyshkin@gmail.com">Contact Me</a></span
        >.
        <i
          class="em em-rocket profile__details-location--icon"
          aria-role="presentation"
          aria-label="Canada Flag"
        ></i>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>

<style lang="scss">
.profile {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  &__title {
    font-size: 3rem;
    text-transform: uppercase;

    &--last {
      font-weight: bold;
      color: #9c3131;
    }
  }
  &__details {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: justify;

    &-profession {
      color: #6e7080;
      font-size: 1.2rem;
    }

    &-location {
      color: #949494;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &--icon {
        margin-left: 0.3rem;
        font-size: 0.75rem;
      }
    }

    &--linkedin {
      color: #6082f3;
      text-decoration: none;
      font-weight: bold;
    }

    &--contact {
      color: #4ec34a;
      text-decoration: none;
      font-weight: bold;
    }

    &-item {
      font-weight: 300;
      margin-bottom: 1rem;
    }
  }
}
</style>
