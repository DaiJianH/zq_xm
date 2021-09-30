<template>
  <nav>
  <div class="first">
    <img id="diyi" src="/img/zhongqiutop.gif">
    <img src="/img/yiwu.jpg" style="width:100%;">
    <div class="beijing"></div>
    <div class="lunbo">
      <mt-swipe
        :style="{ height: h }"
        :speed="1600"
        :auto="3000"
        :show-indicators="false">
        <mt-swipe-item><img src="/img/lb4.jpeg" /></mt-swipe-item>
        <mt-swipe-item><img src="/img/lb2.jpeg" /></mt-swipe-item>
        <mt-swipe-item><img src="/img/lb.jpeg" /></mt-swipe-item>
        <mt-swipe-item><img src="/img/lb0.jpeg" /></mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <div align="center"><img id="yun" src="/img/yiwu03.jpg"></div>
      <p>
        中秋又叫仲秋、月夕，与春节、端午节、清明并称为
        中国汉族的四大传统节日。关于中秋节的起源，最核心的
        要素，是自上古时代即有的敬月信仰，以及流传几千年的
        祭月之风。中秋节本质上是“华夏祭月之节”，祭祀文化
        含有先民天地人和的哲思，更有华夏子孙生生不息的信仰。
        “中秋”一词早已有之，《周礼》中即有“中秋献良裘”
        “中秋夜迎寒”的记载，但那时的“中秋”只是单纯的月
        令时间，并无节日之意。中秋成为节日，是唐宋以后的事，
        是由仲秋时节的月神祭祀发展而来。从北宋末开始，中秋
        的节义有了更不一般的内涵。破碎了山河，破碎了汴京的
        明月，中秋的圆月弥足珍贵。自此，中秋的团圆性质和地
        位在南宋得以确定，流传至今。
      </p>
      <div @click="jianjie" style="margin-top:2%"><a>>> 详细内容</a></div>
    </div>
    <div class="row">
      <div align="center" class="row2">中秋传说
        <img src="/img/yiwu04.gif" style="float:left;">
        <img src="/img/yiwu04a.gif" style="float:right;">
      </div>
      <div class="row3">
        <img src="/img/yiwu05.jpg" style="float:left">
        <p>
          对于故事的主人公“嫦娥”，历史典籍亦多论述。“嫦娥”，亦作“姮娥”，即《山海经•大荒西经》所记“生月十二”之常羲。姮娥古音读羲为娥，逐渐演变为奔月之常娥。《文选》注两引《归藏》，均谓常娥服不死药奔月。知常娥神话古有流传，非始于《准南子》。又《准南鸿烈集解》引庄达吉云：“姮娥，诸本皆作恒，唯《意林》作姮...
        </p> 
        <div @click="chuans" style="margin-top:2%;text-align:right;"><a>>> 更多</a></div>
      </div>
    </div>
    <div class="row">
      <div align="center" class="row2">中秋习俗
        <img src="/img/yiwu04.gif" style="float:left;">
        <img src="/img/yiwu04a.gif" style="float:right;">
      </div>
      <div class="row3">
        <img src="/img/xishu.jpg" style="float:left">
        <p>
           中秋节又称月节、追月节、拜月节、玩月 节。“暮云收尽溢清寒，银汉无声转玉盘。” 赏月，是中秋的一大习俗。唐人《玩月诗》序 言中说，冬天寒冷，不宜于户外赏月，夏季， 天空常有浮云，月亮的光辉被遮住，只有秋高 气爽的中秋，才具备赏月的条件。从唐代中叶 开始，中秋赏月之风日盛，成为时尚。在明代， 家家设月光菩萨神位，供圆形...
        </p> 
        <div @click="xishu" style="margin-top:2%;text-align:right;"><a>>> 更多</a></div>
      </div>
    </div>
    <div class="row">
      <div align="center" class="row2">中秋节物
        <img src="/img/yiwu04.gif" style="float:left;">
        <img src="/img/yiwu04a.gif" style="float:right;">
      </div>
      <div class="row3">
        <img src="/img/jiewu.jpg" style="float:left">
        <p>北方民间盛行一种卖兔儿爷的风俗。佛经里有一个故事，说神仙分别向狐狸、猴子、兔子求食，狐狸和猴子都给了食物，唯独兔子一贫如洗，它说：“你就吃我的肉吧。”然后纵身跳入烈火之中。神仙很感动，就把兔子送到月宫。这一神话故事在华北地区流传很广。明清的典籍里就有“兔儿爷”的记载，述说人们在中秋节用泥塑成兔形，衣冠...</p>
        <div @click="jiewu" style="margin-top:2%;text-align:right;"><a>>> 更多</a></div>
      </div>
    </div>
    <div class="row">
      <div align="center" class="row2">文化遗产
        <img src="/img/yiwu04.gif" style="float:left;">
        <img src="/img/yiwu04a.gif" style="float:right;">
      </div>
      <div class="row3">
        <img src="/img/yic.jpeg" style="float:left">
        <p>
          它起源于厦门，盛行于漳州的龙海、泉州的安海和金门县等地。每逢中秋佳节，该地区的家家户户或亲朋 好友、社团会馆等都会自发举行“中秋博饼”活动，即通过掷六个骰子的游戏方式，博取状元、榜眼、探花...
        <div @click="yich" style="margin-top:2%;text-align:right;"><a>>> 更多</a></div>
      </div>
    </div>
      <div>
      <div id="dier">
        <div @click="wenci"><a>>> 更多</a></div>
      </div>
      </div>
      <div align="center" class="disan">
        <p>中国非物质文化遗产网&nbsp; Copyright© 2021</p>
      </div>
  </div>
  <div class="guding" @click="gud"><img src="/img/yiwu14.gif"></div>
  </nav>
