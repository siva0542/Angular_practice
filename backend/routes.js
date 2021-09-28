const router = require('express').Router();
const passport = require('passport');
const User=require('./models/users')
const {register,login,delete:name,display} = require('./server')

router.post("/register",register)
router.route("/login").post(login)
router.route("/delete").delete(passport.login('jwt',{session:false}),delete+name)
router.route("/profile").get(passport.login('jwt',{session:false}),display)
// router.route("/delete").get(passport.login('jwt',{session:false}),delete)
module.exports = router;