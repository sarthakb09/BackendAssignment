// const jwt = require('jsonwebtoken');
// const User = require('../model/model');

// exports.verifyToken = async (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

//     if (!user) {
//       throw new Error();
//     }

//     req.user = user;
//     req.token = token;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Please authenticate.' });
//   }
// };

// exports.validateUpload = (uploadData) => {
//   if (!uploadData) {
//     throw new Error('No file was selected for upload.');
//   }

//   if (!uploadData.mimetype.startsWith('image')) {
//     throw new Error('Only images are allowed to be uploaded.');
//   }

//   if (uploadData.size > 1000000) {
//     throw new Error('File size must not exceed 1 MB.');
//   }
// };

// exports.generateCode = () => {
//   return Math.floor(100000 + Math.random() * 900000);
// };

const jwt = require('jsonwebtoken');
const User = require('../model/model');

// Verify the token for authentication
exports.verifyToken = async (req, res, next) => {
  // Get the token from the header
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    // Decode the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Find the user based on the decoded information and token
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    // If user not found, throw error
    if (!user) {
      throw new Error();
    }

    // Attach the user and token to the request object
    req.user = user;
    req.token = token;
    // Call the next middleware
    next();
  } catch (error) {
    // Send 401 status with error message if token is not valid
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

// Validate the uploaded file
exports.validateUpload = (uploadData) => {
  // Check if file was selected for upload
  if (!uploadData) {
    throw new Error('No file was selected for upload.');
  }

  // Check if the file is an image
  if (!uploadData.mimetype.startsWith('image')) {
    throw new Error('Only images are allowed to be uploaded.');
  }

  // Check if the file size is within the allowed limit
  if (uploadData.size > 1000000) {
    throw new Error('File size must not exceed 1 MB.');
  }
};

// Generate a random 6-digit code
exports.generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
