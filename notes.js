const fs = require('fs');

let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    let note = notes.filter((note) => note.title === title);
    return note[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let newNotesArray = notes.filter((note) => note.title !== title);
    saveNotes(newNotesArray);

    return notes.length !== newNotesArray.length;
};

let logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};