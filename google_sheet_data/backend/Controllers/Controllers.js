const asyncHandler = require("express-async-handler");
const { getSheetData, updateSheetData, appendSheetData, deleteSheetRow ,getFilteredData } = require("../config/googleSheet");

// @desc Get all data
// @route GET /out
// @access Private
const getdatas = asyncHandler(async (req, res) => {
  const data = await getSheetData();
  res.json(data);
});

// @desc Create a new contact
// @route POST /add
// @access Private
const Insertdatas = asyncHandler(async (req, res) => {
  const { id, name, age } = req.body;
  await appendSheetData([id, name, age]);
  res.json({ message: "Contact added successfully" });
});

// @desc Update a contact
// @route PUT /update/:id
// @access Private
const Updatedata = asyncHandler(async (req, res) => {
  const { id, name, age } = req.body;
  await updateSheetData(req.params.id, [id, name, age]);
  res.json({ message: "Contact updated successfully" });
});

// @desc Delete a contact
// @route DELETE /delete/:id
// @access Private
const deletedata = asyncHandler(async (req, res) => {
  await deleteSheetRow(req.params.id);
  res.json({ message: "Contact deleted successfully" });
});

// @desc Filter data
// @route GET /filter
// @access Private
const FilteredData = asyncHandler(async (req, res) => {
  const filter = req.query;
  const data = await getFilteredData(filter);
  res.json(data);
});

module.exports = { getdatas, Insertdatas, Updatedata, deletedata ,FilteredData };
