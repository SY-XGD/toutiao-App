// 请求模块
import axios from 'axios'

const request = axios.create({
  // 接口基准路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器
// 响应拦截器

export default request
