<template>
  <header>
    <div class="container-logo">
      <span class="logo">The planets</span>
    </div>
    <div id="nav">
      <div class="container-routerLink">
        <router-link class="router-link" to="/"> Home</router-link>
        <router-link
          v-for="planet in planets"
          class="router-link"
          :key="planet.name"
          :to="{ name: 'Description-planet', params: { slug: planet.slug, infoType:'overview'} }"
        >
          {{ planet.name }}</router-link
        >
      </div>
    </div>
  </header>
  <router-view :key="$route.path" />
</template>

<script>
import store from "./store";

export default {
  data() {
    return {
      planets: store.planets,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: rgb(9,8,39);
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    display: flex;
    position: absolute;
    top: 0;
    z-index: 3;
    width: 100vw;
    border-bottom: 1px solid rgb(226, 223, 223);
    // padding: 20px;
    .container-logo {
      display: flex;
      padding: 20px;
      width: 50%;
      .logo {
        font-size: 20px;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
      }
    }

    #nav {
      padding: 20px;
      // border: 2px solid;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      .container-routerLink {
        flex: 1;
        color: black;
        display: flex;
        width: 60%;
        justify-content: space-evenly;
        // border: 2px solid green;
        // padding: 20px;
        .router-link{
          text-decoration: none;
          color: rgb(201, 195, 195);
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
