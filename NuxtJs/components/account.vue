<template>
  <div>{{ this.name }}</div>
</template>
<script>
export default {
  data() {
    return {
      name: []
    };
  },
  methods: {},
  async beforeMount() {
    await this.$axios.$get("http://localhost:5000/account").then(result => {
      let array = [];
      array.push(...result);
      for (let index = 0; index < array.length; index++) {
        this.name.push(array[index].firstname);
      }
      console.log(...this.name);
    });
  }
};
</script>
<style></style>
