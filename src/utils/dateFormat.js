import moment from 'moment';

export default (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    date = new Date();
  }

  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};
