import express from "express";
import { GetUser, UpdateUser } from "../Controllers/GetUserController.js";

const getUserRouters = express.Router();
const updateUserRouters = express.Router();


getUserRouters.get("/:id_usuario", (req, res) => {
    GetUser(req, res);
});

getUserRouters.put("/:id_usuario/:correo", (req, res) => {

    UpdateUser(req, res);
});

export default getUserRouters;