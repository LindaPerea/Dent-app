const catchError = require('../utils/catchError');

const verifyIsTheSameUser = catchError(async (req, res, next) => {
  try {
    req.isPublicURL = true;
    const url = req.originalUrl;
    const user = req.user;
    if (url.includes('/users')) req.params.userId = req.params.id;
    const { userId: id } = req.params;
    // const { userId } = req.body;
    if (id === String(user.id)) {
      user.isTheSameUser = true;
    }
    next();
  } catch (error) {
    throw error;
  }
});

module.exports = {
  verifyIsTheSameUser,
};
