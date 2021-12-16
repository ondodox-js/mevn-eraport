const SiswaController = require('../controllers/SiswaController');

const express = require('express');
const router = express.Router();

router.get('/siswa/', SiswaController.index);
router.post('/siswa/', SiswaController.store);
router.put('/siswa/:id', SiswaController.update);
router.delete('/siswa/:id', SiswaController.destroy);

module.exports = router;
