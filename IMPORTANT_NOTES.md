# IMPORTANT NOTES: JSON AND HEADERS RELATIONSHIP

To ensure signup and login work correctly, follow these rules:

1. Adding Headers for JSON and Why it is Mandatory
When sending JSON data through Postman or any frontend tool like React Native, Fetch, or Axios, include this Header:
Key: Content-Type
Value: application/json

The express.json code in the server identifies the incoming data using this header and places it inside request.body. If this header is missing, request.body will remain empty and the action will fail.

---

2. Automatic Restarts Nodemon
To automatically detect code changes, use this command:
npm run dev

This uses nodemon, so you do not need to manually restart the server every time.

---

3. Authorization Header and Bearer Token 
To access protected data, add these to the Postman Headers:
Key: Authorization
Value: Bearer YOUR_TOKEN_HERE

Why do we use this?
Authorization is the envelope for the ticket. The Middleware looks exactly here.
The Bearer keyword indicates the ticket is a valid token. The code removes this word to extract and verify the actual token string.

Summary: Authorization is the slot, Bearer is the ticket label!

---

