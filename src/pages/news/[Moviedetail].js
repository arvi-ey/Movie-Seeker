import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import style from '../style.module.css'
import { useState } from 'react'
import axios from "axios";
const Moviedetail = () => {
    const router = useRouter();
    // console.log(router.query.Moviedetail);

    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${router.query.Moviedetail}?api_key=52370bc737f0c0dbe87967cee37fa4f3&language=en-US`)
            .then(
                res => {
                    setValue(res.data);
                    console.log(res.data);
                    // console.log(value);
                })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className={style.Moviedetail_container}>
                <div className={style.big_movieposter}>
                    <img src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${value.poster_path}`} className={style.image} alt="#" />
                </div>
                <div className={style.movie_detail} >
                    <div className={style.movie_content}>
                        <p className={style.movie_title}>{value.title}
                            <br></br>
                            <span className={style.release_date} >
                                Release Date: {value.release_date}
                            </span>
                        </p>
                        <p className={style.movie_description}>{value.overview}</p>
                        <p className={style.movie_rating}>IMDB-{Math.trunc(value.vote_average)}/10</p>
                        <p className={style.movie_vote}>Vote-{value.vote_count}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Moviedetail