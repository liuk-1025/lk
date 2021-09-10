<template>
  <div class="business">
    <ul class="business_info">
      <li>
        <img
          src="https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </li>
      <li>
        <p>每车指甲</p>
        <span class="pricon">
          <img
            src="https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg"
            alt=""
          />
        </span>
        <span class="pricon">
          <img
            src="https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg"
            alt=""
          />
        </span>
      </li>
      <li>
        <ol>
          <li>
            <span>宝贝描述&nbsp;{{ 4.7 }}</span
            ><span>高</span>
          </li>
          <li>
            <span>卖家服务&nbsp;{{ 5 }}</span
            ><span>高</span>
          </li>
          <li>
            <span>物流服务&nbsp;{{ 4.8 }}</span
            ><span>高</span>
          </li>
        </ol>
      </li>
    </ul>
    <div class="inshop"><span>进店逛逛</span> <span>全部宝贝</span></div>
  </div>
</template>

<script>
export default {
  name: "business",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.business {
  padding: 10px;
  margin: 2% 2% 0 2%;
  width: 96%;
  border-radius: 15px 15px 0 0;
  background-color: rgb(241, 240, 240);
  font-size: 15px;
  .business_info {
    display: flex;
    padding: 10px 0;
    & > li:nth-child(1) {
      height: 50px;
      width: 50px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    & > li:nth-child(2) {
      flex: 1;
      p {
        font-size: 18px;
        padding-bottom: 4px;
      }
      .pricon {
        width: 14px;
        height: 14px;
        display: inline-block;
        overflow: hidden;
        margin-right: -3px;
        img {
          width: 100%;
        }
      }
    }
    & > li:nth-child(3) {
      font-size: 10px;
      display: line-block;
      ol li span:nth-child(2) {
        color: orange;
        float: right;
        padding-left: 5px;
      }
    }
  }
  .inshop {
    padding: 10px 0;
    width: 55%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    span {
      border: 1px solid rgb(231, 116, 9);
      display: inline-block;
      text-align: center;
      height: 35px;
      line-height: 34px;
      border-radius: 35px;
      width: 46%;
      color: rgb(231, 116, 9);
    }
  }
}
</style>