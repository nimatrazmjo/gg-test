import * as http from 'http';
import { app } from './src/app';

const PORT = process.env.PORT || 4000;

const server = http.createServer(app)

server.listen(PORT,() => {
  console.info('Empire service is listening on port', PORT)
});