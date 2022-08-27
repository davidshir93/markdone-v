<template>
  <form @submit.prevent="handleSubmit">
    <div class="firstRowLabels">
      <label class="name">Goal Name:</label>
      <transition name="fade">
        <div v-if="nameError" :class="['error', this.isNudge ? 'nudge' : '']">
          {{ nameError }}
        </div>
      </transition>
    </div>
    <div class="row row-1">
      <input
        type="textbox"
        name="name"
        :class="this.nameError && 'input-error'"
        :value="name"
        @input="handleNameChange"
        placeholder="Goal Name"
      />
    </div>
    <div class="secRowLabels">
      <div class="do">
        <label>Do:</label>
        <transition name="fade">
          <div
            v-if="goalValueError"
            :class="['error', this.isNudge ? 'nudge' : '']"
          >
            {{ goalValueError }}
          </div>
        </transition>
      </div>
      <div class="per">
        <label>Per:</label>
      </div>
    </div>
    <div class="row row-2">
      <input
        name="goalValue"
        id="goalValue"
        type="number"
        :value="goalValue"
        :class="this.goalValueError && 'input-error'"
        @input="handleGoalValueChange"
        placeholder="Choose Goal Value"
      />
      <select
        name="measurement"
        :value="measurement"
        id="measurement"
        selected="Times"
        @input="handleMeasurementChange"
      >
        <option value="Times">Times</option>
        <option value="Minutes">Minutes</option>
        <option value="Hours">Hours</option>
        <option value="Steps">Steps</option>
        <option value="Units">Units</option>
      </select>
      <select
        name="frequency"
        :value="frequency"
        id="frequency"
        selected="Day"
        @input="handleFrequencyChange"
      >
        <option value="Day">Day</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
      </select>
    </div>
    <div class="thirdRowLabels">
      <label class="icon">Icon:</label>
      <label class="color">Color:</label>
    </div>
    <div class="row row-3">
      <div class="icon-picker-container">
        <div
          v-for="icon in iconsList"
          :class="['icon', isSelectedIcon(icon) && 'selected']"
          :key="icon"
          @click="handleIconClick(icon)"
        >
          <font-awesome-icon :icon="['fa-solid', icon]" />
        </div>
      </div>
      <div class="color-picker-container">
        <div v-for="color in colorsList" :key="color" class="color-container">
          <div
            :class="['color', isSelectedColor(color) && 'selected']"
            :style="{ 'background-color': color }"
            @click="handleColorClick(color)"
          ></div>
        </div>
      </div>
    </div>
    <input
      type="submit"
      name="Add"
      :class="errorsExist && 'disabled'"
      :style="{ cursor: 'pointer' }"
    />
    <router-link class="cancel-btn-container" to="/">
      <button class="cancel-btn">Cancel</button>
    </router-link>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router";

