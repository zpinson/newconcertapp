const router = require("express").Router();
const pastEventController = require("../../controllers/pastEventController");

router.route("/")
  .get(pastEventController.findAll)
  .post(pastEventController.create);

router
  .route("/:id")
  .get(pastEventController.findById)
  .put(pastEventController.update)
  .delete(pastEventController.remove);

module.exports = router;
