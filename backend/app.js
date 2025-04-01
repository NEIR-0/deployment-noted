require("dotenv").config(); // Memuat variabel lingkungan dari .env

const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const port = process.env.PORT || 3000;
const user = require("./router/user");

// Middleware
app.use(cors()); // Gunakan CORS dengan konfigurasi default
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/user", user);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
