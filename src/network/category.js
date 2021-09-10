import { request } from "./request";
export function getcategory() {
    return request({
        // url: '/home/data',
        url:'../static/lk.JSON',
    })
}