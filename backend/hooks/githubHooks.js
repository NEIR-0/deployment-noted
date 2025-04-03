const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook received, executing deploy.sh...");

  exec(
    "bash /var/www/html/deployment-noted/backend/deploy.sh",
    (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        return res.status(500).send(stderr);
      }
      console.log(`Success: ${stdout}`);
      res.status(200).send(stdout);
    }
  );
});

app.listen(3001, () => console.log("Webhook listener running on port 3001"));
