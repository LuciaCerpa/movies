import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
import LoveLoader from './LoveLoader';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Listado = () => {
    const navigate = useNavigate();
    const [movies,setMovies]=useState([])
    
const [loading, setLoading] = useState(false);
  


    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token === null) {
            navigate('/')
        }
        setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=604df1b32b7bbdf997de3f660342c55a&language=en-US')
        .then(res=>setMovies(res.data.results))
        .catch(error => console.log(error))
        // swAlert(<h2>Hubo errores!!!</h2>)
        
    }, [])

console.log(movies)  


    return (
        <>
        {loading ? (
      <LoveLoader/> 
      
    ) : (  

        <Row xs={1} md={2} lg={3} className="g-3" >
            
            {
                movies.map((movie, idx)=>(           
                    <Col style={{display:'flex', flexDirection:'column', justifycontent:'center', alignItems:'center'}}>
                <Card className='card' bg="dark" variant="dark" text="warning" >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    {/* <button className='buttonFavorites' >🖤</button> */}
                    <Card.Body >                        
                        <Card.Title >{movie.title}</Card.Title>
                        <p>Relese Date: {movie.release_date}</p>
                        <Card.Text >{movie.overview.substring(0, 100)}</Card.Text >
                        <p>Popularity: {movie.popularity}</p>
                        <Link to={`/pelis/id?movieID=${movie.id}`} variant="primary" >Ver details</Link>
                    </Card.Body>
                </Card>
                </Col>
                ))
            }
            

        </Row>
)}
        </>
    );
};

export default Listado;