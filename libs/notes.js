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
      JSON.stringify({ notes }, null, 2)
    );
    return note;
};

module.exports = {
    filterByQuery,
    createNewNote
};