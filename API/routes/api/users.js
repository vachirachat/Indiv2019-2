const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../User");

router.get("/",(req,res) => {
    return res.status(500).json({status:'Get Complete'});
})
router.post("/checkEmail",(req,res) => {
  User.findOne({email: req.body.email}).then(user => {
    if (user){
      return res.json({email:'อีเมลนี้มีคนใช้ในการสมุครแล้ว กรุณากรอกอีเมลอื่นอีกครั้งนึง'});
    }})
});


router.post("/checkIDNum",(req,res) => {
  User.findOne({email: req.body.IDnum}).then(user => {
    if (user){
      return res.status(400).json({email:'อีเมลนี้มี'});
    }})
  });
  

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      console.log('this is in !isValid');
      console.log(errors);
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({Email:"Email already exists"});
      } else {
        const newUser = new User({
          IDNum : req.body.IDNum,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          school: req.body.school,
          year: req.body.year,
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.phone, salt, (err, hash) => {
            if (err) throw err;
            newUser.phone = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const IDNum = req.body.IDNum;
  const phone = req.body.phone;
  // Find user by email
    User.findOne({ IDNum }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "IDNum not found" });
      }
  // Check password
      bcrypt.compare(phone, user.phone).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {

              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
          
          
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;
