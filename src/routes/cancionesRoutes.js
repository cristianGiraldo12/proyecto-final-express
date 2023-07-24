const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/", cancionesController.list);
router.get("/detail/:id", cancionesController.detail);

/* get y post de create */
router.get("/create", cancionesController.create);
router.post("/create", cancionesController.processCreate);

/* get y put de edit */
router.get("/edit/:id", cancionesController.edit);
router.put("/edit/:id", cancionesController.processEdit);

/* get y delete de delete */
router.get("/delete/:id", cancionesController.delete);
router.delete("/delete/:id", cancionesController.processDelete);

module.exports = router;