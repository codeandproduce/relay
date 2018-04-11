const express = require('express');
const router = express.Router();
 const path = require('path');


router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../relay.html'));
});
router.get('/roster', (req, res) => {
	res.sendFile(path.join(__dirname + '/../roster.html'));
});

module.exports = router;