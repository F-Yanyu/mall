<template>
  <div class="tabcontrol">
    <div
      class="tabcontrol-item"
      :class="{ active: currentIndex == index }"
      v-for="(item, index) in titles"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      dafault() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  position: sticky;
  top: 44px;
}
.tabcontrol-item {
  flex: 1;
  text-align: center;
  font-size: 13.5px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
