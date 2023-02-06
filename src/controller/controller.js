// const { register, login, uploadFile, viewFiles, deleteFile, downloadFile } = require('../services/services');
// const { validateUser, validateUpload } = require('../validation/validation');

// exports.register = async (req, res) => {
//   const { error } = validateUser(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   try {
//     const user = await register(req.body);
//     res.send(user);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.login = async (req, res) => {
//   const { error } = validateUser(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   try {
//     const token = await login(req.body);
//     res.send(token);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.uploadFile = async (req, res) => {
//   const { error } = validateUpload(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   try {
//     const file = await uploadFile(req.file, req.body);
//     res.send(file);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.viewFiles = async (req, res) => {
//   try {
//     const files = await viewFiles();
//     res.send(files);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.deleteFile = async (req, res) => {
//   try {
//     const file = await deleteFile(req.params.id);
//     res.send(file);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.downloadFile = async (req, res) => {
//   try {
//     const file = await downloadFile(req.params.id);
//     res.send(file);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const { register, login, uploadFile, viewFiles, deleteFile, downloadFile } = require('../services/services');
const { validateUser, validateUpload } = require('../validation/validation');

// Export function to handle user registration
exports.register = async (req, res) => {
  // Validate user input
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // Call the register function from services
    const user = await register(req.body);
    res.send(user);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};

// Export function to handle user login
exports.login = async (req, res) => {
  // Validate user input
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // Call the login function from services
    const token = await login(req.body);
    res.send(token);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};

// Export function to handle file upload
exports.uploadFile = async (req, res) => {
  // Validate upload input
  const { error } = validateUpload(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // Call the uploadFile function from services
    const file = await uploadFile(req.file, req.body);
    res.send(file);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};

// Export function to handle viewing of files
exports.viewFiles = async (req, res) => {
  try {
    // Call the viewFiles function from services
    const files = await viewFiles();
    res.send(files);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};

// Export function to handle deleting of files
exports.deleteFile = async (req, res) => {
  try {
    // Call the deleteFile function from services
    const file = await deleteFile(req.params.id);
    res.send(file);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};

// Export function to handle downloading of files
exports.downloadFile = async (req, res) => {
  try {
    // Call the downloadFile function from services
    const file = await downloadFile(req.params.id);
    res.send(file);
  } catch (error) {
    // Handle error if there is any
    res.status(400).send(error.message);
  }
};
