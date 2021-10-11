<template>
  <div class="warpper" ref="bscroll">
    <div class="counter">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.bscroll, {
      probeType: 3
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
    });
    this.scroll.on("pullUpLoad", () => {
      console.log("加载更多");
    });
  }
};
</script>
