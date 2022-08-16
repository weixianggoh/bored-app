<template>
  <a-button type="primary" @click="getRandom">
    Next
  </a-button>
</template>

<script>
export default {
  methods: {
    getRandom() {
      this.$message.loading("getting bored? stay tune...", 5000);
      this.$axios
        .$get(`http://www.boredapi.com/api/activity/`)
        .then((result) => {
          console.log("result");
          console.log(result);
          this.$message.destroy();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
