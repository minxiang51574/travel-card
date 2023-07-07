/*
 * @Author: Mx
 * @Date: 2023-06-26 22:00:56
 * @Description:
 */
import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post('/api/user/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.get<RouteRecordNormalized[]>('/api/user/menu');
}
