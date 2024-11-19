import { credenciales } from "../index.js";

export async function GetUser(req, res) {
    const { id_usuario } = req.params;

    try {
        const query = `
            SELECT nombre, apellido, edad, correo FROM usuarios WHERE id_usuario = '${id_usuario}'
        `;
        const { rows } = await credenciales.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error al obtener los datos del usuario:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

export async function UpdateUser(req, res) {
    const { id_usuario,  correo } = req.params;

    try {
        const query = `
            UPDATE usuarios SET correo = '${correo}' WHERE id_usuario = '${id_usuario}'
        `;

        await credenciales.query(query);
        res.status(200).json({ detail: "Actualización exitosa" });
    } catch (err) {
        console.error("Error al actualizar los datos del usuario:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}