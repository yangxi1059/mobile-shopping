import Vue from 'vue';
import axios from 'axios';

axios.setupInterceptors = (vm) => {
  
  console.log('setupInterceptors')
    
  // 推荐一个请求的拦截器
  axios.interceptors.request.use(function (config) {
    // 做点事 config = {header,params,data,method,}
    console.log('拦截器 go',vm.$data.bLoading)
    vm.$data.bLoading=true;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // 添加一个响应的拦截器
  axios.interceptors.response.use(function (response) {
    // 做点事
    vm.$data.bLoading=false;
    console.log('拦截器 back',vm.$data.bLoading)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
}






Vue.prototype.$axios=axios;
window.axios = axios;

export default axios;