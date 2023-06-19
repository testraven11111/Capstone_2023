import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resepData from '../resep.json';

const Resep = () => {
    const [resep, setResep] = useState([]);

    useEffect(() => {
        setResep(resepData);
    }, []);

    return (
        <div>
            <h1>Resep Makanan</h1>
            {resep.map((item) => (
                <div key={item.id}>
                    <h2>{item.nama_resep}</h2>
                    <p>Provinsi: {item.provinsi}</p>
                    <p>Daerah: {item.daerah}</p>
                    <p>Bahan: {item.bahan}</p>
                    <p>Cara Membuat: {item.cara_membuat}</p>
                    <Link to={`/resep/${item.id}`}>Lihat Detail</Link>
                </div>
            ))}
        </div>
    );
};

export default Resep;