<template>
  <div>
    <el-container>
      <el-main class="profile">
        <el-card class="profile__card">
          <div class="profile__top">
            <img
              src="@/assets/handsome_grandson.jpg"
              class="profile__top-image"
            />
          </div>
          <div class="profile__details">
            <div class="profile__details-name profile__details-item">
              Rost Myshkin
            </div>
            <div class="profile__details-profession profile__details-item">
              Full-Stack Developer
            </div>
            <div class="profile__details-location profile__details-item">
              Vancouver, BC
              <i
                class="em em-flag-ca profile__details-location--icon"
                aria-role="presentation"
                aria-label="Canada Flag"
              ></i>
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;
  justify-content: center;

  &__top {
    margin-top: 1rem;

    &-image {
      width: 16rem;
      height: 16rem;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
    }
  }
  &__card {
    width: 50%;
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &__details {
    margin: 1rem;

    &-name {
      color: #4a4e69;
      font-size: 2rem;
    }

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
}
.projects {
  background-color: #cccccc;
}
</style>
