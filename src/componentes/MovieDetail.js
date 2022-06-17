import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MovieDetail = () => {
    let token = sessionStorage.getItem('token')
    let query = new URLSearchParams(window.location.search)
    let movieId = query.get('movieID')
    const navigate = useNavigate();
    const [movie, setMovie]= useState([]);
    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        if(token === null){
            navigate("/")
        }else{
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=604df1b32b7bbdf997de3f660342c55a`)
            .then(res => setMovie(res.data))
        }
    }, [])
   
    return (
        <div className='movieD'>                        
            <h3>Detalle de la pelicula</h3>
            <div className='movie'>                
                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
                <h2>{movie?.title}</h2>
                <h3>{movie?.release_date}</h3>
                <p>{movie?.overview}</p>
                <h6>Vote Average: {movie?.vote_average}</h6>

            </div>
        </div>
    );
};

export default MovieDetail;