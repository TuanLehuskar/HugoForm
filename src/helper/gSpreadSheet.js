const spreadsheetId = "1JlmkgAJVX6rVAFVd1WyRsIvVxIfNxZ-yJq1HeuZkwh8";

export function getSheet() {
  const params = {
    // The spreadsheet to request.
    spreadsheetId,

    // The ranges to retrieve from the spreadsheet.
    ranges: [], // TODO: Update placeholder value.

    // True if grid data should be returned.
    // This parameter is ignored if a field mask was set in the request.
    includeGridData: false, // TODO: Update placeholder value.
  };

  window.gapi.client.sheets.spreadsheets.get(params).then(
    (response) => console.log(response.result),
    (reason) => console.error("error: " + reason.result.error.message)
  );
}

export function appendSheet() {
  const params = {
    // The spreadsheet to request.
    spreadsheetId,

    // The ranges to retrieve from the spreadsheet.
    range: "Sheet1!A1:E2",

    // How the input data should be interpreted.
    valueInputOption: "RAW", // TODO: Update placeholder value.

    // How the input data should be inserted.
    insertDataOption: "INSERT_ROWS", // TODO: Update placeholder value.
  };

  const valueRangeBody = {
    values: [[1, 2]],
  };

  window.gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody).then(
    (response) => console.log(response.result),
    (reason) => console.error("error: " + reason.result.error.message)
  );
}

export async function signIn() {
  return window.gapi.auth2.getAuthInstance().signIn();
}
