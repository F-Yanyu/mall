<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>
<style>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
}
</style>
