<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/black/home.png" alt="">
        <img slot="item-icon-isactive" src="~assets/img/tabbar/red/home.png" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/classification">
        <img slot="item-icon" src="~assets/img/tabbar/black/classification.png" alt="">
        <img slot="item-icon-isactive" src="~assets/img/tabbar/red/classification.png" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/shoppingcart">
        <img slot="item-icon" src="~assets/img/tabbar/black/gouwuche.png" alt="">
        <img slot="item-icon-isactive" src="~assets/img/tabbar/red/gouwuche.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/black/wode.png" alt="">
        <img slot="item-icon-isactive" src="~assets/img/tabbar/red/wode.png" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue';
import TabbarItem from 'components/common/tabbar/TabbarItem.vue';

export default {
  data(){
    return{
    }
  },
  name: 'MainTabbar',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
  
  @import "../../../assets/css/base.css";
</style>
