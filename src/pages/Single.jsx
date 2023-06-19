import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const [resep, setResep] = useState({});

    useEffect(() => {
        fetchResep();
    }, []);

    const fetchResep = async () => {
        const response = await fetch(`/api/resep/${id}`);
        const data = await response.json();
        setResep(data);
    };

    return (
        <div>
            <h1>Detail Resep</h1>
            <h2>{resep.nama_resep}</h2>
            <p>Provinsi: {resep.provinsi}</p>
            <p>Daerah: {resep.daerah}</p>
            <h3>Bahan:</h3>
            <p>{resep.bahan}</p>
            <h3>Cara Membuat:</h3>
            <p>{resep.cara_membuat}</p>
        </div>
    );
};

export default Single;