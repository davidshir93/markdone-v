<template>
  <div class="btn" @click="onClick">
    <img v-if="iconSrc" :src="iconSrc" />
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
    iconSrc: {
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
  border-radius: 1.33rem;
  background: paleturquoise;
  padding: 1.33rem;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.33rem;
  }
}
</style>
