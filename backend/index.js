const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const users = require('./models/userSchema');

app.use(cors());
app.use(express.json());

// const DB = 'mongodb://localhost:27017/loginRegister';

// ==========database connection========
mongoose
  .connect('mongodb://localhost:27017/loginRegister', {})
  .then(() => {
    console.log('database connection established');
  })

  .catch((err) => {
    console.log('no connection');
  });

// =======  Routes   =======

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email: email });
  if (user) {
    if (password === user.password) {
      res.send({ message: "login successful",user:user });
    } else {
      res.send({ message: "password did not match"})
    }
  } else {
    res.send({ message: "user not registered"})
  }

  
});

app.post('/register', async(req, res) => {
  const { name, email, password } = req.body;
  const user =await users.findOne({ email: email });
    if (user) {
        res.status(422).json('this  user is already present');
    } else {
        const adduser = new users({
            name,
            email,
            password
        
        })
     await adduser.save();
      res.status(201).json(adduser);
     }
});

app.listen(5000, () => {
  console.log('you are connected');
});
