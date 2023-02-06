const express = require('express');
const router = express.Router();
const { register, login, uploadFile, viewFiles, deleteFile, downloadFile } = require('../controller/controller');

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Upload Route
router.post('/upload', uploadFile);

// View Files Route
router.get('/files', viewFiles);

// Delete Files Route
router.delete('/files/:id', deleteFile);

// Download Route
router.get('/download/:id', downloadFile);

module.exports = router;