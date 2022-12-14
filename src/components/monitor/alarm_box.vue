<template>
  <div id="status-box">
    <div :class="{warning : statusOne, abnormal : statusTwo}"></div>

  </div>
</template>

<script>
export default {
  name: "status_box",
  data() {
    return {
      statusOne: false,
      statusTwo: false,
    }
  },
  props: {
    toStatusBox: Object,
  },
  methods: {
    checkStatus() {
      if (this.toStatusBox.isAlarm) {
        this.statusOne = true;
      }else {
        this.statusTwo = true;
      }
    }
  },
  mounted() {
    this.checkStatus();
  }
}
</script>

<style scoped>
#status-box {
  width: 100%;
  height: 15px;
  margin-left: 25%;
}

.warning {
  float: left;
  width: 10px;
  height: 10px;
  background: red;
  border: 1px solid red;
  border-radius: 50%;
  margin-top: 2%;;
  filter: blur(2px)
}

.abnormal {
  float: left;
  width: 10px;
  height: 10px;
  background: #46EB87;
  border: 1px solid #46EB87;
  border-radius: 50%;
  margin-top: 2%;;
  filter: blur(2px)
}

.status-name {
  width: 50%;
  height: 15px;
}
</style>
