<template>
  <div class="page">
    <div class="new-goal">
      <HeaderTitle title="Add a new goal"></HeaderTitle>
      <CreateGoalForm></CreateGoalForm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTitle from "@/components/HeaderTitle.vue";
import CreateGoalForm from "@/components/CreateGoalForm.vue";

import { mapActions } from "vuex";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "HomeView",
  components: { HeaderTitle, CreateGoalForm },
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

<style lang="scss" scoped></style>
