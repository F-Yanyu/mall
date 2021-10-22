<template>
  <div id="warpper" ref="warpper">
    <div id="content">
      <slot> </slot>
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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    }),
      this.scroll.on("pullingUp", () => {
        this.$emit("pullUpLoad");
      });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped></style>
