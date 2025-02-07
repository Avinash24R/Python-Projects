const express = require("express");
const router = express.Router();
const { getdatas, Insertdatas, Updatedata, deletedata ,FilteredData } = require("../Controllers/Controllers");

router.route("/out").get(getdatas);
router.route("/add").post(Insertdatas);
router.route("/update/:id").put(Updatedata);
router.route("/delete/:id").delete(deletedata);
router.route("/filter").get(FilteredData);

module.exports = router;