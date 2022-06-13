import axios from 'axios'
import rules from '@/constant/rules'

const request = axios.create()

const requestedMap = new Map()
const threshold = 3000

request.interceptors.request.use(
  function (config) {
    if (rules.includes(config.url)) {
      const prevRequestTime = requestedMap.get(config.url)

      // 第一次记录请求时间
      if (!prevRequestTime) {
        requestedMap.set(config.url, new Date())
        return config
      }
      if (new Date() - prevRequestTime > threshold) {
        requestedMap.set(config.url, new Date())
        return config
      }

      return Promise.reject('请求过于频繁')
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default request
