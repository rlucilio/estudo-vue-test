<template>
  <main class="input">
    <input
      type="text"
      placeholder="Digite o valor"
      v-model="searchValue"
      class="input__field"
    />
    <button @click="clearInput" class="input__btn">X</button>
  </main>
</template>

<script>
export default {
  name: "search-input",
  props: {
    value: {
      required: true,
      type: String,
    },
  },
  computed: {
    searchValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    clearInput() {
      this.$emit("input", "");
    },
  },
};
</script>

<style scoped>
.input {
  width: fit-content;
  background: #e7e7e7;
  padding: 8px;
  border-radius: 6%;
  box-shadow: 1px 1px 6px 0px #b3b3b3;
}
.input .input__field {
  background: none;
  outline: none;
  border: none;
  margin-right: 8px;
}

.input .input__btn {
  background: none;
  color: red;
  border: none;
  outline: none;
}
</style>