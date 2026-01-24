// 1. IMPORTACIONES
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

// 2. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 3. RUTA / ENDPOINT
app.get('/obtener-clientes', async (req, res) => {
    const { host, base } = req.query; // Extraemos datos de la URL

    if (!host || !base) {
        return res.status(400).json({ error: "Faltan parámetros de conexión." });
    }

    let conexion;

    try {
        // 4. LÓGICA DE CONEXIÓN A SQL
        conexion = await mysql.createConnection({
            host: host,
            user: process.env.DB_SQL_USER,
            password: process.env.DB_SQL_PASS,
            database: base,
            port: 3306
        });

        // 5. EJECUCIÓN DE LA CONSULTA
        const [filas] = await conexion.execute('SELECT * FROM clientes LIMIT 20');
        
        await conexion.end(); // Cerramos siempre la conexión
        res.json(filas);      // Enviamos resultados al Front

    } catch (error) {
        if (conexion) await conexion.end();
        res.status(500).json({ error: "Fallo la conexión a SQL", detalle: error.message });
    }
});

// 6. ARRANQUE DEL SERVIDOR
const PUERTO = process.env.PUERTO_SERVER || 3001;
app.listen(PUERTO, () => {
    console.log(`🚀 Servidor Dash 360 corriendo en el puerto ${PUERTO}`);
});