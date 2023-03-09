import { useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import GenresCard from './GenresCard'
// import uuid from 'react-uuid';
// import * as api from '../api/genres.js';
import { useSelector } from 'react-redux';


const Genres = () => {
    // const genresCardObjects = [
    //     {
    //         title: "Everybody Shooters Too",
    //         id: uuid()
    //     },
    // ];

    // const getData = () => {
    //     const genData = api.fetchPosts()
    //     // console.log(a)
    //     // console.log(api.fetchPosts())
    // }

    // const genObject = useSelector((state) => state.posts);

    return (
        <div>

            <div className="wp-block-loop wp-block-loop-taxonomy ">
                <h3 className="block-loop-title">
                    <span className="block-loop-heading">Genres</span>{" "}
                </h3>
                <div
                    className="block-loop-items"
                    style={{ gridRows: 3, loopRatio: 1 }}
                >
                    {/* {genObject.map((genresCardObject) => (

                        <div key={genresCardObject.mnu_id}>
                            <GenresCard genresCardObject={genresCardObject} />
                        </div>
                    ))} */}
                    {/* {genresCardObjects.map((genresCardObject) => (

                        <div key={genresCardObject.uuid()}>
                            <GenresCard genresCardObject={props} />
                        </div>
                    ))} */}

                </div>
            </div>

        </div>
    )
}

export default Genres