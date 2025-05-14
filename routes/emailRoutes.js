const express = require('express');
const router = express.Router();

const {
  generateEmail,
  getAllEmails,
  getEmailById
} = require('../controllers/emailController');

router.post('/generate-email', generateEmail);
router.get('/emails', getAllEmails);
router.get('/email/:id', getEmailById);

module.exports = router;
