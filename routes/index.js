const router = require('express').Router();  // Import express router
const apiRoutes = require('./api');  // Import api routes

router.use('/api', apiRoutes);  // Use api routes

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
