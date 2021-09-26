<template>
  <div id="home">
    <div>
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners" ref="hSwiper" />
      <recommend-view :recommends="recommends" />
      <feature-view />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
import { getHomeMultidata, getHomeData, RECOMMEND, BANNER } from "network/home";
import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [
        // {
        //   acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   height: 390,
        //   height923: 390,
        //   image:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        //   image923:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
        //   link:
        //     "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   title: "焕新女装节",
        //   width: 750,
        //   width923: 750
        // },
        // {
        //   acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   height: 390,
        //   height923: 390,
        //   image:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        //   image923:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
        //   link:
        //     "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   title: "焕新女装节",
        //   width: 750,
        //   width923: 750
        // },
        // {
        //   acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   height: 390,
        //   height923: 390,
        //   image:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        //   image923:
        //     "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
        //   link:
        //     "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //   title: "焕新女装节",
        //   width: 750,
        //   width923: 750
        // }
      ],
      recommends: []
    };
  },
  activated: function() {
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();
  },
  created() {
    console.log("创建home");
    this.getMultiData();
  },
  methods: {
    getMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        // this.$nextTick(() => {
        //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        // });
      });
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 9;
}
</style>
