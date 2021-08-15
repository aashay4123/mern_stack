const { ObjectId } = require("mongoose").Types;

// model schema
exports.setStringType = (maxLength) => ({
  type: String,
  maxlength: maxLength,
  trim: true,
});

// Global Error handling
exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// helps you allow object
exports.filterObj = (obj, ...allowFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// helps you add Array FIXME: cannot add numbers uniquely please update
exports.addArray = (arr, addFields) => {
  if (!arr) arr = [];
  let sk = addFields.split(",");
  sk.map((value) => arr.push(value.trim()));
  let unique = [...new Set(arr)];
  return unique;
};

exports.addArrayNum = (arr) => {
  let unique = [];
  arr.map((value) => {
    if (value) unique.push(ObjectId(value));
  });
  return unique;
};

exports.addArrayProject = (projectObj, addId) => {
  let tmp = [];
  let unique = [];

  tmp.push(addId);
  if (projectObj)
    projectObj.map((project) => {
      if (!tmp.includes(String(project._id))) {
        if (project !== undefined) tmp.push(String(project._id));
      }
    });

  tmp.map((value) => {
    if (!unique.includes(ObjectId(value))) {
      if (value !== undefined) unique.push(ObjectId(value));
    }
  });
  return unique;
};

exports.delArrayNum = (arr, deleteId) => {
  if (!arr) arr = [];
  const index = arr.indexOf(deleteId);

  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

exports.findDiff = (prev, update) => {
  let [added, removed] = [[], []];
  if (prev) {
    added = update
      .filter((item) => !prev.includes(item))
      .map((item) => String(item)); //Sanitize
    removed = prev
      .filter((item) => !update.includes(item))
      .map((item) => String(item)); //Sanitize
  } else added = update.map((item) => String(item)); //Sanitize
  return [added, removed];
};
