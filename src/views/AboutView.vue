<template>
  <div class="about">
    <HeaderTitle title="This is the about page" />
    <p>This project was made by David Shir</p>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "AboutView",
  components: { HeaderTitle },
};
</script>

<style scoped></style>
