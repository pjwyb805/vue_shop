import { methods, PATH} from './config';
import { request } from './core';
//入口文件 引入核心文件和配置文件  
//封装一个函数  返回请求方式和请求地址并传参
//最后一步把入口文件抛出在main.js全局注册 
const netlist = {
    login(params) {
        return request(methods.POST, PATH.login, params)
    },
    

}
export default netlist;
