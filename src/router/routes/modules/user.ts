/*
 * @Author: Mx
 * @Date: 2023-07-03 10:59:30
 * @Description:
 */
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/user-manage',
  name: 'User-manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.userManage',
    requiresAuth: false,
    icon: 'icon-list',
    order: 3,
  },
  children: [
    {
      path: 'user-list',
      name: 'User-list',
      component: () => import('@/views/user-manage/user-list.vue'),
      meta: {
        locale: 'menu.userManage.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
