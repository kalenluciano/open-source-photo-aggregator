const { User } = require('../models');

const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find({});
		return res.status(200).json(allUsers);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		return res.status(200).json(user);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const createUser = async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		return res.status(201).json(user);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		for (let key in user) {
			if (req.body[key]) {
				user[key] = req.body[key];
			}
		}
		user.save();
		res.status(201).json(user);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);
		return res.status(200).json(user);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
