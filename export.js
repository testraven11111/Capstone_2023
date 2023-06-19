const fs = require('fs');
const mysql = require('mysql');
const path = require('path');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 8800,
    user: 'root',
    password: '',
    database: 'resep_capstone',
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err);
        return;
    }

    console.log('Koneksi database berhasil');

    const query = 'SELECT * FROM tabel_resep';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error saat mengambil data:', error);
            db.end();
            return;
        }

        const resepPath = path.join(__dirname, '../client/src/resep.json');
        const data = JSON.stringify(results);

        fs.writeFile(resepPath, data, (err) => {
            if (err) {
                console.error('Error saat menyimpan file:', err);
                db.end();
                return;
            }

            console.log('Data berhasil diekspor ke resep.json');
            db.end();
        });
    });
});