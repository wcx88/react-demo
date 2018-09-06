import axios from 'axios'
import Qs from 'qs'


// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.2.66:8088/examine/', // api的base_url
    timeout: 60000, // 请求超时时间
    transformRequest: [
        function (data) {
            let token = sessionStorage.getItem('token');
            data['sessionId'] = token;
            if (data !== undefined) {
                data = Qs.stringify(data);
            }
            return data;
        }
    ],
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});


// request拦截器
service.interceptors.request.use(config => {
    const token = '';
    if (token) {
        // config.headers['X-Token'] =  token;// 让每个请求携带自定义token 请根据实际情况自行修改
        // 设置sessionKey
        config.params = {token}; // todo bug
    }
    return config
}, error => {
    // Do something with request error
    console.log(error);// for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为负数是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code < 0) {
            console.log(' bus err ' + res.msg);// for debug


            // 999:Token 过期了;
            if (res.code === 999) {
                console.log('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出')
            }
            return Promise.reject(Error(res.msg))
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error);// for debug
        return Promise.reject(error)
    }
);

export default service
