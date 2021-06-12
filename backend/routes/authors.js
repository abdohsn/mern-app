const express = require("express");
const AuthorModel = require("../models/authors");

const Router = express.Router();

Router.get("/", (request, response) => {
  console.log("listing authors");
  console.log(request.query);
  AuthorModel.find().then((authors) => response.json(authors));
  // response.send("here a list of authors")
});

Router.get("/:id", (request, response) => {
  const id = request.params.id;
  UserModel.find({ _id: id }, (err, data) => {
    if (!err) return response.json(data);
    response.send("error happend");
  });
  // response.send(`user with id = ${id}`)
});

Router.post("/", (request, response) => {
  console.log(request.body);
  const authorData = request.body;
  // create new instance form usermodel
  const authorInstance = new AuthorModel({
    name: authorData.name,
    img: authorData.img,
    dob: authorData.dob,
  });
  console.log(authorInstance);
  // save the author instance in db
  authorInstance.save((err, authorDoc) => {
    if (!err) return response.json(authorDoc);
    response.send(err);
  });
  // response.send("author created")
});

Router.delete("/:id", (request, response) => {
  const id = request.params.id;
  AuthorModel.deleteOne({ _id: id }, (err, data) => {
    if (!err) return response.json(data);
    response.status(404).json({ errorHappened: true });
  });
  // response.send(`author with id ${request.params.id} deleted`)
});

module.exports = Router;
