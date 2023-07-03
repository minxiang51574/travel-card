/*
 * @Author: Mx
 * @Date: 2023-06-26 22:00:56
 * @Description:
 */
import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
/** simple */
import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeCardList from '@/views/list/card/locale/zh-CN';

/** simple end */
import localeSettings from './zh-CN/settings';

export default {
  'menu.cardManage': '旅游卡管理',
  'menu.cardManage.list': '旅游卡列表',
  'menu.proxyManage': '代理管理',
  'menu.proxyManage.list1': '一级代理',
  'menu.proxyManage.list2': '二级代理',
  'menu.userManage': '用户管理',
  'menu.userManage.list': '用户列表',

  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',

  'menu.server.monitor': '实时监控-服务端',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  /** simple */
  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  /** simple end */
};
