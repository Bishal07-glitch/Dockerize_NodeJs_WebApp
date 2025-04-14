import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js with Docker version 2!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
