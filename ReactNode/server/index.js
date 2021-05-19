const express = require('express');
const mongoose = require('mongoose');
const {createServer} = require('http');
const app = express();
const port = 3000;

mongoose
  .connect(
    'mongodb+srv://Stepan:ASDzxc09200@reactnode.wemmt.mongodb.net/ReactNode?retryWrites=true&w=majority',
    {useNewUrlParser: true},
  )
  .then(() => console.log('MongoDb connect'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model('Users', UserSchema);

app.get('/', (req, res) => {
  Users.find({}, function (err, docs) {
    if (err) return console.log(err);

    res.send(JSON.stringify(docs));
  });
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));
