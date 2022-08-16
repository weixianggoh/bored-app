<template>
  <div>
    <a-button type="primary" @click="getRandom">
      Next
    </a-button>
    <pre>
      {{ history }}
    </pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("history", ["history"]),
  },
  methods: {
    ...mapActions("history", ["addToHistory"]),
    getRandom() {
      this.$message.loading("getting bored? stay tune...", 5000);
      this.$axios
        .$get(`http://www.boredapi.com/api/activity/`)
        .then((result) => {
          console.log("result");
          console.log(result);

          this.addToHistory(result);

          this.$message.destroy();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
