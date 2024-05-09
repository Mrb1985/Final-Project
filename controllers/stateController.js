const State = require("../model/State");


const GetAllStates = async (req, res) => {
  const states = await State.find();
  if (!states) {
    return res.status(400).json({ message: "No states found!" });
  }
  res.json(states);
};


const GetAllState = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400)
  }
  const state = await Employee.findOne({ _id: req.params.id }).exec();
  if (!state) {
    res
      .status(400)
      .json({ message: `No state matches ${req.params.id} ` });
  }
  res.json(state);
};

module.exports = {
  GetAllStates,
  GetAllState,
};
