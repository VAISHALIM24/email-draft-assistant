
# 📧 Gemini-Powered Email Draft Assistant (Backend Only)

This is a Node.js + Express backend application that uses the Gemini API (simulated) to generate professional email drafts based on user prompts. All emails are stored in a MongoDB database and retrievable via RESTful API endpoints.

---

## 🚀 Features

- Generate professional emails from brief input using Gemini (simulated)
- Save email drafts with timestamps
- Retrieve all drafts or a specific one by ID
- REST API tested with Postman

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose (ODM)
- Axios (for API calls)
- Dotenv (for managing API keys)
- Postman (for testing)

---

## 📁 Folder Structure

```
email-draft-assistant/
│
├── controllers/             # Route logic
│   └── emailController.js
├── models/                  # Mongoose schema
│   └── Email.js
├── routes/                  # Express routes
│   └── emailRoutes.js
├── .env                     # Environment variables
├── .gitignore               # Git exclusions
├── package.json             # Project metadata and dependencies
├── server.js                # App entry point
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repo-url>
cd email-draft-assistant
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/emailAssistant?retryWrites=true&w=majority
GEMINI_API_KEY=your_gemini_api_key_here
```

> Note: `GEMINI_API_KEY` is not used in the current simulation setup but reserved for future real API integration.

### 4. Run the server
```bash
npm run dev
```

---

## 🔌 API Endpoints

### 📨 POST `/api/generate-email`
Generate a professional email and store it.

**Request Body:**
```json
{
  "prompt": "reschedule meeting to next Monday"
}
```

**Response:**
```json
{
  "emailDraft": "Dear [Name], I hope you're doing well. I would like to reschedule our meeting to next Monday. Please let me know if that works for you. Best regards, [Your Name]"
}
```

---

### 📬 GET `/api/emails`
Returns all saved email drafts.

**Response:**
```json
[
  {
    "_id": "abc123...",
    "prompt": "reschedule meeting...",
    "emailDraft": "Dear [Name]...",
    "createdAt": "2025-05-13T12:34:56.000Z",
    "__v": 0
  }
]
```

---

### 📄 GET `/api/email/:id`
Returns one email draft by ID.

---

## 🧪 Postman Testing

You can test all endpoints using [Postman](https://www.postman.com/).  
Export your collection or import the example JSON.

---

## ✅ Deliverables Recap

- ✅ Working Express app (can run locally)
- ✅ `.env` for API key
- ✅ REST endpoints with email generation logic
- ✅ MongoDB integration (Atlas)
- ✅ Postman tested
- ✅ Sample MongoDB entries
- ✅ This README

---

## 📌 Notes

- Replace the fake Gemini response with a real API call once available.
- Handle errors and validation as needed for production.

---

## 📬 Author

**Your Name**  
DevVoid Assignment Project
