const User = require('../models/User');
const catchError = require('../utils/catchError');

const verifyAdministrator = catchError(async (req, res, next) => {
  try {
    const user = req.user;
    const { isTheSameUser, id } = req.user;
    const isPublicURL = req.isPublicURL;
    const result = await User.findByPk(id);
    if (!result) return res.status(404);
    const type = result.profileType;
    if (isPublicURL) {
      if (type === 0) user.isAdministrator = true;
      if (type === 0 || isTheSameUser) {
        return next();
      }
      return res.status(403).json({ message: 'Unauthorized' });
    }
    if (type === 0) return next();
    res.status(403).json({ message: 'Unauthorized', details: 'is not admin' });
  } catch (error) {
    next(error);
  }
});
// verifyIsTheSameUser
module.exports = {
  verifyAdministrator,
};
