'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from "@/components/Modal"

export default function Page() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    // Usa axios para hacer una solicitud al archivo JSON
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/Orentreteiment.json/'); 
        /** filtado de Api por año 2010 y por Película */
        setMovies(response.data.entries.filter(item => item.releaseYear >= 2010 && item.programType === 'movie') ); 
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchMovies();
  }, []); // Ejecuta el efecto solo una vez al montar el componente


  return (
    <div className="h-5/6 w-full grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7 gap-8 justify-center items-center overflow-auto">
      {movies.length > 0 ? (
        movies.map((mov, i) => (
          <div key={i} className="flex flex-row ml-1 w-5/6 mb-7">
            <figure className="">
              <img src={mov.images.PosterArt.url} alt={mov.title} className="rounded-xl border-2 border-sky-300 h-[150px] w-[150px] mt-4 ml-5 mr-5 text-xs" />
              <label htmlFor="" className="text-[0.5] md:text-xs mt-4 ml-7 flex flex-col">
                {mov.title}
              </label>
            </figure>
          </div>
        ))
      ) : (
        <p>Cargando...</p> 
      )}
    </div>
  );
}