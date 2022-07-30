<template>
  <div class="home">
    <HeaderTitle :title="calcDateTitle"></HeaderTitle>
    <GoalsList></GoalsList>
    <div class="bottom-menu">
      <ButtonHome text="Add new goal"></ButtonHome>
      <ButtonHome
        text="Reset to initial state"
        @click="handleResetState"
      ></ButtonHome>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonHome from "@/components/ButtonHome.vue";
import GoalsList from "@/components/GoalsList.vue";

import { mapActions } from "vuex";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "HomeView",
  components: { HeaderTitle, ButtonHome, GoalsList },
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
  methods: {
    ...mapActions(["resetState"]),
    handleResetState() {
      this.resetState();
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
