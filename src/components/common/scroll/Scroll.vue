<template>
  <div>
    <div class="warpper" ref="warpper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      message: "hahaha"
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper);
    // this.scroll.on("scroll", position => {
    //   console.log(position);
    // });
    // this.scroll.on("pullingUp", () => {
    //   console.log("pullingUp");
    // });
    this.scroll.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y.time);
    }
  }
};
</script>
<style scoped></style>
