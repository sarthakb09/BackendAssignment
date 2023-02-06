const { createUser, checkUser, addFile, getFiles, removeFile, getFile } = require('../model/model');
const { generateCode } = require('../middleware/middleware');

exports.register = async (userData) => {
  const user = await createUser(userData);
  return user;
};

exports.login = async (userData) => {
  const user = await checkUser(userData);
  if (!user) throw new Error('Invalid username or password');

  const token = 'YOUR_JWT_TOKEN';
  return token;
};

exports.uploadFile = async (file, data) => {
  const code = generateCode();
  const fileData = { ...data, code };
  const uploadedFile = await addFile(fileData);
  return uploadedFile;
};

exports.viewFiles = async () => {
  const files = await getFiles();
  return files;
};

exports.deleteFile = async (id) => {
  const file = await removeFile(id);
  return file;
};

exports.downloadFile = async (id) => {
  const file = await getFile(id);
  return file;
};