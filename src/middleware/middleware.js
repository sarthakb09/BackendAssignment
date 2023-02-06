const jwt = require('jsonwebtoken');
const User = require('../model/model');

exports.verifyToken = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

exports.validateUpload = (uploadData) => {
  if (!uploadData) {
    throw new Error('No file was selected for upload.');
  }

  if (!uploadData.mimetype.startsWith('image')) {
    throw new Error('Only images are allowed to be uploaded.');
  }

  if (uploadData.size > 1000000) {
    throw new Error('File size must not exceed 1 MB.');
  }
};

exports.generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
