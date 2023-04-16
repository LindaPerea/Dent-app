const catchError = require("../utils/catchError");

const verifyIsTheSameUser = catchError(async (req, res, next) => {
  try {
    req.isPublicURL = true;
    const user = req.user
    const { userId: id } = req.params;
    const { userId } = req.body;
    if (id === user.id || userId === user.id) {
      user.isTheSameUser = true;
    }
    next();
  } catch (error) {
    throw error
  }
});


module.exports = {
  verifyIsTheSameUser
}