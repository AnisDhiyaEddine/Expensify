const moment = jest.requireActual('moment');

module.exports = (timeStamp = 0) => {
  return moment(timeStamp);
};
 