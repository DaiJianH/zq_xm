<template>
  <nav>
    <img src="/img/yi.gif" />
    <div align="center" class="dengl">相册欣赏</div>
    <div @click="photos" class="photo">
      <img src="/img/change.jpg" style="float: left" />
      <img src="/img/lb0.jpeg" style="float: right" />
      <img src="/img/lb.jpeg" style="float: left" />
      <img src="/img/lb2.jpeg" style="float: right" />
      <img src="/img/huad.jpg" style="float: left" />
      <img src="/img/jianjie.jpeg" style="float: right" />
      <img src="/img/jiyue.jpg" style="float: left" />
      <img src="/img/lishi2.jpg" style="float: right" />
      <img src="/img/lb4.jpeg" style="float: right" />
      <img src="/img/lishi3.jpeg" style="float: right" />
      <img src="/img/lishi4.jpeg" style="float: left" />
      <img src="/img/lishi.jpg" style="float: right" />
      <img src="/img/shaoda.jpeg" style="float: left" />
      <img src="/img/wlong.jpeg" style="float: right" />
      <img src="/img/rand.jpeg" style="float: left" />
      <img src="/img/xishu.jpg" style="float: right" />
      <img src="/img/wug.jpg" style="float: left" />
      <img src="/img/xuanz.jpg" style="float: right" />
      <img src="/img/yic.jpeg" style="float: right" />
      <img src="/img/yic.jpg" style="float: right" />
      <img src="/img/yiwu05.jpg" style="float: left" />
      <img src="/img/zq3.jpeg" style="float: right" />
      <img src="/img/yuefu.jpg" style="float: right" />
      <img src="/img/zhongq.jpeg" style="float: right" />
      <img src="/img/jiewu.jpg" style="float: left" />
      <img src="/img/yueb.jpg" style="float: right" />
    </div>
    <div class="guding" @click="gud"><img src="/img/er2.gif" /></div>
  </nav>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  props: ["showed"],
  methods: {
    photos(event) {
      console.log(event.target.src);
      ImagePreview({ images: [event.target.src], showIndex: false });
    },
    gud() {
      this.showed.ok = false;
    }
  },
};
</script>
<style scoped>
.guding {
  position: fixed;
  top: 0;
  left: 0;
}
.guding img {
  width: 36px;
  opacity: 0.5;
}
nav {
  background-image: url(/img/bg1.jpg);
  height: 667px;
  overflow: auto;
}
nav > img {
  width: 375px;
  height: 180px;
}
.dengl {
  font-size: 25px;
  color: #c72819;
  margin-bottom: 10px;
  margin-top: 10px;
}
.photo img {
  width: 182px;
  margin-bottom: 8px;
}
.photo img:nth-child(10){margin-right: 10px;}
.photo img:nth-child(20){margin-right: 10px;}
.photo img:nth-child(24){margin-right: 10px;}
.photo img:nth-child(26){margin-top: -20px;}
</style>