import React from 'react'
import style from './style.module.css'
import Moviecontainer from './Moviecontainer'
import { useEffect, useState } from 'react';
import axios from "axios";
import Searchbox from './Searchbox';
const Frontpage = () => {
    const [apidata, setapiData] = useState([]); // For Fatching API
    const [search, setSearch] = useState(''); // For Search function
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52370bc737f0c0dbe87967cee37fa4f3&language=en-US&page=1')
            .then(
                res => {
                    setapiData(res.data.results);
                })
            .catch(error => console.log(error));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const filteredMovies = apidata.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div className={style.main_container}>

                <Searchbox
                    onChange={handleChange}
                />
                <div className={style.movie_container}>
                    {
                        filteredMovies.map(movie => {
                            return (
                                <Moviecontainer
                                    key={movie.id}
                                    array={movie}
                                    id={movie.id}
                                    img={movie.poster_path}
                                    name={movie.title}
                                    detail={movie.overview}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Frontpage