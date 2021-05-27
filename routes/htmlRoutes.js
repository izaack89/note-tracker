// ROUTING

module.exports = (app,path) => {
    // => HTML GET Requests
    // Display the notes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If no matching route is found default to Index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
