<template>
  <div class="goals-filter-and-list">
    <div class="filter-container">
      <SortDropdown />
    </div>
    <transition-group name="list" appear>
      <div v-for="goal in goalsSorted" :key="goal.id" class="goal-container">
        <GoalItem :goal="goal" @goal-clicked="goalClicked"></GoalItem>
      </div>
    </transition-group>
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
    compareDate(a, b) {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    },
    compareCompleted(a, b) {
      if (a.goalValue - a.done > b.goalValue - b.done) {
        return -1;
      }
      if (a.goalValue - a.done < b.goalValue - b.done) {
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
          return [...this.getGoals].sort(this.compareDate);
        case "dueFirst":
          return [...this.getGoals].sort(this.compareCompleted);
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

.goals-filter-and-list {
  position: relative;
  overflow: hidden;
  .filter-container {
    display: flex;
    justify-content: center;
  }
}

// goals list transition

.list-enter-from {
  opacity: 0;
  transform: scale(0);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 350ms cubic-bezier(0.5, 0.01, 0.46, 1.08);
}
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}
.list-leave-active {
  transition: all 350ms cubic-bezier(0.5, 0.01, 0.46, 1.08);
  position: absolute;
}
.list-move {
  transition: all 350ms cubic-bezier(0.5, 0.01, 0.46, 1.08);
}
</style>
