<template>
  <div id="app">
    <SearchInput :value="value" @input="changeValue" />
    {{ value }}
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  name: "App",
  data: () => ({ value: "" }),
  components: {
    SearchInput,
  },
  methods: {
    changeValue(val) {
      this.value = val;
    },
  },
};
</script>

<style>
</style>
