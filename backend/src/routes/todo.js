import { Router } from "express";
import db from "../db.js";
const router  = Router();

router.get("/", (req, res) => {
  db.getAll((items) => {
    res.json(items);
  });
});

router.post("/", (req, res) => {
  const {name} = req.body;
  db.add(name, (newItem) => {
    res.json(newItem);
  });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id, () => {
    res.status(200).send();
  });
});

router.put("/:id/:done/finish", (req, res) => {
  db.toggleDone(req.params.id, JSON.parse(req.params.done), () => {
    res.status(200).send();
  });
});

export default router;
