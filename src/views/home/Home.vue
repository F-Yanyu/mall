<template>
  <div id="home">
    <div>
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentBackTop"
        @pullingUp="loadMore"
      >
        <home-swiper :banners="banners" ref="hSwiper" />
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
        ></tab-control>
        <goods-list :goods="showgoods" />
      </scroll>
      <!-- 组件不能直接做点击，需要添加".native" -->
      <back-top @click.native="backClick" v-show="isBackShow"></back-top>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";
import GoodsList from "content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeData, RECOMMEND, BANNER } from "network/home";

export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isBackShow: false
    };
  },
  activated: function() {
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();
  },
  created() {
    // console.log("创建home");
    // 请求多个数据
    this.getMultiData();
    // 请求商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
    this.$bus.$on("itemImageLoad", () => {
      // scroll属性，refresh()，方法，重新获取scroll.scrollerheight,滚动高度
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300); //0,0是x,y轴，300是时间
    },
    contentBackTop(position) {
      this.isBackShow = -position.y > 1000;
    },
    loadMore() {
      this.getHomeData(this.currentType);
    },
    /**
     * 网络请求相关方法
     */
    getMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        // this.$nextTick(() => {
        //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        // });
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 57px;
}
</style>
