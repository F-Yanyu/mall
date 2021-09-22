import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 2.拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 记得拦截下来的信息，要return出去
    return config
  }), err => {
    console.log(err);
    }
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res.data);
    return res.data
  }),err=> {
    console.log(err);
  }


  // 3.发送真的网络请求
    return instance(config)

}
