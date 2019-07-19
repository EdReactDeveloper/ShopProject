const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');


router.get('/', async(req, res, next) =>{
  try {
    let user = await User.findById(req.session.user._id).select('-password')
    res.json(user)
  } catch (error) {
			res.status(400).json({ msg: error });    
  }
})

router.post(
	'/register',
	[check('email', 'email is required').isEmail(), check('password', 'password is required').isLength({ min: 6 })],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { password, email } = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ errors: [{ msg: 'the user already exists' }] });
			}
			user = new User({
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
		} catch (error) {
			res.status(400).json({ msg: error });
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'email is required').isEmail(),
		check('password', 'password should be at least 6 char long').isLength({ min: 6 })
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ msg: errors.array() });
		}
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) {
				return res.status(404).json({ msg: 'the user does not exist' });
			}
			
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				return res.status(400).json({ msg: 'wrong password' });
			}
			req.session.isLoggedIn = true;
			req.session.user = user;
			return req.session.save(err => res.redirect('/'));
		} catch (error) {
			res.status(400).json({ msg: error });
			console.log(error)
		}
	}
);

router.post('/logout', (req, res, next)=> {
	req.session.destroy(err=> {res.redirect('/')})
})

module.exports = router;
