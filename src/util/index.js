const Util = {};

// 获取上一天日期
Util.getToday = function (timestamp = (new Date()).getTime()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10
      ? '0' + date.getDate()
      : date.getDate();
  return year + '' + month + '' + day;
};

export default Util;