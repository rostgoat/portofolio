<template>
  <div class="application">
    <header class="profile">
      <div class="profile__title-container">
        <div class="profile__title">
          Rost Myshkin
        </div>
      </div>
      <div class="profile__details">
        <p>
          Hi! My name is Rost and I am a Full Stack Software Developer from
          Vancouver, BC
          <i
            class="em em-flag-ca profile__details-location--icon"
            aria-role="presentation"
            aria-label="Canada Flag"
          ></i
          >. I am a graduate of British Columbia Institute of Technology with a
          Diploma of Computer Systems Technlogy. I design and build websites and
          various applications.
        </p>
        <br />
        <p>
          Do you need help on a project and want to get in touch?
          <i
            class="em em-rocket profile__details-location--icon"
            aria-role="presentation"
            aria-label="Canada Flag"
          ></i>
        </p>
      </div>
      <div class="profile__social-links">
        <div class="profile__social-links-item">
          <a href="https://www.linkedin.com/in/rostmyshkin/">
            <img
              class="profile__social-links-item--image"
              height="32"
              width="32"
              src="~@/assets/icons/linkedin.svg"
          /></a>
        </div>
        <div class="profile__social-links-item">
          <a href="https://github.com/rostgoat"
            ><img
              class="profile__social-links-item--image"
              height="32"
              width="32"
              src="~@/assets/icons/github.svg"
          /></a>
        </div>
        <div class="profile__social-links-item">
          <a href="mailto:rostmyshkin@gmail.com">
            <img
              class="profile__social-links-item--image"
              height="32"
              width="32"
              src="~@/assets/icons/gmail.svg"
          /></a>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class Home extends Vue {}
</script>

<style lang="scss">
.application {
  @include center-card;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20rem;
  width: 80%;

  &__title {
    text-transform: uppercase;
    font-size: 2.5rem;
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
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

    &-item {
      font-weight: 300;
      margin-bottom: 1rem;
    }
  }

  &__social-links {
    display: flex;
    justify-content: space-between;

    &-item {
      margin: 1rem;

      &--image {
        border-radius: 5px;
        filter: invert(98%) sepia(0%) saturate(1283%) hue-rotate(188deg)
          brightness(81%) contrast(113%);
      }
    }
  }
}
</style>
