import router from "@/router";
import axios from "axios";
import { ElMessage } from "element-plus";
import { RouterLink, useRouter } from "vue-router";
// 创建单个实例对象
export const instance = axios.create({
  timeout: 10000,
  baseURL: import.meta.env.DEV
    ? "https://techouse.top"
    : "https://techouse.top",
});

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.detail) {
      ElMessage.success(res.data.detail);
    }
    return res;
  },
  (err) => {
    if (err.response.data.detail) {
      ElMessage.error(err.response.data.detail);
      if (err.response.data.detail.includes("AuthenticationFailed")) {
        window.location.href = "/#/login";
      }
      return Promise.reject(err);
    }
  }
);

// 请求拦截器
instance.interceptors.request.use((config) => {
  config.headers.Authorization = "JWT " + localStorage.getItem("token");
  return config;
});

export const get = (url, config = {}) => instance.get(url, config);
export const post = (url, data = {}, config = {}) =>
  instance.post(url, data, config);
export const put = (url, data = {}, config = {}) =>
  instance.put(url, data, config);
export const patch = (url, data = {}, config = {}) =>
  instance.patch(url, data, config);
export const del = (url, config = {}) => instance.delete(url, config);
