<template>
  <div>
    <select
      name="sortType"
      id="sortType"
      selected="getSortType"
      @input="handleSelectSortType"
    >
      <option value="alphabetic">Alphabetic</option>
      <option value="dateAdded">Date Added</option>
      <option value="dueFirst">Due First</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SortDropdown",
  methods: {
    ...mapActions(["changeSortType"]),
    handleSelectSortType(event) {
      const sortType = event.target.value;
      this.changeSortType({ sortType });
    },
  },
  computed: {
    ...mapGetters(["getSortType"]),
  },
};
</script>

<style lang="scss" scoped>
select {
  padding: 0.33rem;
  margin-bottom: 1rem;
}
</style>
