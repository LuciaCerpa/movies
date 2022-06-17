import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Resultados = () => {

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('keyword')

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=604df1b32b7bbdf997de3f660342c55a&query=${keyword}`)
            .then(res=> setMovies(res.data.results))
    },[movies])

    console.log(movies)

    return (
        <div className='row'>
            <h2>Buscaste: {keyword}</h2>
            {
                movies.map((movie, idx)=>(           
                    <div className='lg col-4' style={{ margin: '1rem' }} key={idx}>
                <Card style={{ width: '16rem'}}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <Card.Body>                        
                        <Card.Title>{movie.title}</Card.Title>
                        <p>Relese Date: {movie.release_date}</p>
                        <Card.Text>{movie.overview.substring(0, 100)}</Card.Text>
                        <p>Popularity: {movie.popularity}</p>
                        <Link to={`/pelis/id?movieID=${movie.id}`} variant="primary" >Ver details</Link>
                    </Card.Body>
                </Card>
                </div>
                ))
            }
            
        </div>
    );
};

export default Resultados;