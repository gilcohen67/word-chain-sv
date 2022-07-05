import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(['http://localhost:3000']))

app.get('/', (req, res) => {
  res.status(200).send('server reached')
});
app.get('/words', (req, res) => {
  res.status(200)
  res.send({
    words: ['hello', 'world', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings', 'Greetings']
  })
})

app.listen('8080', (err) => {
  if (err) console.log('error with server connection.', err);
  else console.log('listening on port 8080');
})