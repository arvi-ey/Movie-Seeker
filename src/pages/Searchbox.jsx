import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import search from "./Images/search.svg"
const Searchbox = (props) => {
    return (
        <>
            <div className={style.search_container}>
                <h1>Movie Seeker</h1>
                <input type='text' placeholder='search movie...'
                    onChange={props.onChange}
                >
                </input>
            </div>
        </>
    )
}

export default Searchbox