const express = require('express');

const router = express.Router();

router.get('/', getTweets);
router.get('/:id', getTweetById);
router.put('/:id', updateTweet);
router.delete('/:id', deleteTweet);


module.exports = router;