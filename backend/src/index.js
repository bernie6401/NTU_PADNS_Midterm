import path, { dirname } from "path";
import { fileURLToPath } from "url";
import rootRouter from "./routes";
import express from "express";
import birds from "./practice_birds";
import { prisma } from "./adapters";
const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "../../frontend/dist");
const port = process.env.PORT || 8000;
const app = express();

// app.use("/birds", birds);
// app.post("/", function (req, res) {
//   res.send("Got a POST request");
// });


app.use(express.static(frontendDir));
app.use(rootRouter);
app.get("*", (req, res) => { // Keep as the last route
  if (!req.originalUrl.startsWith("/api")) {
    return res.sendFile(path.join(frontendDir, "index.html"));
  }
  return res.status(404).send();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("exit", async () => {
  await prisma.$disconnect();
});