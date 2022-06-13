import { Request, Response } from 'express';

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || '8080';

//socket.io integration
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
  cors: 'https://planout-one.vercel.app/',
  methods: ['GET', 'POST', 'PUT'],
});

io.on('connection', (socket: any) => {
  console.log('user socket id:', socket.id);
  socket.on('taskCreated', (data: any) => {
    socket.broadcast.emit('newTask', data);
  });
  socket.on("eventCreated", (data: any) => {
    socket.broadcast.emit('newEvent', data);
  });
  socket.on("taskCompleted", (data: any) => {
    socket.broadcast.emit('taskComplete', data);
  })
  
});

const middleware = require('./middleware/index');

const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const eventUserRoutes = require('./routes/event_users');
const friendRoutes = require('./routes/friends');

function solveCorsIssue(req: Request, res: Response, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
}

app.use(solveCorsIssue);
app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);
app.use('/tasks', taskRoutes);
app.use('/events', eventRoutes);
app.use('/users', userRoutes);
app.use('/eventusers', eventUserRoutes);
app.use('/friends', friendRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

server.listen(PORT, () => {
  console.log(`Your server is single and ready to mingle at port ${PORT}`);
});
