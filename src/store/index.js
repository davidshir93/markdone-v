import { createStore } from "vuex";

export default createStore({
  state: {
    goals: [],
  },
  getters: {
    getGoals: (state) => state.goals,
  },
  mutations: {
    initState(state) {
      if (localStorage.getItem("goals")) {
        state.goals = JSON.parse(localStorage.getItem("goals"));
      } else {
        state.goals = [
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
      }
    },
    setGoals(state, goals) {
      state.goals = goals;
    },
  },
  actions: {
    deleteGoal({ commit }, id) {
      const newGoals = this.state.goals.filter((goal) => goal.id !== id);
      // this.setGoals(newGoals);
      commit("setGoals", newGoals);
    },
    resetState({ commit }) {
      const initialGoals = [
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
      commit("setGoals", initialGoals);
    },
    addNewGoal({ commit }, newGoal) {
      commit("setGoals", [newGoal, ...this.state.goals]);
    },
    changeGoalDone({ commit }, { id, updatedValue }) {
      const newGoals = this.state.goals;
      newGoals.find((goal) => goal.id === id).done = updatedValue;
      commit("setGoals", newGoals);
    },
  },
  modules: {},
});
