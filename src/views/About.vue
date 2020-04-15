<template>
  <div class="application">
    <div class="skills">
      <div class="skills__profile">
        <div class="skills__profile--title">
          Technical Skills
        </div>
        <ul class="skills__profile-list">
          <li class="skills__profile-item">
            Three years of experience with JavaScript frameworks like
            <span class="skills__profile--vue">Vue</span> and
            <span class="skills__profile--react">React</span>
          </li>

          <li class="skills__profile-item">
            Three years of experience with relational databases such as
            <span class="skills__profile--my">My</span
            ><span class="skills__profile--sql">SQL</span> and
            <span class="skills__profile--postgres">PostgreSQL</span>
          </li>

          <li class="skills__profile-item">
            Three years of unit/integration/e2e testing experience using
            <span class="skills__profile--jest">Jest</span>,
            <span class="skills__profile--mocha">Mocha</span> and
            <span class="skills__profile--puppeteer">Puppeteer</span>
          </li>

          <li class="skills__profile-item">
            Hands-on experience spinning up
            <span class="skills__profile--docker">Docker</span>
            containers and setting up
            <span class="skills__profile--circleci">CircleCI</span>
          </li>

          <li class="skills__profile-item">
            Hands-on experience with deployement on
            <span class="skills__profile--heroku">Heroku</span>
            and
            <span class="skills__profile--aws">AWS</span>
          </li>

          <li class="skills__profile-item">
            Solid grasp of object-oriented programming principles and patterns
            using
            <span class="skills__profile--java">Java</span>
          </li>
        </ul>
      </div>
      <div class="skills__work-experience"></div>
      <div class="skills__concepts"></div>
      <div class="skills__currently-learning"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.application {
  height: 100vh;
}

.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  @include center-card;

  &__profile {
    &-list {
      margin-left: 1.3rem;
    }
    &-item {
      margin-top: 0.5rem;
      text-align: justify;
    }
    &--title {
      font-weight: bold;
    }
    &--vue {
      color: #41b883;
    }
    &--react {
      color: #61dafb;
    }
    &--my {
      color: #00758f;
    }
    &--sql {
      color: #f29110;
    }
    &--postgres {
      color: #326690;
    }
    &--jest {
      color: #99425b;
    }
    &--mocha {
      color: #8d6748;
    }
    &--puppeteer {
      color: #01d8a2;
    }
    &--docker {
      color: #2396ed;
    }
    &--circleci {
      color: #343433;
    }
    &--heroku {
      color: #6762a6;
    }
    &--aws {
      color: #f68d12;
    }
    &--java {
      color: #f72529;
    }
  }
}
</style>
