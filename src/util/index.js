import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');

// 获取今天日期
const getToday = () => moment().format('YYYYMMDD');

// 获取某一天日期
const getDay = (day = getToday()) => moment(day, 'YYYYMMDD');

// 获取某一天之前的日期
const getDayBefore = (d, origin = getToday()) => getDay(origin).subtract(d, 'days').format('YYYYMMDD');

// 日期转换为星期
const formatDate = (day) => {
  const date = getDay(day);
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return date.format(`MM 月 DD 日 ${week[date.day()]}`);
}

// 时间戳格式化
const formatTime = timestamp => moment.unix(timestamp).format('MM-DD HH:mm');

export { getToday, getDayBefore, formatDate, formatTime };