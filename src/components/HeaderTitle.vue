<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h2 v-if="subtitle">&nbsp;| {{ subtitle }}</h2>
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
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.header {
  text-align: center;
  margin-top: 1.33rem;
}
h1 {
  margin: 0.33rem 0;
  text-align: center;
  display: inline-block;
}
h2 {
  text-align: center;
  margin: 0.33rem 0;
  display: inline-block;
}
</style>
