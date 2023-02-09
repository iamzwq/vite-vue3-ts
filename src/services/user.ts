import request from "./request";
import { API_LOGIN, API_USERINFO } from "@/constants/api";

export interface LoginParams {
  UserName: string;
  Password: string;
}

const loginApi = (data: LoginParams) => {
  return request.post(API_LOGIN, data);
};

const userInfoApi = () => {
  return request.get<string>(API_USERINFO);
};

const userApi = {
  loginApi,
  userInfoApi,
};

export default userApi;
