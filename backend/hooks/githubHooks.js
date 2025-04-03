const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

let isDeploying = false; // Tambahkan flag untuk mencegah eksekusi berulang

app.post("/webhook", (req, res) => {
  if (isDeploying) {
    console.log("Deployment is already in progress. Ignoring new request.");
    return res.status(429).send("Deployment is already in progress.");
  }

  isDeploying = true; // Set flag jadi true

  console.log("Webhook received, executing deploy.sh...");

  exec(
    "bash /var/www/html/deployment-noted/deploy.sh",
    (err, stdout, stderr) => {
      isDeploying = false; // Reset flag setelah selesai

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
