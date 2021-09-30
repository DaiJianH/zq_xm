<template>
  <div class="first">
    <img id="ding" src="/img/yiwu11.jpg" />
    <div class="d1">
      <van-tabs
        v-model="active"
        title-inactive-color="#793C03"
        title-active-color="#C72819"
        @click="onClick">
        <van-tab v-for="item in btn" :key="item" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="d2">
      <img src="/img/yiwu14.gif" style="float: left" />
      <img src="/img/yiwu14.gif" style="float: right" />
      <div align="center" class="d3">
        <img src="/img/yiwu13.gif" />
        <div class="dd">
          <p
            v-for="(item, i) of zq"
            :key="i"
            :class="i == aa ? 'active' : ''"
            @click="cis(i,item)">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="d4"
      v-infinite-scroll="loadmore"
      infinite-scroll-distance="70"
      infinite-scroll-disabled="busy"
      :infinite-scroll-immediate-check="true">
      <div v-for="(item, k) of remp" :key="k">
        <img :src="item.rimg" style="float: left" />
        <p>{{ item.rp }}</p>
      </div>
    </div>
    <van-tabbar
      active-color="#793C03"
      inactive-color="#793C03"
      class="d5">
      <van-tabbar-item icon="wap-home-o" is-link @click="showPopup">主页</van-tabbar-item>
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="photo-o" is-link @click="showPopub">相册</van-tabbar-item>
    </van-tabbar>
  <van-popup v-model="show.ok" position="left" :style="{height:'100%',width:'100%'}"><home :show="show" @sendTo="getSon"></home></van-popup> 
  <van-popup v-model="showed.ok" position="right" :style="{height:'100%',width:'100%'}"><xiangce :showed="showed"></xiangce></van-popup>
  </div>
</template>
<script>
import home from './Home.vue';
import xiangce from './Xiangce.vue';
import { Toast } from "vant";
Toast.setDefaultOptions({ duration: 500 });
export default {
  components:{home,xiangce},
  data() {
    return {
      active: "",
      btn: ["中秋简介","中秋传说","中秋习俗","中秋节物","文辞中秋","文化遗产"],
      zq: { title: "" },
      remp: [],
      aa: "title",
      fenye: 1,
      busy: false,
      canshu:'中秋概况',
      show:{
        ok:false
      },
      showed:{ok:false}
    };
  },
  methods: {
    djh(a,b,arg){
      this.active=arg 
      this.axios.get(`/compunents?cid=${a}`).then((result) =>{this. remp = result.data.results;})
      this.axios.get(`/compunent?lid=${b}`).then((result) => {
        this.zq = {};
        if (
          result.data.results[0].title3 == "" &&
          result.data.results[0].title2 == ""
        ) {
          this.zq.title = result.data.results[0].title;
        } else if (result.data.results[0].title3 == "") {
          this.zq.title = result.data.results[0].title;
          this.zq.title2 = result.data.results[0].title2;
        } else {
          this.zq = result.data.results[0];
        }
        window.scroll(0,0)
        this.canshu=this.cid
      });
    },
    getSon(arg){
      if (arg==1) {
        this.djh('嫦娥奔月',2,arg)
      }
      if (arg==2) {
        this.djh('中秋祭月',3,arg)
      }
      if (arg==3) {
        this.djh('舞火龙',4,arg)
      }
      if (arg==5) {
        this.djh('文化遗产',6,arg)
      }else{
        this.djh('∧嫦娥∨',5,arg)
      }
    },
    showPopup() {
      this.show.ok = true;
    },
    showPopub() {
      this.showed.ok = true;
    },
    loadmore() {
      this.busy = true; //防止重复调用loadmore
      this.fenye++;
      this.axios
        .get(`/compunents?cid=${this.canshu}&page=${this.fenye}`)
        .then((res) => {
          this.remp.push(...res.data.results);
          if (res.data.results.length == 0) {
            console.log(`到底了`);
            this.$toast({
              message: "没有数据了",
              position: "bottom",
              duration: 1000,
            });
          } else {
            this.busy = false;
            Toast.loading({
              message: "加载中...",
              forbidClick: false,
              loadingType: "spinner",
            });
          }
        });
    },
    onClick(name, item) {
      window.scroll(0,0)
      if (item=="中秋简介") {
        location.reload();
      }
      // console.log(name, item);
      name++;
      this.aa = "title";
      this.zq.title=item;
      this.axios.get(`/compunent?lid=${name}`).then((result) => {
        console.log(result.data.results);
        this.zq = {};
        if (
          result.data.results[0].title3 == "" &&
          result.data.results[0].title2 == ""
        ) {
          this.zq.title = result.data.results[0].title;
        } else if (result.data.results[0].title3 == "") {
          this.zq.title = result.data.results[0].title;
          this.zq.title2 = result.data.results[0].title2;
        } else {
          this.zq = result.data.results[0];
        }
        this.canshu=this.zq.title
        this.axios.get(`/compunents?cid=${this.zq.title}&page=1`).then((result) => {
      console.log(result.data.results);
      this.remp = result.data.results;
    });
      });
    },
    cis(i,item) {
      this.canshu=item
      // console.log(item)
      window.scroll(0,0)
      this.aa = i;
      this.fenye=1
      this.busy = true; //防止重复调用loadmore
      this.axios
        .get(`/compunents?cid=${item}&page=${this.fenye}`)
        .then((res) => {
          console.log(res.data.results);
          this.remp.push(...res.data.results);
          if (res.data.results.length == 0) {
            console.log(`到底了`);
            this.$toast({
              message: "没有数据了",
              position: "bottom",
              duration: 1000,
            });
          } else {
            this.busy = false;
            Toast.loading({
              message: "加载中...",
              forbidClick: false,
              loadingType: "spinner",
            });
          }
        });
      
      this.axios.get(`/compunents?cid=${item}&page=${this.fenye}`).then((result) => {
      console.log(result.data.results);
      this.remp = result.data.results;
    });

    },
  },
  mounted() {
    this.axios.get(`/compunent?lid=1`).then((result) => {
      console.log(result.data.results);
      // this.zq=result.data.results[0]
      if (result.data.results[0].title3 == "") {
        this.zq.title = result.data.results[0].title;
        this.zq.title2 = result.data.results[0].title2;
      }
    });
    this.axios.get(`/compunents?cid=中秋概况&page=1`).then((result) => {
      console.log(result.data.results);
      this.remp = result.data.results;
    });
  },
};
</script>
<style>
body{
  background-image: url(/img/bg1.jpg);
}
.first{
  background: rgba(255, 241, 172, 0.534);
  margin: 0 2%;
  padding:0 2.5%;
  }
