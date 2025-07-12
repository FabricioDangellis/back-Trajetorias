import { Router } from "express";
import PsychologistsController from "../controller/PsychologistController";
import { celebrate, Joi, Segments } from "celebrate";

const psychologistController = new PsychologistsController();
const psychologistRoutes = Router();

psychologistRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            birthDate: Joi.date().iso().required(),
            cpf: Joi.string().length(11).required(),
            specialty: Joi.string().required(),
            crv: Joi.string().required(),
        }),
    }),
    psychologistController.create,
);

export default psychologistRoutes;