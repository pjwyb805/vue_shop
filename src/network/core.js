import axios from "axios";
import { methods } from './config'
import { Toast } from "vant";
import store from '../store/index'
// const {baseUrl}=require('../config/env.'+process.env.NODE_ENV+".js");
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/private/v1/',//请求头
  // baseURL:baseUrl,
  timeout: 10000,
});
// https://api.it120.cc/small4/shop/goods/list
// https://api.it120.cc/small4/user/m/bind-mobile

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    // });
    console.log(store.state.token)
    if(store.state.token){
      config.headers.token = store.state.token
    }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // Toast.clear
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



export function request(method, url, params) {
  switch (method) {
    case methods.GET:
      return GET(url, params)
    case methods.POST:
      return POST(url, params)
    case methods.PATCH:
      return PATCH(url, params)
  }
}
//
//1、封装一个axios实例
//2、封装 一个函数 判断是get请求还是post请求
//封装请求方式
function GET(url, params) {
  return instance.get(url, params)
}

function POST(url, params) {
  return instance.post(url, params)
}
function PATCH(url, params) {
  return instance.patch(url, params)
}
