const catchError = require('../utils/catchError');

const verifyIsTheSameUser = catchError(async (req, res, next) => {
  try {
    req.isPublicURL = true;
    const url = req.originalUrl;
    const user = req.user;
    const { id } = req.params;
    if (url.includes('/users')) req.params.userId = id;
    if(!id) req.params.userId = user.id;
    const { userId} = req.params;
    // const { userId } = req.body;
    if (String(userId) === String(user.id)) {
      user.isTheSameUser = true;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = {
  verifyIsTheSameUser,
};
