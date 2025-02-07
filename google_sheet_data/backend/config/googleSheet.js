const { google } = require("googleapis");
const fs = require('fs');
const path = require('path');

// Load the service account credentials
const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '../credentials.json'), 'utf8'));

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

const SHEET_ID = process.env.SHEET_ID;

const getSheetData = async () => {
  const authClient = await auth.getClient();
  const response = await sheets.spreadsheets.values.get({
    auth: authClient,
    spreadsheetId: SHEET_ID,
    range: "Sheet1",
  });
  return response.data.values;
};

const updateSheetData = async (id, data) => {
  const authClient = await auth.getClient();
  const sheetData = await getSheetData();
  const rowIndex = sheetData.findIndex(row => row[0] === id);

  if (rowIndex === -1) {
    throw new Error(`Row with ID ${id} not found`);
  }

  await sheets.spreadsheets.values.update({
    auth: authClient,
    spreadsheetId: SHEET_ID,
    range: `Sheet1!A${rowIndex + 1}:C${rowIndex + 1}`,
    valueInputOption: "RAW",
    resource: { values: [data] },
  });
};

const appendSheetData = async (data) => {
  const authClient = await auth.getClient();
  await sheets.spreadsheets.values.append({
    auth: authClient,
    spreadsheetId: SHEET_ID,
    range: "Sheet1",
    valueInputOption: "RAW",
    resource: { values: [data] },
  });
};

const deleteSheetRow = async (id) => {
  const authClient = await auth.getClient();
  const sheetData = await getSheetData();
  const rowIndex = sheetData.findIndex(row => row[0] === id);

  if (rowIndex === -1) {
    throw new Error(`Row with ID ${id} not found`);
  }

  await sheets.spreadsheets.values.clear({
    auth: authClient,
    spreadsheetId: SHEET_ID,
    range: `Sheet1!A${rowIndex + 1}:C${rowIndex + 1}`,
  });
};

const getFilteredData = async (filter) => {
  const sheetData = await getSheetData();
  return sheetData.filter(row => {
    return Object.keys(filter).every(key => {
      const columnIndex = key === 'id' ? 0 : key === 'name' ? 1 : key === 'age' ? 2 : -1;
      if (columnIndex === -1) {
        return false;
      }
      const cellValue = row[columnIndex];
      console.log("the cellvalues are :",cellValue);
      console.log("the filter[key] is : ",filter[key]);
      //console.log(cellValue.toString().toLowerCase() === filter[key].toString().toLowerCase());
      if (cellValue === undefined || cellValue === null) {
        return false;
      }
      return cellValue.toString().toLowerCase() === filter[key].toString().toLowerCase();
    });
  });
};

module.exports = { getSheetData, updateSheetData, appendSheetData, deleteSheetRow, getFilteredData };
