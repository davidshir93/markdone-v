<template>
  <div class="home">
    <header-title :title="calcDateTitle"></header-title>
    <div class="bottom-menu">
      <ButtonHome text="Add new goal"></ButtonHome>
      <ButtonHome text="Reset to initial state"></ButtonHome>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonHome from "@/components/ButtonHome.vue";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "HomeView",
  components: { HeaderTitle, ButtonHome },
  computed: {
    calcDateTitle() {
      let today = new Date();
      return (
        days[today.getDay()] +
        ", " +
        today.toLocaleString("en-US", { day: "2-digit" }) +
        " " +
        today.toLocaleString("en-US", { month: "long" }) +
        " " +
        today.getFullYear()
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .bottom-menu {
    display: flex;
    justify-content: center;
  }
}
</style>
