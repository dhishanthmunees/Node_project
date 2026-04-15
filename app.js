const express = require("express");
const app = express();
const PORT = 3000;

// Route for homepage
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Web Page</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: #333;
        }

        header {
          background: #222;
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 24px;
        }

        .container {
          padding: 40px;
          text-align: center;
        }

        h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          background-color: #ff7a18;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background-color: #e06612;
        }

        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          background: #222;
          color: white;
          text-align: center;
          padding: 10px;
        }
      </style>
    </head>
    <body>

      <header>
        My Awesome Web Page
      </header>

      <div class="container">
        <h1>Welcome 🚀</h1>
        <p>This page is served using Node.js and Express with inline CSS.</p>
        <button onclick="showMessage()">Click Me</button>
      </div>

      <footer>
        © 2026 My Website
      </footer>

      <script>
        function showMessage() {
          alert("Hello! Your app is working perfectly 🎉");
        }
      </script>

    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});

server.listen(4000);
