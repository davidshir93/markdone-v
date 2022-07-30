<template>
  <div v-for="goal in getGoals" :key="goal.id" class="goal-container">
    <GoalItem :goal="goal" @goal-clicked="goalClicked"></GoalItem>
  </div>
</template>

<script>
import GoalItem from "./GoalItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GoalsList",
  components: { GoalItem },
  methods: {
    ...mapActions(["deleteGoal"]),
    goalClicked(id) {
      // this.$emit("goal-clicked", id);
      console.log("deleting goal with the id: " + id);
      // this.goals = this.goals.filter((goal) => goal.id !== id);
      this.deleteGoal(id);
    },
  },
  computed: {
    ...mapGetters(["getGoals"]),
  },
};
</script>

<style lang="scss" scoped>
.goal-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
