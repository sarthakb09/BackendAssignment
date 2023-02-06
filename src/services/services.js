// const { createUser, checkUser, addFile, getFiles, removeFile, getFile } = require('../model/model');
// const { generateCode } = require('../middleware/middleware');

// exports.register = async (userData) => {
//   const user = await createUser(userData);
//   return user;
// };

// exports.login = async (userData) => {
//   const user = await checkUser(userData);
//   if (!user) throw new Error('Invalid username or password');

//   const token = 'YOUR_JWT_TOKEN';
//   return token;
// };

// exports.uploadFile = async (file, data) => {
//   const code = generateCode();
//   const fileData = { ...data, code };
//   const uploadedFile = await addFile(fileData);
//   return uploadedFile;
// };

// exports.viewFiles = async () => {
//   const files = await getFiles();
//   return files;
// };

// exports.deleteFile = async (id) => {
//   const file = await removeFile(id);
//   return file;
// };

// exports.downloadFile = async (id) => {
//   const file = await getFile(id);
//   return file;
// };

const { createUser, checkUser, addFile, getFiles, removeFile, getFile } = require('../model/model');
const { generateCode } = require('../middleware/middleware');

// Function to register a new user
exports.register = async (userData) => {
  // Call `createUser` from the `model` to create a new user
  const user = await createUser(userData);

  // Return the created user
  return user;
};

// Function to log in a user
exports.login = async (userData) => {
  // Call `checkUser` from the `model` to verify the user credentials
  const user = await checkUser(userData);

  // If the user credentials are invalid, throw an error
  if (!user) throw new Error('Invalid username or password');

  // Generate a JWT token
  const token = 'YOUR_JWT_TOKEN';

  // Return the generated token
  return token;
};

// Function to upload a file
exports.uploadFile = async (file, data) => {
  // Generate a unique code for the file
  const code = generateCode();

  // Create a new file object with the provided data and the generated code
  const fileData = { ...data, code };

  // Call `addFile` from the `model` to add the file to the database
  const uploadedFile = await addFile(fileData);

  // Return the uploaded file
  return uploadedFile;
};

// Function to view all files
exports.viewFiles = async () => {
  // Call `getFiles` from the `model` to retrieve all files from the database
  const files = await getFiles();

  // Return the retrieved files
  return files;
};

// Function to delete a file
exports.deleteFile = async (id) => {
  // Call `removeFile` from the `model` to delete the file with the given id from the database
  const file = await removeFile(id);

  // Return the deleted file
  return file;
};

// Function to download a file
exports.downloadFile = async (id) => {
  // Call `getFile` from the `model` to retrieve the file with the given id from the database
  const file = await getFile(id);

  // Return the retrieved file
  return file;
};
