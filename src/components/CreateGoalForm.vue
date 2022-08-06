<template>
  <form @submit.prevent="handleSubmit">
    <div class="firstRowLabels">
      <label class="name">Goal Name:</label>
    </div>
    <div
      class="error"
      :style="{
        transform: nameError !== '' ? 'scaleY(1)' : 'scaleY(0)',
      }"
    >
      {{ nameError }}
    </div>
    <div class="row row-1">
      <input
        type="textbox"
        name="name"
        :value="name"
        @input="handleNameChange"
        placeholder="Goal Name"
      />
    </div>
    <div class="secRowLabels">
      <div class="do">
        <label>Do:</label>
        <div
          class="error"
          :style="{
            transform: goalValueError !== '' ? 'scaleY(1)' : 'scaleY(0)',
          }"
        >
          {{ goalValueError }}
        </div>
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
        <!-- <div
          v-for="color in colorsList"
          :key="color"
          :class="['color', isSelectedColor(color) && 'selected']"
          :style="{ 'background-color': color }"
          @click="handleColorClick(color)"
        ></div> -->
      </div>
    </div>
    <input type="submit" name="Add" :style="{ cursor: 'pointer' }" />
    <!-- <p onClick={toggleShowForm} style={{ cursor: 'pointer' }}>
				Cancel
			</p> -->
  </form>
</template>

<script>
import { mapActions } from "vuex";

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
    };
  },
  methods: {
    ...mapActions(["addNewGoal"]),
    handleNameChange(event) {
      this.name = event.target.value;
    },
    handleIconNameChange(event) {
      this.name = event.target.value;
    },
    handleMeasurementChange(event) {
      this.measurement = event.target.value;
    },
    handleGoalValueChange(event) {
      this.goalValue = event.target.value;
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
  label {
    // margin-top: 24px;
  }

  .secRowLabels,
  .thirdRowLabels {
    width: 100%;
    display: flex;
  }

  .do {
    /* flex-basis: 2; */
    flex-grow: 0.725;
  }

  .per {
    flex-flow: 1;
    /* flex-basis: 1; */
  }

  .icon {
    flex-grow: 0.55;
  }

  .row {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
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
    margin-top: 1.33rem;
  }

  input[type="submit"] {
    margin-top: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  p {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
}

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
      // background-color: rgb(255, 252, 159);
      border: 1px solid black;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 1rem 2rem -0.5rem,
        rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem -0.5rem;
      transform: scale(1.1);
    }
    &.selected {
      // background-color: rgb(255, 252, 159);
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
        // background-color: rgb(255, 252, 159);
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
</style>
