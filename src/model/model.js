const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw error;
  }
};

exports.checkUser = async (userData) => {
  try {
    return await User.findOne(userData);
  } catch (error) {
    throw error;
  }
};

const fileSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: Buffer, required: true },
  code: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
});

const File = mongoose.model('File', fileSchema);

exports.addFile = async (fileData) => {
  try {
    const file = new File(fileData);
    return await file.save();
  } catch (error) {
    throw error;
  }
};

exports.getFiles = async (userId) => {
  try {
    return await File.find({ userId });
  } catch (error) {
    throw error;
  }
};

exports.getFile = async (id) => {
  try {
    return await File.findById(id);
  } catch (error) {
    throw error;
  }
};

exports.removeFile = async (id) => {
  try {
    return await File.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
