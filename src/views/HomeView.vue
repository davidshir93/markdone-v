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

const now = new Date();
const locale = navigator.language;

export default {
  name: "HomeView",
  components: { HeaderTitle, ButtonHome, GoalsList },
  computed: {
    calcDayName() {
      const options = {
        weekday: "long",
      };
      return new Intl.DateTimeFormat(locale, options).format(now);
    },
    calcDateSubTitle() {
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      return new Intl.DateTimeFormat(locale, options).format(now);
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
