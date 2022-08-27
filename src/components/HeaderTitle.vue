<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
      default: "Hello world",
    },
  },
};
</script>

<style>
h1 {
  margin-bottom: 0.5rem;
}
</style>
