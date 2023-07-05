// import { require } from 'node:path';

export const useGoogleapis = () => {

    const { google } = require('googleapis');
    const key = require('./path/to/credentials.json');

    const auth = new google.auth.GoogleAuth({
        // keyFile: './path/to/credentials.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    //

    const getSheetData = async () => {
        const spreadsheetId = '1M2apJJ2iSxWyM-3x8l689Py5WKLXsDBJIHlQF6pX16o';
        const range = 'Sheet1!A1:D'; // Update with your sheet name and range

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        return response;
    };
    return {
        getSheetData,
    };
};