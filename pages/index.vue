<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Bored? We are here to help"
    />

    <a-button type="primary" @click="getRandom" block>
      Next
    </a-button>

    <a-list item-layout="horizontal" :data-source="history">
      <a-list-item slot="renderItem" slot-scope="item, index" style="padding: 10px">
        <a-list-item-meta>
          <a slot="title">{{ item.activity }}</a>
          <div slot="description">RM{{ item.price }}</div>

<!--          <a-avatar-->
<!--            slot="avatar"-->
<!--            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"-->
<!--          />-->
        </a-list-item-meta>
      </a-list-item>
    </a-list>


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
