/*
 * @Author: Mx
 * @Date: 2023-06-26 22:00:56
 * @Description: 
 */
import Mock from 'mockjs';

import './user';
import './message-box';

import '@/views/dashboard/workplace/mock';
/** simple */
import '@/views/dashboard/monitor/mock';

import '@/views/list/card/mock';
import '@/views/list/search-table/mock';

/** simple end */

Mock.setup({
  timeout: '600-1000',
});
