<template>
  <div class="goal" @click="goalClicked" :class="[completed && 'completed']">
    <input
      type="range"
      min="0"
      :value="goal.done"
      :max="goal.goalValue"
      id="slider"
      :style="sliderBackground"
      @input="(event) => handleSlideChange(event, goal.id)"
    />
    <div class="goalElementsContainer" :class="[completed && 'completed']">
      <div class="goalName">
        <!-- Add the style and icon you want using the String format -->
        <font-awesome-icon class="icon" :icon="['fa-solid', goal.icon]" />

        <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
        <h2>{{ goal.name }}</h2>
      </div>
      <div class="goalDetails">
        <h2>{{ goal.done }}</h2>
        <p class="caption">
          {{ goal.goalValue }} {{ goal.measuring }} / {{ goal.goalFrequency }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    goal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    completed() {
      return Number(this.goal.done) >= Number(this.goal.goalValue);
    },
    sliderBackground() {
      const position = (this.goal.done / this.goal.goalValue) * 100;
      if (this.completed) {
        return { background: "greenyellow" };
      }
      return {
        background: `linear-gradient(90deg, ${this.goal.color} ${position}%, #DADADA ${position}%)`,
      };
    },
  },
  methods: {
    ...mapActions(["changeGoalDone"]),
    goalClicked() {
      // this.$emit("goal-clicked", this.goal.id);
      // console.log("goal with id " + this.goal.id + " clicked");
    },
    handleSlideChange(event, id) {
      const updatedValue = event.target.value;
      this.changeGoalDone({ id, updatedValue });
    },
  },
  emits: ["goal-clicked"],
};
</script>

<style lang="scss" scoped>
.goal {
  background-color: rgb(238, 187, 255);
  border-radius: 16px;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: 1.33rem;
  position: relative;
  transition: all 550ms cubic-bezier(0, 0.17, 0.23, 1);
  width: 100%;

  .goalElementsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(238, 187, 255);
    border-radius: 16px;
    padding: 1.33rem;
    transition: all 550ms cubic-bezier(0, 0.17, 0.23, 1);
    pointer-events: none !important;
    .icon {
      margin-right: 1rem;
    }
    .goalName {
      display: inline-block;
      display: flex;
      align-items: center;
      z-index: 1;

      h2 {
        display: inline-block;
      }
    }
    &.completed {
      background-color: rgb(170, 255, 139);
      .goalName h2::after {
        content: " ✓";
        pointer-events: none;
      }
    }

    .goalDetails {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 6rem;
      z-index: 1;
      h2 {
        margin-bottom: 0;
        margin-top: 0;
      }
      p {
        margin-top: 0.33rem;
        margin-bottom: 0;
      }
    }
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    overflow: hidden;
    border-radius: 1rem;
    margin: 0;
    transition: all 550ms cubic-bezier(0, 0.17, 0.23, 1);
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    // animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    /* background: linear-gradient(90deg, greenyellow 50%, white 50%); */
    border-radius: 16px;
    z-index: 0;
    transition: all 550ms cubic-bezier(0, 0.17, 0.23, 1);
  }

  // .completed input[type="range"]::-webkit-slider-runnable-track {
  //   background-color: greenyellow;
  // }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 1px 1px 1px #828282;
    height: 50px;
    width: 0.1rem;
    border-radius: 16px;
    background: #dadada;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #828282;
    height: 100%;
    width: 150px;
    border-radius: 16px;
    background: #dadada;
    cursor: pointer;
    -webkit-appearance: none;
    opacity: 0;
  }

  .completed {
    input {
      background-color: greenyellow !important;
    }
  }
}
</style>
