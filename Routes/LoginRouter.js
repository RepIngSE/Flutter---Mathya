import express from "express";
import { login } from "../Controllers/LoginController.js";

const loginRouters = express.Router();

// (request y response)
loginRouters.post("/", (req, res) => {
    login(req, res);
});

export default loginRouters; 
