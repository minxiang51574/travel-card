import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/user-manage',
  name: 'User-manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '用户管理',
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
        locale: '用户列表',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default LIST;
