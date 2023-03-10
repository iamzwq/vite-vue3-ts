import http from '@/utils/http'
import { API_LOGIN, API_USERINFO } from '@/constants/api'

export interface LoginParams {
  username: string
  password: string
}

const userApi = {
  login(params: LoginParams) {
    return http.post(API_LOGIN, params)
  },
  userInfo() {
    return http.get<string>(API_USERINFO)
  },
}

export default userApi
