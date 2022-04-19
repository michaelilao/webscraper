import express from 'express';

const app = express();
const port = 8080;

app.get('/', (_, res) => {
  res.status(200).send('Hi');
});

app.listen(port, () => console.log(`Running on port ${port}`));
