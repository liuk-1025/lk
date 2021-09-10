import { getdetailpage } from "@/network/detailpage";
export default {
  add111(state) {
    state.recommend_goods.forEach(e=>e.Price_7++)
  },
  getdetailpage_a(state) {
    getdetailpage().then((res) => {
      state.recommend_goods = res.data.goods_a1
      state.goods_a3=res.data.goods_a3
    });
  },
}
