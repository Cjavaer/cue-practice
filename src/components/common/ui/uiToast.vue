<template>
  <ui-base-layer ref="baseLayer">
    <div class="ui-toast">
      <div class="toast-content">{{toastMsg}}</div>
    </div>
  </ui-base-layer>
</template>
<script>
import uiBaseLayer from "@/components/common/ui/uiBaseLayer"

export default {
  components: {
    [uiBaseLayer.name]:uiBaseLayer
  },
  name: "ui-toast",
  props: {},
  data() {
    return {
      toastMsg: "",
      visiable: true
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    close() {
      this.$refs.baseLayer.visiable = false;
    }
  }
};
</script>
<style scoped>
@keyframes fadedown {
  0% {
    transform: translate3d(0, -50%, 0);
    transform: scale(0.8);
    opacity: 0.6;
  }
  50% {
    transform: translate3d(0, -25%, 0);
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transform: scale(1);
  }
}
.ui-toast {
  height:100%;
  width:100%;
  position: absolute;
  top:0;
  left:0;
}
.toast-content {
  position: absolute;
  padding: 15px 15px;
  width: 150px;
  color: #fff;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  margin-left: -75px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.8);
  animation: fadedown 0.3s cubic-bezier(0.42, 0, 0, 1.3);
}
</style>