export default {
  name: "CreateGoalForm",
  data() {
    return {
      iconsList: [
        "fa-user-secret",
        "fa-address-card",
        "fa-anchor",
        "fa-apple-whole",
        "fa-arrow-up",
        "fa-atom",
        "fa-ban",
        "fa-ban-smoking",
        "fa-basketball",
        "fa-bath",
        "fa-bell",
        "fa-bed",
        "fa-bicycle",
        "fa-book-open",
        "fa-bowl-rice",
        "fa-brain",
      ],
      colorsList: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#607d8b",
      ],
      name: "",
      iconName: "fa-bullseye",
      measurement: "Times",
      goalValue: "",
      frequency: "Day",
      color: "#607d8b",
      nameError: "",
      goalValueError: "",
      isNudge: false,
    };
  },
  computed: {
    ...mapGetters(["getGoals"]),
    namesExist() {
      let names = [];
      this.getGoals.forEach((goal) => names.push(goal.name.toLowerCase()));
      return names;
    },
    errorsExist() {
      return this.nameError || this.goalValueError;
    },
  },
  methods: {
    ...mapActions(["addNewGoal"]),
    handleNameChange(event) {
      this.name = event.target.value;
      if (this.namesExist.includes(this.name.toLowerCase())) {
        this.nameError = "Name is already exists";
      } else {
        this.nameError = "";
      }
    },
    handleIconNameChange(event) {
      this.name = event.target.value;
    },
    handleMeasurementChange(event) {
      this.measurement = event.target.value;
    },
    handleGoalValueChange(event) {
      this.goalValue = event.target.value;
      if (this.goalValue < 1) {
        this.goalValueError = "Please choose a positive value";
      } else {
        this.goalValueError = "";
      }
    },
    handleFrequencyChange(event) {
      this.frequency = event.target.value;
    },
    handleIconClick(icon) {
      this.iconName = icon;
    },
    handleColorClick(color) {
      this.color = color;
    },
    isSelectedIcon(icon) {
      return this.iconName === icon;
    },
    isSelectedColor(color) {
      return this.color === color;
    },
    handleSubmit() {
      if (!this.errorsExist) {
        const newGoal = {
          id: Date.now(),
          name: this.name,
          icon: this.iconName,
          done: 0,
          measuring: this.measurement,
          goalValue: this.goalValue,
          goalFrequency: this.frequency,
          color: this.color,
        };
        this.addNewGoal(newGoal);
        router.push("/");
      } else {
        this.isNudge = true;
        setTimeout(() => {
          this.isNudge = false;
        }, 600);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .firstRowLabels {
    position: relative;
    width: 100%;
  }
  .secRowLabels,
  .thirdRowLabels {
    width: 100%;
    display: flex;
  }

  .do {
    flex-grow: 0.725;
    position: relative;
  }

  .per {
    flex-flow: 1;
  }

  .icon {
    flex-grow: 0.55;
  }

  .row {
    width: 100%;
    display: flex;
    margin-bottom: 3rem;
    position: relative;
  }

  .row-3 {
    .icon-picker-container {
      display: flex;
      width: 50%;
      flex-flow: row wrap;
      margin-right: 2rem;
      .icon {
        padding: 0.33rem;
        margin: 0.33rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        max-width: 2rem;
        width: 1.66rem;
        height: 1.66rem;
        transition: all 150ms ease-in-out;
        &:hover {
          border: 1px solid black;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 1rem 2rem -0.5rem,
            rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem -0.5rem;
          transform: scale(1.1);
        }
        &.selected {
          border: 1px solid black;
        }
      }
    }

    .color-picker-container {
      display: flex;
      width: 50%;
      flex-flow: row wrap;
      .color-container {
        padding: 0.33rem;
        margin: 0.33rem;
        border-radius: 2rem;
        max-width: 1.66rem;
        width: 1.66rem;
        height: 1.66rem;
        .color {
          max-width: 1.66rem;
          width: 1.66rem;
          height: 1.66rem;
          margin: 0.33rem;
          border-radius: 1rem;
          border: 1px solid white;
          transition: all 150ms ease-in-out;
          &.selected {
            border: 1px solid black;
          }
          &:hover {
            border: 1px solid black;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 1rem 2rem -0.5rem,
              rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem -0.5rem;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .row-2 input:not(:last-child),
  .row-2 select:not(:last-child),
  .row-3 input:not(:last-child) {
    margin-right: 1.33rem;
  }

  input,
  select {
    border-radius: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.33rem;
    margin-top: 1rem;
    font-weight: 600;
  }

  input[type="submit"] {
    margin-top: 1rem;
    height: 3rem;
    padding: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  p {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .cancel-btn-container {
    width: 100%;
    .cancel-btn {
      margin-top: 1rem;
      width: 100%;
      text-align: center;
      background-color: white;
      color: black;
      border-radius: 1rem;
      height: 2rem;
      cursor: pointer;
    }
  }
}

.error {
  color: red;
  position: absolute;
  top: 6.5rem;
  left: 0;
}
.input-error {
  border-color: red !important;
}

.disabled {
  cursor: not-allowed !important;
  background-color: gray !important;
}

// Animation classes
.fade-enter-active {
  transition: all 200ms ease-in-out;
}

.fade-leave-active {
  transition: all 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(12px);
  opacity: 0;
}

@keyframes nudge {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(20px);
  }
  45% {
    transform: translateX(-16px);
  }
  52% {
    transform: translateX(10px);
  }
  55% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(2px);
  }
  61% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}

.nudge {
  animation: nudge 500ms ease-in-out forwards;
}
</style>
