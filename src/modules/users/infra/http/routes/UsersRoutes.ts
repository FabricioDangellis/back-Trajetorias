import { Router } from "express";
import UserController from "../controllers/UserController";
import { celebrate, Joi, Segments } from "celebrate";
import { isAuthenticated } from "shared/infra/http/middleware/isAuthenticated";

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

userRoutes.post(
    '/:id',
    celebrate({
        [Segments.PARAMS]: Joi.object({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object({
            name: Joi.string(),
            email: Joi.string().email(),
            birthDate: Joi.date().iso(),
        })
    }),
    isAuthenticated,
    userController.update,
)

export default userRoutes;