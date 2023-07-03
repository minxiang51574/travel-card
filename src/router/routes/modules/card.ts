/*
 * @Author: Mx
 * @Date: 2023-07-02 17:22:09
 * @Description:
 */
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/card-manage',
  name: 'Card-manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '旅游卡管理',
    requiresAuth: false,
    icon: 'icon-list',
    order: 1,
  },
  children: [
    {
      path: 'card-list', 
      name: 'Card-list',
      component: () => import('@/views/card-manage/card-list.vue'),
      meta: {
        locale: 'menu.dashboard',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default LIST;
