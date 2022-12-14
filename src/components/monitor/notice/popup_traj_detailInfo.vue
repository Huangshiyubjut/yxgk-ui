<template>
  <!-- 弹窗背景 -->
  <div id="modal">
    <!-- 弹窗 -->
    <div id="modal-content">
      <div id="title">
        <span id="close">×</span>
        <p>查看轨迹</p>
      </div>
      <div id="process"></div>
      <div id="charts"></div>
    </div>
  </div>
</template>

<script>
import bus from "@/bus/bus";

export default {
  name: "popup_detail",
  methods: {
    close_popup() {
      let _this = this;
      document.getElementById('close').onclick = function () {
        _this.$store.state.detail_popup_flag = false;
      };
    }
  },
  mounted() {
    this.close_popup();
  },
  created() {
    bus.$on('share2DetailPopup', (val) => {
      console.log("嘻嘻，我收到点击的这条飞机信息啦：", val)
      /*将返回的信息在弹窗中显示.....待开发*/

    })
  }
}
</script>

<style scoped>
/* 弹窗背景 */
#modal {
  width: 100%;
  height: 100%;
  /* 默认隐藏 */
  display: none;
  /* 固定定位 */
  position: fixed;
  /* 设置在顶层 */
  z-index: 1000;
  /* 设置位置 */
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(120, 120, 120, 0.4);
}
/* 弹窗内容 */
#modal-content {
  position: relative;
  background-color: #121212;
  margin: 10% auto;
  border: 1px solid #424242;
  width: 500px;
  height: 300px;
  z-index: 1001;
  border-radius: 8px;
  padding: 0 10px 10px 10px;
}
#title {
  height: 20px;
  line-height: 20px;
}
p {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #46EB87;
  font-weight: bold;
}
/* 关闭按钮 */
#close {
  position: absolute;
  top: 0;
  right: 10px;
  color: #46EB87;
  float: right;
  width: 10px;
  height: 10px;
  font-size: 30px;
  font-weight: bold;
}
/* 设置关闭按钮的鼠标指针 */
#close:hover,
#close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
#process {
  background-color: #424242;
  top: 0;
  width: 100%;
  height: 45%;
}
#charts {
  margin-top: 2%;
  width: 100%;
  height: 45%;
  background-color: #3355ff;
}
</style>
