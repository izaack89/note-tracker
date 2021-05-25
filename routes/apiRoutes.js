// LOAD DATA

const notesData;

// ROUTING

module.exports = (app) => {
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
