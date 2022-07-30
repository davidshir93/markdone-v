<template>
  <div v-for="goal in goals" :key="goal.id" class="goal-container">
    <GoalItem :goal="goal" @goal-clicked="goalClicked"></GoalItem>
  </div>
</template>

<script>
import GoalItem from "./GoalItem.vue";

export default {
  name: "GoalsList",
  components: { GoalItem },
  props: {
    goals: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goalClicked(id) {
      this.$emit("goal-clicked", id);
    },
  },
  emits: ["goal-clicked"],
};
</script>

<style lang="scss" scoped>
.goal-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
