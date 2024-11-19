import { credenciales } from "../index.js";

export async function getPreguntasPorModulo(req, res) {
    const { id_modulo } = req.params;

    try {
        // Consulta SQL actualizada para obtener el id_pregunta, módulo, pregunta y respuestas
        const query = `
            SELECT 
                m.id_modulo,
                m.nombre_modulo, 
                p.id_pregunta,   -- Incluimos el id_pregunta en la consulta
                p.pregunta, 
                res.respuesta, 
                res.correcto
            FROM modulos m
            JOIN preguntas p ON m.id_modulo = p.id_modulo
            JOIN respuestas res ON p.id_pregunta = res.id_pregunta
            WHERE m.id_modulo = $1  -- Filtramos por id_modulo
            ORDER BY p.id_pregunta, res.id_respuesta;
        `;
        
        // Ejecutar la consulta con el id_modulo recibido desde los parámetros de la URL
        const { rows } = await credenciales.query(query, [id_modulo]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No se encontraron preguntas para este módulo' });
        }

        // Responder con los datos obtenidos
        res.status(200).json(rows);
    } catch (err) {
        console.error('Error al obtener preguntas:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
