// archivo /api/note.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', NoteSchema);

router
  .route('/api/notes')
  // buscar todas las notas
  .get((req, res) => {
    Note.find((err, notes) => {
      res.json(notes);
    })
  })
  // crear una nota usando los datos de req.body
  .post((req, res) => {
    const note = new Note({
      title: req.body.title,
      text: req.body.text
    });
    note.save((err, note) => {
      res.json(note);
    })
  });

router
  .route('/api/notes/:id')
  // buscar una nota por id
  .get((req, res) => {
    Note.find({ id: req.params.id }, (err, note) => {
      res.json(note);
    });
  })
  .put((req, res) => {
    res.send('Actualizar nota');
  })
  .delete((req, res) => {
    Note.findByIdAndRemove(req.params.id, (err) => {
      res.json({ msg: 'Nota borrada' });
    })
  });

  router
  .put('/notes/:id', (req, res, next) => {
    const note = {
      title: req.body.title,
      text: req.body.text,
      updatedAt: Date.now()
    };
    const options = {
      new: true,
      omitUndefined: true
    };
    Note.findByIdAndUpdate(req.params.id, note, options).exec((err, note) => {
      if (err) return next(err);
      if (!note) return res.status(404).json({ msg: 'Not found' });
      res.status(200).json(note);
    });
  });


module.exports = router;
