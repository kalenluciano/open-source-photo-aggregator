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
		res.json('hi');
	} catch (e) {}
};

const createUser = async (req, res) => {
	try {
		res.json('hi');
	} catch (e) {}
};

const updateUser = async (req, res) => {
	try {
		res.json('hi');
	} catch (e) {}
};

const deleteUser = async (req, res) => {
	try {
		res.json('hi');
	} catch (e) {}
};

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
