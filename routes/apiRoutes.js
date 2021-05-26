// LOAD DATA
const fs = require('fs');
// ROUTING

module.exports = (app, path) => {
    //Read the json file and display the information
    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/db.json'), 'utf8'));
    // API GET Requests
    // Display the notes    
    app.get('/api/notes', (req, res) => res.json(notesData));


    // API POST Requests
    // Save the Notes into the JSON file 
    app.post('/api/notes', (req, res) => {
        // save the new note into a variable 
        // const newNotes = req.body;
        // I set a push to the variable that have the information of the json
        const newNotes = {
            id: (notesData.length) + 1,
            title: req.body.title,
            text: req.body.text, 
        };
        notesData.push(newNotes);
        // I save the new notes into the Json File
        fs.writeFile(path.join(__dirname, '../data/db.json'), JSON.stringify(notesData), function (error, data) {
            if (error) {
                return error
            }
            res.json(newNotes);
        });
    });

    // API DELETE Request 
    // Delete the note according to the ID 
    app.delete('/api/notes/:id', (req, res) => {
        // save the note that will be deleted into a variable
        const deletedNoteId = req.params.id;
        // I set a push to the variable that have the information of the json
        let position = 0;
        let foundId = false;
        notesData.forEach(note => {
            console.log(note.id)
            if (deletedNoteId ==note.id) {
                foundId = true;
            }else if (!foundId) {
                position++;
            }
        });
        notesData.splice(position, 1);
        res.json(notesData);
    });

};
