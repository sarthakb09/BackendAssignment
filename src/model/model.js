// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// exports.createUser = async (userData) => {
//   try {
//     const user = new User(userData);
//     return await user.save();
//   } catch (error) {
//     throw error;
//   }
// };

// exports.checkUser = async (userData) => {
//   try {
//     return await User.findOne(userData);
//   } catch (error) {
//     throw error;
//   }
// };

// const fileSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   file: { type: Buffer, required: true },
//   code: { type: String, required: true, unique: true },
//   userId: { type: String, required: true },
// });

// const File = mongoose.model('File', fileSchema);

// exports.addFile = async (fileData) => {
//   try {
//     const file = new File(fileData);
//     return await file.save();
//   } catch (error) {
//     throw error;
//   }
// };

// exports.getFiles = async (userId) => {
//   try {
//     return await File.find({ userId });
//   } catch (error) {
//     throw error;
//   }
// };

// exports.getFile = async (id) => {
//   try {
//     return await File.findById(id);
//   } catch (error) {
//     throw error;
//   }
// };

// exports.removeFile = async (id) => {
//   try {
//     return await File.findByIdAndDelete(id);
//   } catch (error) {
//     throw error;
//   }
// };

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define User Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Function to create a new user
exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    // Save the user to the database
    return await user.save();
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};

// Function to check if a user exists
exports.checkUser = async (userData) => {
  try {
    // Find a user in the database with the given credentials
    return await User.findOne(userData);
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};

// Define File Schema
const fileSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: Buffer, required: true },
  code: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
});

// Create File Model
const File = mongoose.model('File', fileSchema);

// Function to add a new file
exports.addFile = async (fileData) => {
  try {
    const file = new File(fileData);
    // Save the file to the database
    return await file.save();
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};

// Function to get all files belonging to a user
exports.getFiles = async (userId) => {
  try {
    // Find all files in the database belonging to a user with the given userId
    return await File.find({ userId });
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};

// Function to get a file by id
exports.getFile = async (id) => {
  try {
    // Find a file in the database with the given id
    return await File.findById(id);
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};

// Function to remove a file by id
exports.removeFile = async (id) => {
  try {
    // Find and remove a file in the database with the given id
    return await File.findByIdAndDelete(id);
  } catch (error) {
    // Throw error if something goes wrong
    throw error;
  }
};
