/*
 * @Description:通用方法
 * @version:
 * @Author: camus
 * @Date: 2021-06-20 16:01:47
 * @LastEditors: camus
 * @LastEditTime: 2021-06-20 16:06:27
 */
// 去除掉为0的特例，当value为null和undefined时为true，0的时候为false
export const isFalsy = (value) => (value === 0 ? false : !value);
/**
 * @description: 用于格式化请求对象，去除value为空的请求key。防止后端误判
 * @param {*} object
 */
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
};
