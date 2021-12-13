<template>
  <div class="description-planet">
    <div class="description-planet">
      <div class="container-img">
        <img :src="require('@/assets/' + image)" alt="earth" />
      </div>
      <div class="container-text">
        <h1>{{ planet.name }}</h1>
        <p>{{ description }}</p>

        <p>
          <span class="source">Source: </span
          ><a :href="source" target="_blank">Wikipédia</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  // props:{
  //   infoType:{
  //     infoType:String,
  //     required:true
  //   }
  // },

  data() {
    return {
      slugName: this.$route.params.slug,
      infoType: this.$route.params.infoType,
    };
  },

  computed: {
    planet() {
      //   var object =  store.planets.find(
      //   (planet) => planet.name == this.slugName
      // );

      // console.log(object)
      return store.planets.find((planet) => planet.slug == this.slugName);
    },

    image() {
      let res = null;
      if (this.infoType.includes("structure")) {
        res = this.planet.images.internal;
      } else if (this.infoType.includes("geology")) {
        res = this.planet.images.geology;
      } else {
        res = this.planet.images.planet;
      }

      return res;
    },

    description() {
      let res = null;
      if (this.infoType.includes("structure")) {
        res = this.planet.infos[1].content;
      } else if (this.infoType.includes("geology")) {
        res = this.planet.infos[2].content;
      } else {
        res = this.planet.infos[0].content;
      }

      return res;
    },

    source() {
      let res = null;
      if (this.infoType.includes("structure")) {
        res = this.planet.infos[1].source;
      } else if (this.infoType.includes("geology")) {
        res = this.planet.infos[2].source;
      } else {
        res = this.planet.infos[0].source;
      }

      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
.description-planet {
  // margin-top: 150px;
  display: flex;
  height: 100%;
  width: 100%;
  // border: 2px solid;

  .container-img {
    width: 70%;
    // border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;

    img {
      transform: scale(0.8);
      // border: 2px solid;
    }
  }
  .container-text {
    width: 30%;
    * {
      text-align: left;
    }

    a,
    p {
      color: rgb(192, 192, 209);
    }
    .source {
      color: rgb(58, 56, 56);
    }
  }
}
</style>
