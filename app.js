const express = require("express");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Route
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
            }

            .container {
                padding: 40px;
                text-align: center;
            }

            h1 {
                font-size: 3rem;
                margin-bottom: 10px;
            }

            p {
                font-size: 1.2rem;
                margin-bottom: 20px;
            }

            button {
                padding: 12px 20px;
                font-size: 16px;
                border: none;
                border-radius: 5px;
                background-color: #ff7a18;
                color: white;
                cursor: pointer;
                transition: 0.3s;
            }

            button:hover {
                background-color: #e56700;
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
            <h2>My Node.js Web App</h2>
        </header>

        <div class="container">
            <h1>Welcome 🚀</h1>
            <p>This is a simple styled web page running on port 3000.</p>
            <button onclick="showMessage()">Click Me</button>
        </div>

        <footer>
            <p>© 2026 My Web App</p>
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
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