#ding {
  width: 100%;
  height: 45px;
  position: fixed;
  left: 0;
  top: 0;
}
.active {
  color: #c72819 !important;
}
.d1 {
  width: 100%;
  position: fixed;
  top: 45px;
  left: 0;
  font-family: \5B8B\4F53,Arial Narrow,arial,serif;
}
.d2 {
  background-image: url(/img/beijing.gif);
  width: 100%;
  position: fixed;
  top: 89px;
  left: 0;
}
.d2 img {
  width: 60px;
}
.d3 {
  margin: 0 auto;
  background-image: url(/img/yiwu12.jpg);
  background-size: 100% 100%;
  width: 227px;
  height: 113px;
}
.d3 img {
  margin-top: 10px;
  width: 90px;
  height: 24px;
}
.d3 p {
  font-size: 16px;
  width: 20px;
  color: #793c03;
  font-family: \9ED1\4F53;
}
.d3 p:nth-child(n + 2) {
  margin-left: 10px;
}
.dd {
  display: flex;
  justify-content: center;
}
.d4 {
  margin-top: 206px;
  margin-bottom: 41px;
}
.d4 img {
  width: 240px;
  margin: 4px 10px 4px 2px;
}
.d4 p {
  font-size: 17.5px;
  line-height: 155%;
  text-indent: 2em;
  font-family: \9ED1\4F53;
}
.d4 div:nth-child(n+2) {
  border-top: 2px dashed #75573D;
  margin-top: 18px;
  padding-top: 18px;
}
.van-tabs--line .van-tabs__nav {
  background-image: url(/img/yiwu02.gif);
  background-size: 20.3px 44px;
}
.van-tabs__line {
  height: 0px !important;
}
div.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete {
  padding: 0;
}
div.van-tab:nth-child(n) {
  padding: 0;
}
span.van-tab__text {
  font-weight: bold;
  border-left: 1px dashed #793c03;
  padding: 0 5vw;
}
div.van-tab.van-tab:first-child span.van-tab__text {
  border: 0;
}
.d5 {
  background-image: url(/img/beijing.gif);
  height: 40px !important;
}
.d5 .van-tabbar-item:nth-child(2){font-weight: bold;color:#C72819 !important; }
.van-tabbar-item--active{background-color:transparent !important;}
</style>