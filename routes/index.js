var express = require('express');
var router = express.Router();

var settingsController = require('../controllers/settings_controller');
var patientController = require('../controllers/patient_controller');
var weightController = require('../controllers/weight_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user_name: 'Fidel', title: 'Mealbook' });
});

//TODO cambar a PUT
router.get('/settings',                       settingsController.index);

// Autoload de comandos con :patientId
router.param('patientId',                     patientController.load);

router.get('/patients',                       patientController.index);
router.get('/patients/:patientId(\\d+)',      patientController.show);
router.get('/patients/new',                   patientController.new);
router.post('/patients/create',               patientController.create);
router.get('/patients/:patientId(\\d+)/edit', patientController.edit);
router.put('/patients/:patientId(\\d+)',      patientController.update);
router.delete('/patients/:patientId(\\d+)',   patientController.destroy);

router.post('/patients/:patientId(\\d+)/weight', weightController.create);
router.delete('/patients/:patientId(\\d+)/weight/:weightId(\\d+)', weightController.destroy);

module.exports = router;
