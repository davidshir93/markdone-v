<template>
  <div class="hamburger">
    🍔
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/newGoal">New Goal</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
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
  height: calc(100vh - 2.33rem);
  position: relative;
}

.hamburger {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
  width: 100%;
  display: inline-block;
  z-index: 1;
  background: none;
  padding: 1rem;

  nav {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left center;
    display: inline;
    margin-left: 1rem;
    width: 100%;
    transition: all 250ms cubic-bezier(0, 0.17, 0.23, 1) 100ms;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
    a:not(:last-child) {
      margin-right: 0.33rem;
    }
    a:not(:first-child) {
      margin-left: 0.33rem;
    }
  }
  &:hover {
    nav {
      transform: scaleX(1);
      opacity: 1;
    }
  }
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

// Animation classes
.fade-enter-active {
  transition: all 200ms ease-in-out;
}

.fade-leave-active {
  transition: all 150ms ease-in-out;
}

.fade-enter-from {
  transform: translateX(10rem);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(-10rem);
  opacity: 0;
}
</style>
