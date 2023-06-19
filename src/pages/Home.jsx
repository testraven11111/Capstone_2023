import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.jpg';
import resep from '../assets/img/resep.jpg';

const Home = () => {
  return (
    <div className="home">
      <div class="heros">
        <aside>
          <h1>Resep Noesantara</h1>
          <p>Informasi Resep Makanan dan Minuman Nusantara Untuk Kamu!</p>
          <a href="#information">Layanan Kami!</a>
        </aside>
        <img src={hero} alt="" />
      </div>
      <div class="description" id="information">
        <div class="content">
          <img src={resep} alt="" />
          <div class="info">
            <div class="judul">
              <h3>Posting Resep</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore adipisci, et iste architecto id expedita voluptatum, laboriosam nihil laudantium nam voluptas. Dicta voluptatibus natus asperiores ullam perferendis nostrum
              doloribus.
            </p>
          </div>
        </div>
        <div class="content">
          <img src={resep} alt="" />
          <div class="info">
            <div class="judul">
              <h3>Pamer Resep</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore adipisci, et iste architecto id expedita voluptatum, laboriosam nihil laudantium nam voluptas. Dicta voluptatibus natus asperiores ullam perferendis nostrum
              doloribus.
            </p>
          </div>
        </div>
        <div class="content">
          <img src={resep} alt="" />
          <div class="info">
            <div class="judul">
              <h3>Informasi Resep</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore adipisci, et iste architecto id expedita voluptatum, laboriosam nihil laudantium nam voluptas. Dicta voluptatibus natus asperiores ullam perferendis nostrum
              doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
