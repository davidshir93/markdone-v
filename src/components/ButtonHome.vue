<template>
  <div class="btn" @click="onClick">
    <font-awesome-icon v-if="icon" class="icon" :icon="['fa-solid', icon]" />
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "ButtonHome",
  props: {
    text: {
      type: String,
      default: "Click me!",
    },
    icon: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => console.log(`Anonymous btn clicked`),
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1.33rem;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  color: black;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  .icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    transform: rotate(0deg);
    transition: all 200ms ease-in-out;
  }
  &:hover {
    font-weight: 600;
    .icon {
      transform: rotate(-180deg);
    }
  }
  &:not(:last-child) {
    margin-right: 1.33rem;
  }
}
</style>
