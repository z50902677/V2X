/**
 * @description 前端页面定义的接口调用
 * @file api.js
 * @author    zhaohang
 * @date      2017/12/26
 *
 * @copyright @Navinfo, all rights reserved.
 */

import axios from 'axios';
import config from '../config/config';
// axios的全局配置;
const baseInstance = axios.create();

baseInstance.defaults.baseURL = config.renderServiceUrl;
baseInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

// 查询功能
const getSvrData = () => {
  return baseInstance.get('svr/whole')
};

export {
  getSvrData,
};
