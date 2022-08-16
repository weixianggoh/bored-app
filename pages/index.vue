<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Bored? We are here to help"
    />

    <a-button type="primary" @click="getRandom" block> Next </a-button>

    <a-list
      item-layout="horizontal"
      :data-source="history"
      style="margin-top: 50px"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        style="padding: 10px"
        :style="customBgColor(item.type)"
      >
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
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters('history', ['history']),
  },
  methods: {
    ...mapActions('history', ['addToHistory']),
    getRandom() {
      this.$message.loading('getting bored? stay tune...', 5000)
      this.$axios
        .$get(`http://www.boredapi.com/api/activity/`)
        .then((result) => {
          console.log('result')
          console.log(result)

          this.addToHistory(result)

          this.$message.destroy()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    customBgColor(type) {
      // ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

      let color = '#9cff9d'
      switch (type) {
        case 'education':
          color = '#fcba03'
          break
        case 'recreational':
          color = '#79adac'
          break
        case 'social':
          color = '#9cd9ff'
          break
        case 'diy':
          color = '#d1d1ff'
          break
        case 'charity':
          color = '#c5ff9c'
          break
        case 'cooking':
          color = '#7a8eff'
          break
        case 'relaxation':
          color = '#d49633'
          break
        case 'music':
          color = '#21526e'
          break
        case 'busywork':
          color = '#376e21'
          break
        default:
          color = '#9cff9d'
      }

      return {
        backgroundColor: color,
      }
    },
  },
}
</script>
