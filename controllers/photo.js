const { Photo } = require('../models');

const getAllPhotos = async (req, res) => {
	try {
		const allPhotos = await Photo.find({});
		return res.status(200).json(allPhotos);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getPhoto = async (req, res) => {
	try {
		const { id } = req.params;
		const photo = await Photo.findById(id);
		return res.status(200).json(photo);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const createPhoto = async (req, res) => {
	try {
		const photo = await new Photo(req.body);
		await photo.save();
		return res.status(201).json(photo);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const updatePhoto = async (req, res) => {
	try {
		const { id } = req.params;
		const photo = await Photo.findById(id);
		for (let key in photo) {
			if (req.body[key]) {
				photo[key] = req.body[key];
			}
		}
		await photo.save();
		return res.status(201).json(photo);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const deletePhoto = async (req, res) => {
	try {
		const { id } = req.params;
		const photo = await Photo.findByIdAndDelete(id);
		return res.status(200).json(photo);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

module.exports = {
	getAllPhotos,
	getPhoto,
	createPhoto,
	updatePhoto,
	deletePhoto
};
