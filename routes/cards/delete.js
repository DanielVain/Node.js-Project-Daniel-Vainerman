const express = require('express');
const router = express.Router();
const CardModel = require('../../model/card');

router.delete('/', async (req, res) => {
	try {
		const deletedCount = await CardModel.deleteCardById(req.body.id);
		if (deletedCount) {
			res.json({
				status: 200,
				msg: 'Card has been deleted with id of ' + req.body.id,
			});
		} else throw 'Card not found!';
	} catch (err) {
		res.json({ status: 400, msg: err });
	}
});

module.exports = router;
