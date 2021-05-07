const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  res.json(db.getAll());
});

router.post("/", (req, res) => {
  const {name} = req.body;
  const newItem = db.add(name);
  res.json(newItem);
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id);
  res.status(200).send();
});

router.put("/:id/finish", (req, res) => {
  db.setDone(req.params.id);
  res.status(200).send();
});

module.exports = router;
