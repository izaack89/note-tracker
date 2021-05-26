// LOAD DATA
const fs = require('fs');
// ROUTING

module.exports = (app, path) => {
    
    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/db.json'), 'utf8'));;
    console.log(notesData);
    // API GET Requests
    // Display the notes    
    app.get('/api/notes', (req, res) => res.json(notesData));


    // API POST Requests
    // Save the Notes into the JSON file 
    app.post('/api/notes', (req, res) => {
        // save the notes 
    });

    // API DELETE Request 
    // Delete the note according to the ID 
    app.delete('/api/notes/:id', (req, res) => {
        // Empty out the arrays of data
    });

};
