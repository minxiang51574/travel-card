/*
 * @Author: Mx
 * @Date: 2023-07-02 17:12:33
 * @Description:
 */
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/proxy-manage',
  name: 'Proxy-manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '代理管理',
    requiresAuth: false,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'proxy-list-one',
      name: 'Proxy-list-one',
      component: () => import('@/views/proxy-manage/proxy-list-one.vue'),
      meta: {
        locale: '一级代理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'proxy-list-two',
      name: 'Proxy-list-two',
      component: () => import('@/views/proxy-manage/proxy-list-two.vue'),
      meta: {
        locale: '二级代理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
