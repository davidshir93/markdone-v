<template>
  <div class="goals-filter-and-list">
    <SortDropdown />
    <div v-for="goal in goalsSorted" :key="goal.id" class="goal-container">
      <GoalItem :goal="goal" @goal-clicked="goalClicked"></GoalItem>
    </div>
  </div>
</template>

<script>
import GoalItem from "./GoalItem.vue";
import SortDropdown from "./SortDropdown.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GoalsList",
  components: { GoalItem, SortDropdown },
  methods: {
    ...mapActions(["deleteGoal"]),
    goalClicked(id) {
      console.log("deleting goal with the id: " + id);
      this.deleteGoal(id);
    },
    compareAlphabetic(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    },
  },
  computed: {
    ...mapGetters(["getGoals", "getSortType"]),
    goalsSorted() {
      switch (this.getSortType) {
        case "alphabetic":
          return [...this.getGoals].sort(this.compareAlphabetic);
        case "dateAdded":
          return this.getGoals;
        case "dueFirst":
          return this.getGoals;
        default:
          return this.getGoals;
      }
    },
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
