import { createStore } from "vuex";

export default createStore({
  state: {
    goals: [],
    sortType: "alphabetic",
  },
  getters: {
    getGoals: (state) => state.goals,
    getSortType: (state) => state.sortType,
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
            icon: "fa-apple-whole",
            measuring: "grams",
            done: 55,
            goalValue: 125,
            goalFrequency: "day",
            color: "#2196f3",
          },
          {
            id: 2,
            name: "Go to the Gym",
            icon: "fa-dumbbell",
            measuring: "units",
            done: 1,
            goalValue: 4,
            goalFrequency: "week",
            color: "#4caf50",
          },
          {
            id: 3,
            name: "Meditate",
            icon: "fa-bell",
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
    setSortType(state, sortType) {
      state.sortType = sortType;
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
          icon: "fa-apple-whole",
          measuring: "grams",
          done: 55,
          goalValue: 125,
          goalFrequency: "day",
          color: "#2196f3",
        },
        {
          id: 2,
          name: "Go to the Gym",
          icon: "fa-dumbbell",
          measuring: "units",
          done: 1,
          goalValue: 4,
          goalFrequency: "week",
          color: "#4caf50",
        },
        {
          id: 3,
          name: "Meditate",
          icon: "fa-bell",
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
      this.state.goals.find((goal) => goal.id === id).done = updatedValue;
      commit("setGoals", newGoals);
    },
    changeSortType({ commit }, { sortType }) {
      commit("setSortType", sortType);
    },
  },
  modules: {},
});
