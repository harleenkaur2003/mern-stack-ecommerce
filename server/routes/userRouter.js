const userCtrl= require('../controllers/userCtrl')

const router = require('express').Router();

router.post('/resgister',userCtrl.register)
router.post('/login',userCtrl.login)
router.get  ('/logout',userCtrl.logout)
router.post('/refresh_token',userCtrl.refreshtoken)
router.get('/infor',auth, userCtrl.getUser)

modules.exports = router 