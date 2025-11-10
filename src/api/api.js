import axios from 'axios';

// 状态码
const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log('语义有误');
      break
    case 401:
      console.log('服务器认证失败');
      break
    case 403:
      console.log('服务器拒绝访问');
      break
    case 404:
      console.log('地址错误');
      break
    case 500:
      console.log('服务器遇到意外');
      break
    case 502:
      console.log('服务器无响应');
      break
    default:
      console.log(info);
      break
  }
}

// 封装接口，也就是整合接口，再多一个状态码处理
const request = axios.create({
  baseURL: 'http://localhost:7003/api/pbl',
  timeout: 5000 // 超时时间
});

// 请求拦截器 - 在发送请求前做些什么
request.interceptors.request.use(
  config => {
    // 可以在这里添加token等
    console.log('发送请求:', config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
  },
  error => {
    const { response } = error
    // 错误处理
    errorHandle(response.status, response.info)
  }
);

// 整合所有接口
const api = {
  addUserJob: (data) => request.post('/addUserJob', data),
  deleteUserByName: (data) => request.post('/deleteUserByName', data),
  updateUserJob: (data) => request.post('/updateUserJob', data),
  getAllUsers: () => request.get('/getAllUsers'),
  deleteUser: (data) => request.post('/deleteUser', data),
  updateUser: (data) => request.post('/updateUser', data),

  // 查询功能
  leftSelect: () => request.post('/leftSelect'),
  rightSelect: () => request.post('/rightSelect'),
  countUsers: () => request.post('/countUsers')
};

export default api;