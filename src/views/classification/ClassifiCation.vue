<template>
  <div class="warpper" ref="aaaa">
    <ul class="content">
      <button @click="btnClick()">按钮</button>
      <li>我是分类文本1</li>
      <li>我是分类文本2</li>
      <li>我是分类文本3</li>
      <li>我是分类文本4</li>
      <li>我是分类文本5</li>
      <li>我是分类文本6</li>
      <li>我是分类文本7</li>
      <li>我是分类文本8</li>
      <li>我是分类文本9</li>
      <li>我是分类文本10</li>
      <li>我是分类文本11</li>
      <li>我是分类文本12</li>
      <li>我是分类文本13</li>
      <li>我是分类文本14</li>
      <li>我是分类文本15</li>
      <li>我是分类文本16</li>
      <li>我是分类文本17</li>
      <li>我是分类文本18</li>
      <li>我是分类文本19</li>
      <li>我是分类文本20</li>
      <li>我是分类文本21</li>
      <li>我是分类文本22</li>
      <li>我是分类文本23</li>
      <li>我是分类文本24</li>
      <li>我是分类文本25</li>
      <li>我是分类文本26</li>
      <li>我是分类文本27</li>
      <li>我是分类文本28</li>
      <li>我是分类文本29</li>
      <li>我是分类文本30</li>
      <li>我是分类文本31</li>
      <li>我是分类文本32</li>
      <li>我是分类文本33</li>
      <li>我是分类文本34</li>
      <li>我是分类文本35</li>
      <li>我是分类文本36</li>
      <li>我是分类文本37</li>
      <li>我是分类文本38</li>
      <li>我是分类文本39</li>
      <li>我是分类文本40</li>
      <li>我是分类文本41</li>
      <li>我是分类文本42</li>
      <li>我是分类文本43</li>
      <li>我是分类文本44</li>
      <li>我是分类文本45</li>
      <li>我是分类文本46</li>
      <li>我是分类文本47</li>
      <li>我是分类文本48</li>
      <li>我是分类文本49</li>
      <li>我是分类文本50</li>
      <li>我是分类文本51</li>
      <li>我是分类文本52</li>
      <li>我是分类文本53</li>
      <li>我是分类文本54</li>
      <li>我是分类文本55</li>
      <li>我是分类文本56</li>
      <li>我是分类文本57</li>
      <li>我是分类文本58</li>
      <li>我是分类文本59</li>
      <li>我是分类文本60</li>
      <li>我是分类文本61</li>
      <li>我是分类文本62</li>
      <li>我是分类文本63</li>
      <li>我是分类文本64</li>
      <li>我是分类文本65</li>
      <li>我是分类文本66</li>
      <li>我是分类文本67</li>
      <li>我是分类文本68</li>
      <li>我是分类文本69</li>
      <li>我是分类文本70</li>
      <li>我是分类文本71</li>
      <li>我是分类文本72</li>
      <li>我是分类文本73</li>
      <li>我是分类文本74</li>
      <li>我是分类文本75</li>
      <li>我是分类文本76</li>
      <li>我是分类文本77</li>
      <li>我是分类文本78</li>
      <li>我是分类文本79</li>
      <li>我是分类文本80</li>
      <li>我是分类文本81</li>
      <li>我是分类文本82</li>
      <li>我是分类文本83</li>
      <li>我是分类文本84</li>
      <li>我是分类文本85</li>
      <li>我是分类文本86</li>
      <li>我是分类文本87</li>
      <li>我是分类文本88</li>
      <li>我是分类文本89</li>
      <li>我是分类文本90</li>
      <li>我是分类文本91</li>
      <li>我是分类文本92</li>
      <li>我是分类文本93</li>
      <li>我是分类文本94</li>
      <li>我是分类文本95</li>
      <li>我是分类文本96</li>
      <li>我是分类文本97</li>
      <li>我是分类文本98</li>
      <li>我是分类文本99</li>
      <li>我是分类文本100</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "ClassifiCation",
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    btnClick() {
      console.log("你是煞笔");
    }
  },
  // 组件创建完后调用
  // created函数中不能直接拿元素，拿了也是undefine或是null
  created() {},
  mounted() {
    // this.scroll = new BScroll(this.$refs.aaaa);
    this.scroll = new BScroll(document.querySelector(".warpper"), {
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
      console.log("上拉加载更多");
    });
  }
};
</script>

<style scope>
.warpper {
  height: 200px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
