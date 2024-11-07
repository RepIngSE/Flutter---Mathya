import { credenciales } from "../index.js";

export async function register(req, res) {
    const {nombre, apellido, edad, correo, password} = req.body;

    const query = `INSERT INTO usuarios (nombre, apellido, edad, correo, password) VALUES ('${nombre}', '${apellido}', ${edad}, '${correo}', '${password}')`;
    //const values = [nombre, apellido, edad, correo, password]; 

    try {
        await credenciales.query(query);


        res.status(201).json({ message: "Usuario registrado exitosamente." });
    } catch (error) {

        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error al registrar usuario." });
    }
}