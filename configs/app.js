const db = require('./dbConfig');

async function testConnection(){
    try {
        const [rows, fields] = await db.query('SELECT 1 + 1 AS solution');
        console.log('Resultado da consulta:', rows[0].solution);
    } catch (error) {
        console.error('Erro na conexão com o MySQL:', error.message);
    }
};

testConnection();