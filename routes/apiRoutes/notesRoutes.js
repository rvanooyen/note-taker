const router = require('express').Router();
const { createNewNote, filterByQuery, validateNote } = require('../../libs/notes');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    if (!notes) {
        notes = {};
    }

    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
          
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });

router.delete('/notes/:id', (req, res) => {
    const id = req.params;

    const noteIndex = notes.findIndex(p => p.id == id);

    notes.splice(noteIndex, 1);

    res.send(id);
});

  module.exports = router;