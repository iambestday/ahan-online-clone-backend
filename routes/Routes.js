const bcrypt = require ("bcrypt");
const joi = require ("joi");
const express = require("express");
const Router = express.Router();
const userModel = require("../models/userModel");

Router.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered!!!" });
    } else {
      const user = new userModel({
        email: email,
        password: password
      });
      user.save(err => {
        if (err) {
          console.log(err);
          res.send(err)
        } else {
          res.send({ message: "Successfully Registered!!!" })
        }
      }
      );
    }
  });
});



  Router.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Logged In!!!", user: user });
        } else {
          res.send("Incorrect Password!!!");
        }
      } else {
        res.send({ message: "User not registered" });

      }
    })
  });

  module.exports = Router;
