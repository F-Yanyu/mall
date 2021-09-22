<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/nav-bar/NavBar.vue";
import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  name: "Home",
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(result => {
      // console.log(result);
      // 因为函数有调用栈，使用完会被内存回收掉，所以，要提出来到data中，
      // 这样本应result指向的数组，在result弹出函数栈后，不会因为没有东西执行而被回收
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    });
  }
};
</script>
<style scope>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
