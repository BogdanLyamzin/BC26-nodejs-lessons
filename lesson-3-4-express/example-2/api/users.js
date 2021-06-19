const express = require("express");

const { products: ctrl } = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getOne);

router.post("/", ctrl.add);

router.put("/:id", ctrl.update);

router.delete("/:id", ctrl.del);

module.exports = router;
