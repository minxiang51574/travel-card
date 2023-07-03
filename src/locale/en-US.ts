/*
 * @Author: Mx
 * @Date: 2023-07-03 10:59:30
 * @Description:
 */
import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';
/** simple */
import localeMonitor from '@/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';
import localeCardList from '@/views/list/card/locale/en-US';

/** simple end */
import localeSettings from './en-US/settings';

export default {
  'menu.cardManage': 'cardManage',
  'menu.cardManage.list': 'cardManage-list',
  'menu.proxyManage': 'proxyManage',
  'menu.proxyManage.list1': 'proxyManage-list1',
  'menu.proxyManage.list2': 'proxyManage-list2',
  'menu.userManage':'userManage',
  'menu.userManage.list': 'userManage-list',

  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.arcoWebsite': 'Arco Design',
  'menu.server.list3': 'list3',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'card.manage': 'card manage',
  'card.list': 'card list',
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
