const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.get('/', ensureLoggedIn, notesCtrl.index);
// post ('/create)
router.post('/create', ensureLoggedIn, notesCtrl.create);

module.exports = router;