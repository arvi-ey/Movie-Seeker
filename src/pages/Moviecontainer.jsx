import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import Link from 'next/link'
const Moviecontainer = (props) => {
    const clickPage = () => {
        console.log(props.id)
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.id)

    }, [])
    return (
        <>
            <div className={style.moviemain_container}>
                <Link href={`/news/${data}`} style={{ textDecoration: "none" }}>
                    <div className={style.movie_box} onClick={clickPage}  >
                        <div className={style.movie_image} >
                            <img src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${props.img}`} className={style.image} alt="#" />
                        </div>
                        <div className={style.movie_name}>
                            <p>{props.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Moviecontainer
