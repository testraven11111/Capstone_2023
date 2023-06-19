const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 8800,
    user: 'root',
    password: '',
    database: 'resep_capstone',
});

db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Terhubung ke database MySQL');
});

const getAllResep = async (request, h) => {
    try {
        const sql = 'SELECT * FROM tabel_resep';
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

const getResepById = async (request, h) => {
    try {
        const id = request.params.id;
        const sql = 'SELECT * FROM tabel_resep WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, id, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

const addResep = async (request, h) => {
    try {
        const { provinsi, daerah, nama_resep, bahan, cara_membuat } = request.payload;
        const sql = 'INSERT INTO tabel_resep (provinsi, daerah, nama_resep, bahan, cara_membuat) VALUES (?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [provinsi, daerah, nama_resep, bahan, cara_membuat], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ message: 'Resep berhasil ditambahkan', id: result.insertId });
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

const deleteResepById = async (request, h) => {
    try {
        const id = request.params.id;
        const sql = 'DELETE FROM tabel_resep WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ message: 'Resep berhasil dihapus', id: id });
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllResep,
    getResepById,
    addResep,
    deleteResepById,
};