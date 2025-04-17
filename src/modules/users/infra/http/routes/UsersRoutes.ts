import { Router } from "express";
import UserController from "../controllers/UserController";
import { celebrate, Joi, Segments } from "celebrate";

const userController = new UserController();
const userRoutes = Router();

userRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            birthDate: Joi.date().iso().required(),
            cpf: Joi.string().length(11).required(),
            type: Joi.string().valid('psicologo', 'responsavel').required(),
        }),
    }),
    userController.create,
);

export default userRoutes;