const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  
  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.name);
  }
  return filteredResults;
};

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes, null, 2)
    );
    return note;
};

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
    filterByQuery,
    createNewNote,
    validateNote
};