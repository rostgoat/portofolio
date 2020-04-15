<template>
  <div class="application">
    <header class="work">
      <div class="work__project">
        <div class="work__project-title-container">
          <div class="work__project-title">
            Game Bible
          </div>
        </div>
        <div class="work__project-details">
          <div class="work__logo">
            <a href="https://game-bible.herokuapp.com/">
              <img
                class="work__projects-links-item--image"
                src="../../public/project_1_game_bible_logo.png"
                width="150"
              />
            </a>
          </div>

          <div class="work__description">
            <a href="https://game-bible.herokuapp.com/">
              Game Bible is a video game blog application developed in Vue.js
              and Nest.js using TypeScript. Users can create accounts, write
              blog posts, upload images and like other users' posts. Click on
              the post to view it live!</a
            >
            <br />
          </div>
        </div>
        <div class="work__project-links">
          <div class="work__project-links-item">
            <a href="https://github.com/rostgoat/ea-blog-api"
              ><img
                class="work__projects-links-item--image"
                height="32"
                width="32"
                src="~@/assets/icons/github.svg"
            /></a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.application {
  @include center-card;
}

.work {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20rem;
  width: 80%;

  &__logo {
    @media only screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__project {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;

    &-title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    &-details {
      display: flex;
      margin: 0.5rem;
      padding: 0.5rem;

      @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    }

    &-links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &-item {
        margin: 1rem;

        &--image {
          border-radius: 5px;
        }

        &--text {
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__description {
    text-align: justify;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
