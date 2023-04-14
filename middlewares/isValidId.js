const { isValidObjectId } = require("mongoose");

const { HtttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HtttpError(404, `${id} invalid format`));
  }
  next();
};

module.exports = isValidId;
