<template>
  <div class="main-container">
    <!-- <div class="description-planet">
      <div class="container-img">
        <img :src="require('@/assets/' + planet.images.planet)" alt="earth" />
      </div>
      <div class="container-text">
        <h1>{{ planet.name }}</h1>
        <p>{{ planet.infos[0].content }}</p>

        <p>
          <span class="source">Source:   </span
          ><a :href="planet.infos[0].source" target="_blank">Wikipédia</a>
        </p>

      </div>
    </div> -->
    <div class="router-link-children-container">
      <router-link
        class="router-link"
        :to="{
          name: 'Description-planet',
          params: { slug: planet.slug, infoType: 'overview' },
        }"
        ><span>01</span> overview</router-link
      >
      <router-link
        class="router-link"
        :to="{
          name: 'Description-planet',
          params: { slug: planet.slug, infoType: 'internal-structure' },
        }"
        ><span>02</span> Internal structure</router-link
      >
      <router-link
        class="router-link"
        :to="{
          name: 'Description-planet',
          params: { slug: planet.slug, infoType: 'surface-geology' },
        }"
        ><span>03</span> Surface geology</router-link
      >
    </div>
    <router-view :key="$route.path" />
    <div class="footer-infos">
      <div class="details-numbers">
        <span>Rotation time</span>
        <p>{{ planet.rotation }}</p>
      </div>
      <div class="details-numbers">
        <span>Revolution time</span>
        <p>{{ planet.revolution }}</p>
      </div>
      <div class="details-numbers">
        <span>Radius</span>
        <p>{{ planet.radius }}</p>
      </div>
      <div class="details-numbers">
        <span>Average temp</span>
        <p>{{ planet.temperature }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      slugName: this.$route.params.slug,

    };
  },
  computed: {
    planet() {
      return store.planets.find((planet) => planet.slug == this.slugName);
    },

  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;

  min-height: 70vh;

  width: 80vw;
  position: relative;
  z-index: 2;

  .router-link-children-container {
    position: absolute;
    bottom: 150px;
    right: 0;
    z-index: 4;
    width: 23.5vw;
    height: 100px;
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .router-link {
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-transform: uppercase;
      font-size: 12px;

      height: 25%;
      width: 100%;
      border: 1px solid rgb(63, 63, 89);
    }
    .router-link-exact-active{
        background-color: rgb(109, 46, 213);
    }
    span {
    color: gray;
    padding-right: 5px;
    padding-left: 5px;
    }

  }
  .footer-infos {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 0;

    .details-numbers {
      height: 90%;
      width: 20%;
      border: 1px solid rgb(63, 63, 89);
      text-align: left;
      padding: 10px;

      span,
      p {
        text-align: left;
        text-transform: uppercase;
      }
      span {
        color: rgb(108, 108, 132);
        font-size: 13px;
        font-weight: bold;
      }
      p {
        color: white;
        font-size: 30px;
        margin: 2px 0;
      }
    }
  }
}
</style>
