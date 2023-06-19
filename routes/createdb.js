const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 8800,
    user: 'root',
    password: '',
    database: 'resep_capstone',
});

// Mengecek apakah database "resep_capstone" sudah ada
const checkDatabaseExistence = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            port: 8800,
            user: 'root',
            password: '',
        });

        connection.query("SHOW DATABASES LIKE 'resep_capstone'", (error, results) => {
            if (error) {
                reject(error);
            } else {
                const databaseExists = results.length > 0;
                resolve(databaseExists);
            }
        });

        connection.end();
    });
};

const synchronizeData = async () => {
    // Fungsi untuk menyamakan data antara resep.json dan database
    // ...
};

const startServer = async () => {
    // Fungsi untuk menjalankan server
    // ...
};

const createDatabase = async () => {
    try {
        const databaseExists = await checkDatabaseExistence();

        // Jika database belum ada, inisialisasi database
        if (!databaseExists) {
            console.log('Database "resep_capstone" belum ada. Melakukan inisialisasi...');

            const connection = mysql.createConnection({
                host: 'localhost',
                port: 8800,
                user: 'root',
                password: '',
            });

            // Buat database "resep_capstone"
            connection.query('CREATE DATABASE resep_capstone', (error) => {
                if (error) {
                    console.error('Terjadi kesalahan saat membuat database:', error);
                } else {
                    console.log('Database "resep_capstone" berhasil dibuat');

                    // Gunakan database "resep_capstone"
                    connection.query('USE resep_capstone', (error) => {
                        if (error) {
                            console.error('Terjadi kesalahan saat menggunakan database:', error);
                        } else {
                            console.log('Database "resep_capstone" berhasil digunakan');

                            // Buat tabel "tabel_resep"
                            connection.query(`CREATE TABLE tabel_resep (
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                provinsi VARCHAR(255),
                                daerah VARCHAR(255),
                                nama_resep VARCHAR(255),
                                bahan TEXT,
                                cara_membuat TEXT
                            )`, (error) => {
                                if (error) {
                                    console.error('Terjadi kesalahan saat membuat tabel:', error);
                                } else {
                                    console.log('Tabel "tabel_resep" berhasil dibuat');
                                    synchronizeData(); // Sinkronisasi data setelah inisialisasi database dan tabel
                                    startServer();
                                }
                            });
                        }
                    });
                }
            });

            connection.end();
        } else {
            console.log('Database "resep_capstone" sudah ada');
            synchronizeData(); // Sinkronisasi data jika database sudah ada
            startServer();
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat memeriksa keberadaan database:', error);
    }
};

module.exports = createDatabase;