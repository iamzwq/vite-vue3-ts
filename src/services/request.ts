import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  RawAxiosRequestConfig,
} from "axios";

interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

class Request {
  private instance: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.url !== "/login") {
          const token = localStorage.getItem("token");
          if (token) config.headers!["Auth-Token"] = token;
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (err) => {
        // return err; // 直接return err会走到then方法
        return Promise.reject(err);
      }
    );
  }

  request<T = any>(config: RawAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<ApiResponse<T>>>(config)
        .then((res) => {
          const result = res.data;
          const { code, data } = result;
          if (code !== 200) {
            // message.error(data.message); // 统一错误提示：业务接口错误
            reject(result); // 这里reject出去是方便业务场景中需要再次处理错误
          } else {
            resolve(data);
          }
        })
        .catch((err) => {
          // message.error(err.message); // 统一错误提示：axios 错误
          reject(err); // 这里reject出去是方便业务场景中需要再次处理错误
        });
    });
  }

  get<T = any>(url: string, config?: RawAxiosRequestConfig) {
    return this.request<T>({ method: "GET", url, ...config });
  }

  post<T = any>(url: string, data?: any, config?: RawAxiosRequestConfig) {
    return this.request<T>({ method: "POST", url, data, ...config });
  }
}

const request = new Request({
  timeout: 20000,
  baseURL: "http://xxx.xxx.xxx",
});

export default request;
