<template>
  <div class="comment">
    <div class="row3_1">
      <span>宝贝评价({{ evaluate_info.comment_num }})</span
      ><span>查看全部<span class="rigthicon1"></span></span>
    </div>
    <div class="row3_2">
      <span v-for="item in evaluate_info.comment_label">{{ item }}</span>
    </div>
    <ul class="row3_3">
      <li><img :src="evaluate_info.user_pic" alt="" /></li>
      <li>
        <p>{{ evaluate_info.user_name }}</p>
        <p>{{ evaluate_info.comment_time }}天前</p>
      </li>
    </ul>
    <div class="row3_4">{{ evaluate_info.comment_text }}</div>
    <div class="row3_5" v-for="item in evaluate_info.comment_pic">
      <img :src="item" alt="" />
    </div>
    <div class="row3_6">
      <h3>问大家</h3>
      <ul>
        <li>问大家</li>
        <li>宝贝好不好，问问已买过的人</li>
        <li>去提问</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    evaluate_info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.comment {
  padding: 10px;
  margin: 2%;
  height: auto;
  width: 96%;
  border-radius: 15px;
  background-color: rgb(241, 240, 240);
  font-size: 15px;
  .row3_1 {
    padding: 2% 0;
    & > span:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
    }
    & > span:nth-child(2) {
      font-size: 14px;
      color: rgb(255, 39, 1);
      float: right;
      line-height: 26px;
      .rigthicon1 {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 1px solid  rgb(255, 39, 1);
        border-bottom: none;
        border-left: none;
        transform: rotate(45deg);
        margin-bottom: 1px;
        margin-left: 2px;
      }
    }
  }
  .row3_2 {
    margin-bottom: 2%;
    & > span {
      display: inline-block;
      font-size: 15px;
      background-color: rgb(248, 225, 225);
      padding: 3px 8px;
      margin: 3px 3px;
      border-radius: 20px;
    }
  }
  .row3_3 {
    height: 40px;
    li {
      float: left;
    }
    li:nth-child(1) {
      width: 40px;
      height: 100%;
      border-radius: 40px;
      background-color: rgb(201, 58, 58);
      margin-right: 2%;
      overflow: hidden;
    }
  }
  .row3_4 {
    word-wrap: break-word;
    padding: 3% 0;
  }
  .row3_5 {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    display: inline-block;
    margin: 0 13px 5px 0;
  }
  .row3_6 {
    margin-top: 5%;
    border-top: 2px solid rgba(102, 102, 102, 0.1);
    padding-bottom: 2%;
    h3 {
      padding: 3% 0;
    }
    ul {
      display: flex;
      // justify-content: space-between;
      height: 25px;
      line-height: 25px;
      & > li:nth-child(1) {
        color: #fff;
        background-color: rgb(223, 110, 29);
        font-size: 12px;
        height: 17px;
        margin-top: 4px;
        line-height: 17px;
        padding: 0 2px;
      }
      & > li:nth-child(2) {
        color: rgba(102, 102, 102, 0.466);
        flex: 1;
        font-size: 14px;
        text-align: left;
        padding-left: 3px;
      }
      & > li:nth-child(3) {
        color: rgb(223, 110, 29);
        border: 1px solid rgb(223, 110, 29);
        border-radius: 20px;
        padding: -0 6px;
        line-height: 20px;
      }
    }
  }
}
</style>