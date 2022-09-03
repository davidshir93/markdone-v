<template>
  <div class="page">
    <div class="home">
      <HeaderTitle :title="calcDayName" :subtitle="calcDateSubTitle" />
      <GoalsList />
      <div class="bottom-menu">
        <router-link to="/newGoal" style="text-decoration: none">
          <ButtonHome text="Add new goal" icon="fa-plus-circle" />
        </router-link>
        <ButtonHome
          text="Reset to initial state"
          icon="fa-undo-alt"
          @click="handleResetState"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonHome from "@/components/ButtonHome.vue";
import GoalsList from "@/components/GoalsList.vue";

import { mapActions } from "vuex";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default {
  name: "HomeView",
  components: { HeaderTitle, ButtonHome, GoalsList },
  computed: {
    calcDayName() {
      let today = new Date();
      return days[today.getDay()];
    },
    calcDateSubTitle() {
      let today = new Date();
      return (
        today.toLocaleString("en-US", { day: "2-digit" }) +
        " " +
        today.toLocaleString("en-US", { month: "short" }) +
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
