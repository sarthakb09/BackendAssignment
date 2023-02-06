const { register, login, uploadFile, viewFiles, deleteFile, downloadFile } = require('../services/services');
const { validateUser, validateUpload } = require('../validation/validation');

exports.register = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await register(req.body);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const token = await login(req.body);
    res.send(token);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.uploadFile = async (req, res) => {
  const { error } = validateUpload(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const file = await uploadFile(req.file, req.body);
    res.send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.viewFiles = async (req, res) => {
  try {
    const files = await viewFiles();
    res.send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = await deleteFile(req.params.id);
    res.send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const file = await downloadFile(req.params.id);
    res.send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
