<template>
  <div class="goal" :class="[completed && 'completed']" @click="goalClicked">
    <!-- Add the style and icon you want using the String format -->
    <font-awesome-icon class="icon" icon="fa-solid fa-user-secret" />
    <h2>{{ goal.name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    goal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    completed() {
      return this.goal.done >= this.goal.goalValue;
    },
  },
  methods: {
    goalClicked() {
      this.$emit("goal-clicked", this.goal.id);
    },
  },
  emits: ["goal-clicked"],
};
</script>

<style lang="scss" scoped>
.goal {
  border-radius: 1rem;
  margin-bottom: 1.33rem;
  position: relative;
  background-color: rgb(238, 187, 255);
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 1.33rem;
  transition: all 550ms cubic-bezier(0, 0.17, 0.23, 1);
  // pointer-events: none;
  width: 100%;
  .icon {
    margin-right: 1rem;
  }
  &.completed {
    background-color: rgb(170, 255, 139);
  }
}
</style>
