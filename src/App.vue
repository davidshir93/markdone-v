<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/newGoal">New Goal</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script>
export default {
  beforeMount() {
    this.$store.commit("initState");
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  font-size: 18px;
}

h1 {
  font-size: 2rem;
  text-align: center;
}

h2 {
  font-size: 1.33rem;
}

.caption {
  font-size: 0.66rem;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 820px;
  margin: 0.66rem;
  overflow-x: hidden !important;
  padding: 1.33rem;
  background-color: white;
  border-radius: 1.33rem;
  width: 100%;
}

/* On screens that are 870px or less */
@media screen and (max-width: 870px) {
  * {
    font-size: 16px;
  }
  #app {
    max-width: 640px !important;
  }
}

@media screen and (max-width: 500px) {
  * {
    font-size: 14px;
  }
  #app {
    max-width: 100%;
  }
}

@media screen and (max-width: 330px) {
  * {
    font-size: 14px;
  }
  #app {
    /* display: none; */
    padding: 0;
  }
  #app::before {
    content: "Please give me more space...";
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
    z-index: 100;
  }
}
</style>
