// archivo /api/notes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// router.route('/api/notes');
// router.route('/api/notes/:id');

router
  .route('/api/notes')
  // Buscar todas las notas
  .get((req, res) => {
    Note.find((err, notes) => {
      res.json(notes);
    })
  })
  // Crear nota usando los datos req.body
  .post((req, res) => {
    const note = new Note({
      title: req.body.title,
      text: req.body.text
    });
    note.save((err, note) => {
      res.json(note);// HACK: a papu
    })
  });

router
  .route('/api/notes/:id')
  .get((req, res) => {
    Note.find({ id: req.params.id }, (err, note) => {
      res.json(note);
    });
  })
  .put((req, res) => {
    Note.findByIdAndUpdate(req.params.id).exec((err, note) => {
      if (err) return next(err);
      if (!note) return res.status(404).json({ msg: 'Not found' });
      res.status(200).json(note);
    });
  })
  .delete((req, res) => {
    Note.findByIdAndRemove(req.params.id, (err) => {
      res.json({ msg: 'Nota borrada' });
    })
  });

module.exports = router;
