# 🚨 IMPORTANT NOTES: JSON & HEADERS RELATIONSHIP

To process data (signup, login, etc.) correctly in this project, you **MUST FOLLOW THIS RULE**:

### 1. Adding Headers for JSON (MANDATORY!)
When sending **JSON** data to the server via Postman or any frontend tool (React Native, Fetch, Axios, etc.), you MUST include this **Header**:

*   **Key:** `Content-Type`
*   **Value:** `application/json`

### 2. Why is it Mandatory?
The `app.use(express.json());` code in our server looks for **this header information** to recognize the incoming data as a JSON object and place it inside `request.body`.

**If you don't add this header:**
*   The server will not recognize the incoming data.
*   `request.body` will be **empty (undefined)**.
*   Actions like signing up or logging in will **FAIL** because the data cannot be read.

---

**Summary:** If you send a package, you must put the label on it (`Content-Type: application/json`)! 🚀
