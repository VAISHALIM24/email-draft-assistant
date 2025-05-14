const Email = require('../models/Email');

const generateEmail = async (req, res) => {
  const { prompt } = req.body;

  try {
    // ✨ Simulated realistic professional email
    const emailDraft = `Dear [Name], I hope you're doing well. I would like to ${prompt}. Please let me know if that works for you. Best regards, [Your Name]`;

    const email = new Email({ prompt, emailDraft });
    await email.save();

    res.status(200).json({ emailDraft });

  } catch (error) {
    console.error('Error in generateEmail:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  generateEmail,
  getAllEmails: async (req, res) => {
    const emails = await Email.find().sort({ createdAt: -1 });
    res.json(emails);
  },
  getEmailById: async (req, res) => {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ error: 'Not found' });
    res.json(email);
  }
};
