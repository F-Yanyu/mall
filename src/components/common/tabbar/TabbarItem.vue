<template>
<!-- 所有的itme都展示同一个图片，同一个文字 -->
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name = 'item-icon'></slot></div>
    <div v-else><slot name="item-icon-isactive"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name:'TabbarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive: true,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{};
    }
  },
  methods:{
    itemClick(){
      if (this.$route.path !== this.path) {
        this.$router.push({ path:this.path })
      }
    }
  }
}
</script>
<style>
.tab-bar-item{
    flex:1;
    text-align:center;
    height:49px;
    margin-top:8px;
  }
  .tab-bar-item img{
    height:20px;
    width:20px;
    /* 间隔的距离清除掉 */
    vertical-align:middle;
  }
  .active{
    color:red;
  }
</style>
