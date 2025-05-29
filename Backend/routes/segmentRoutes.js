const express = require("express");
const router = express.Router();
const {
  createSegment,
  previewSegment,
  getAllSegments,
} = require("../controllers/segmentController");

router.post("/create", createSegment);
router.post("/preview", previewSegment);
router.get("/get", getAllSegments);

module.exports = router;