</template>
<script>
export default {
  props:['show'],
  data() {
    return {
      h: ""
    };
  },
  methods: {
    gud(){
    console.log(this.show)
    this.show.ok=false
    },
    jianjie(){
      this.show.ok=false
      location.reload();
    },
    chuans(){
      this.show.ok=false
      this.$emit("sendTo",1);
    },
    xishu(){
      this.show.ok=false
      this.$emit("sendTo",2);
    },
    jiewu(){
      this.show.ok=false
      this.$emit("sendTo",3);
    },
    yich(){
      this.show.ok=false
      this.$emit("sendTo",5);
    },
    wenci(){
      this.show.ok=false
      this.$emit("sendTo",4);
    }
  },
  mounted() {
    let picw = 600;
    let pich = 330;
    let screenw = window.screen.width; //屏幕宽度像素
    let swipeh = Math.floor((pich * screenw) / picw) + "px";
    this.h = swipeh;
  },
};
</script>
<style scoped>
.guding{
  position: fixed;
  top: 0;
  right: 0;
}
.guding img{width: 33px;opacity: 0.5;}
nav{
  background-image: url(/img/bg1.jpg);
  height: 667px;
  overflow: auto;
}
.first{
  background-image: url(/img/beijing.gif);
}
#diyi{width:330px !important}
.beijing {
  height: 9px;
  background: url(/img/yiwu02.gif);
  background-size:16px 42px;
}
.lunbo img {
  width: 100%;
}
#yun{width: 150px;}
p {
  font-size: 18px;
  line-height: 145%;
  text-indent: 2em;
}
a {
  color: #5e3105;
  font-size: 17px;
}
.row{
  border: 1px double #75573D;
  padding: 1%;
  background-image: url(/img/yiwu16.jpg);
  margin-top: 20px;
}
.row2{
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  font-size: 18.5px;
  background-image: url(/img/yiwu04b.gif);
  background-size: 100% 30px;
  }
.row2 img{width: 45px;height: 30px;}
.row3{margin:4% 3% 2%}
.row3 img{width: 150px;}
#dier{
  background-image: url(/img/yiwu09.jpg);
  height:250px;
  background-repeat:no-repeat;
  background-size:100% 100%;
  margin-top:10px;
}
#dier div{padding-top:196px;padding-left:265px;}
#dier a{font-size: 13px;}
.disan{
  margin-top:25px;
  background-image: url(/img/yiwu15.gif);
  background-size: 100% 48px;
  }
.disan p{
  line-height:48px;
  font-size:12px;
  text-indent:0;
}
</style>