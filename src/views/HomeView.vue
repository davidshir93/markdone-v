<template>
  <div class="home">
    <HeaderTitle :title="calcDateTitle"></HeaderTitle>
    <GoalsList :goals="goals" @goal-clicked="handleGoalClicked"></GoalsList>
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
import GoalsList from "@/components/GoalsList.vue";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "HomeView",
  components: { HeaderTitle, ButtonHome, GoalsList },
  data() {
    return {
      goals: [],
    };
  },
  created() {
    this.goals = [
      {
        id: 1,
        name: "Eat Protein",
        icon: "fas fa-camera",
        measuring: "grams",
        done: 55,
        goalValue: 125,
        goalFrequency: "day",
        color: "#2196f3",
      },
      {
        id: 2,
        name: "Go to the Gym",
        icon: "fas fa-camera",
        measuring: "units",
        done: 1,
        goalValue: 4,
        goalFrequency: "week",
        color: "#4caf50",
      },
      {
        id: 3,
        name: "Meditate",
        icon: "fas fa-camera",
        measuring: "minutes",
        done: 10,
        goalValue: 10,
        goalFrequency: "day",
        color: "#ffeb3b",
      },
    ];
  },
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
    handleGoalClicked(id) {
      console.log(id);
      console.log("deleting goal with the id: " + id);
      this.goals = this.goals.filter((goal) => goal.id !== id);
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
