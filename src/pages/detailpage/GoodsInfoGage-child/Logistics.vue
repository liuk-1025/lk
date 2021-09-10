<template>
  <div class="logistics">
    <div><span>选择</span>颜色分类<span></span></div>
    <div class="logistics_pic">
      <span></span>
      <ul>
        <li v-for="item in logistics_info.pic6">
          <img :src="item" alt="" />
        </li>
      </ul>
      <i class="pic_font12">共{{ logistics_info.pic6_num }}种颜色分类可选</i>
    </div>
    <div>
      <span>发货</span><span class="line1">{{ logistics_info.city }}</span
      ><span>快递</span>
      <span></span>
    </div>
    <div><span>保障</span>付款后48小时内发货·七天无理由 <span></span></div>
    <div><span>参数</span>品牌&nbsp;型号 <span></span></div>
  </div>
</template>


<script>
export default {
  name: "logistics",
  props: {
    logistics_info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
@h30: 30px;

.logistics {
  padding: 10px;
  margin: 2%;
  height: auto;
  width: 96%;
  border-radius: 15px;
  background-color: rgb(241, 240, 240);
  font-size: 15px;
  & > div {
    margin-bottom: 15px;
    position: relative;
    .line1 {
      border-right: 1px solid #666;
      padding-right: 10px;
      margin-right: 10px;
    }
  }
  .pic_font12 {
    font-size: 14px;
    padding: 0 5px;
    background-color: rgb(206, 205, 205);
    border-radius: 4px;
    color: #666;
    font-style: normal;
  }
  .logistics_pic ul {
    display: inline-block;
    color: red;

    li {
      display: inline-block;
      width: @h30;
      margin-right: 3px;
      background-color: #666;
      height: @h30;
      overflow: hidden;
      vertical-align: middle;
      img {
        width: 100%;
      }
    }
  }
  & > div span:nth-child(1) {
    display: inline-block;
    width: 40px;
    color: #666;
    margin-right: 3%;
  }
  & > div span:last-child {
    position: absolute;
    top: 5px;
    right: 0;
    width: 8px;
    height: 8px;
    border: 1px solid #666;
    border-top: none;
    border-left: none;
    transform: rotate(-45deg);
  }
}
</style>