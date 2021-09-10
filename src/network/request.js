// ***完整***
import axios from 'axios'
export function request(config) {
        const instance = axios.create({
            // baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
    instance.interceptors.request.use(
        config => {
            // console.log(config);
            return config
        },
        err => { }
    )
    instance.interceptors.response.use(
        config => {
            // console.log(config);
            return config
        },
        err => { }
    )
     return instance(config)
}


// import axios from 'axios'
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }
    
// export function request(config) {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
    
    //全局拦截器
    // axios.interceptors

    //4个：请求成功、失败，响应成功、失败
    //这里如果拦截，还需要ruturn 返回一下，反之，不用return
//     instance.interceptors.request.use(
//         config => {
//             console.log(config);
//     //一般请求时，1.小圈圈转圈，2.或者携带内容，都在这里处理 3.满足登入等等
//             return config
//         },
//         err => { }
//     )
//     instance.interceptors.response.use(
//         config => {
//         console.log(config.data);
//              return config
//     },
//         err => { }
// )
//     return instance(config)
// }



