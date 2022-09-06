
'use strict';

module.exports = () => {
  return (req, res, next) => {
    const num = req.query.num * 1;
    if (typeof num == 'number' && !isNaN(num)) {
      console.log('num is valid');
      next();
    } else {
      next(`(${req.query.num}) is not a number`);
      console.log('num is not valid');
    }
  }
}
