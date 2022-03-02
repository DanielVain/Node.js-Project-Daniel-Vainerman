const Joi = require('joi');

const cardSkeleton = {
	bizName: Joi.string().required().min(2).max(45),
	bizDesc: Joi.string().required().min(0).max(1000),
	bizAddr: Joi.string().required().min(3).max(400),
	bizPhone: Joi.string()
		.required()
		.min(9)
		.max(10)
		.regex(/^0[2-9]\d{7,8}$/),
	bizPic: Joi.string(),
};
const cardNotRequired = {
	bizName: Joi.string().min(2).max(45),
	bizDesc: Joi.string().min(0).max(1000),
	bizAddr: Joi.string().min(3).max(400),
	bizPhone: Joi.string()
		.min(9)
		.max(10)
		.regex(/^0[2-9]\d{7,8}$/),
	bizPic: Joi.string(),
};

const deleteCardSkeleton = {
	id: Joi.string().hex().min(24).max(24),
};
const deleteSchema = Joi.object(deleteCardSkeleton);
const cardSchema = Joi.object(cardSkeleton);
const cardNotRequiredSchema = Joi.object(cardNotRequired);

module.exports = { cardSchema, cardNotRequiredSchema, deleteSchema };
