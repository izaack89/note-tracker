// DEPENDENCIES

const path = require('path');

// ROUTING

module.exports = (app) => {
    // => HTML GET Requests
    // Display the notes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/public/tables.html'));
    });

    // If no matching route is found default to Index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/public/index.html'));
  });
};
