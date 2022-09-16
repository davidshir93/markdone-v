<template>
  <div class="about">
    <HeaderTitle title="About Markdone" />
    <p>
      Markdone is a web application that allows you to create and keep track of
      your goals in a minimalistic manner.
    </p>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "AboutView",
  components: { HeaderTitle },
};
</script>

<style scoped>
p {
  line-height: 1.66rem;
}
</style>
