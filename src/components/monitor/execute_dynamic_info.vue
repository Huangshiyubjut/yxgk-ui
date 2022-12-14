<template>
  <div id="box-container" v-if="this.flag">
    <div class="btn-container">
      <input @click="suggestPopup" type="button" value="解除" id="btn1">
    </div>
    <div class="detail_container">
      <a @click="detailPopup" class="right">查看</a>
    </div>
  </div>

  <div id="box-container" v-else>
    <div class="btn-container">
      <input @click="suggestPopup" type="button" value="解除" id="btn2" disabled="disabled">
    </div>
    <div class="detail_container">
      <a @click="detailPopup" class="right">查看</a>
    </div>
  </div>
</template>

<script>

import bus from "@/bus/bus";
export default {
  name: "execute_box",
  data() {
    return {
      flag: 1
    }
  },
  props: {
    toExecutBox: Object,
  },
  methods: {
    getWarning() {
      if (this.toExecutBox != null) { /*加if判断，不然会报错undefined*/
        return this.flag = this.toExecutBox.isAlarm;
      }
    },
    detailPopup() {
      this.$store.state.detail_popup_flag = true; //点击查看，标志位为true
      bus.$emit('share2DetailPopup', this.toExecutBox); //发送该飞机信息给popup_detail组件

      /*弹窗互斥*/
      this.$store.state.suggest_popup_flag = false;
      this.$store.state.alarm_detail_popup_flag = false;
    },
    suggestPopup() {
      this.$store.state.suggest_popup_flag = true; //点击查看，标志位为true
      bus.$emit('share2SuggestPopup', this.toExecutBox); //发送该飞机信息给popup_detail组件

      /*弹窗互斥*/
      this.$store.state.detail_popup_flag = false;
      this.$store.state.alarm_detail_popup_flag = false;
    }
  },
  mounted() {
    this.getWarning();
  }
}
</script>

<style scoped>
#box-container {
  width: 100%;
  height: 100%;
  color: red;
}

.btn-container {
  float: left;
  width: 50%;
  height: 100%;
}

.detail_container {
  float: left;
  width: 50%;
  height: 100%;
}

#btn1 {
  height: 60%;
  width: 60%;
  margin-left: 20%;
  background-color: rgb(70, 235, 135);
  font-size: 10px;
  line-height: 10px;
  border: none;
  color: #121212;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 1px 2px 3px 0 rgb(70, 235, 135), -.5px -.5px 1px 1px #fff;
}

#btn1:hover {
  color: #b0b0b0;
}

#btn2 {
  height: 60%;
  width: 60%;
  margin-left: 20%;
  background-color: rgb(50, 50, 50);
  font-size: 10px;
  line-height: 10px;
  border: none;
  color: #121212;
  border-radius: 25px;
  cursor: not-allowed;
  box-shadow: 1px 2px 3px 0 rgb(50, 50, 50), -.1px -.1px 1px 1px #A0A0A0;
}


.right {
  color: #46eb87;
  margin-right: 20%;
  cursor: pointer;
}
</style>
