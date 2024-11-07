import express from "express";
import { register } from "../Controllers/RegisterController.js";

const registerRouters = express.Router();

registerRouters.put("/", (req, res) => {
    register(req, res);
});

export default registerRouters;
