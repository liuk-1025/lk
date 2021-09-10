import { request } from "./request";
export function getdetailpage() {
    return request({
        // url: '/home/data',
        url:'../static/lk1.JSON',
    })
}