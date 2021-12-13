<template>
  <div class="home">
    <div class="mainContent">
      <div class="container-img">

      </div>
      <div class="container-text">
        <h1>{{planet.name}}</h1>
        <p>{{planet.infos[0].content}}</p>

        <p><span class="source">Source:</span><a :href="planet.infos[0].source" target="_blank">Wikipédia</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Home",
  props:{
    slug:String
  },
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
.home {
  background-color: rgb(9, 8, 39);
  min-height: 100vh;
  height: fit-content;
  width: 100vw; 
}
</style>
