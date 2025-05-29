const Segment = require("../models/Segment");
const Customer = require("../models/Customer");

const createSegment = async (req, res) => {
  try {
    const { name, rules, createdBy } = req.body;

    const segment = new Segment({ name, rules, createdBy });
    await segment.save();

    res.status(201).json({ message: "Segment created", segment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const previewSegment = async (req, res) => {
  try {
    const { rules } = req.body;

    const mongoQuery = buildMongoQueryFromRules(rules);

    const customers = await Customer.find(mongoQuery);

    res.status(200).json({ count: customers.length, customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllSegments = async (req, res) => {
  try {
    const segments = await Segment.find().sort({ createdAt: -1 });
    res.status(200).json(segments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function buildMongoQueryFromRules(rules) {
  const query = {};

  rules.forEach((rule) => {
    const { field, operator, value } = rule;

    switch (operator) {
      case ">":
        query[field] = { $gt: value };
        break;
      case ">=":
        query[field] = { $gte: value };
        break;
      case "<":
        query[field] = { $lt: value };
        break;
      case "<=":
        query[field] = { $lte: value };
        break;
      case "==":
        query[field] = value;
        break;
      case "!=":
        query[field] = { $ne: value };
        break;
    }
  });

  return query;
}

module.exports = { createSegment, previewSegment, getAllSegments };
