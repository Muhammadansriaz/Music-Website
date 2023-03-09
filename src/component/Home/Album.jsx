import React from 'react'
import AlbumCard from './AlbumCard'
const Album = () => {
    const albumObjects = [
        {
            title: 'Everybody Shooters Too',
            name: '42 Dugg',
            imgUrlA: 'http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg',
            id: '1'
        },
    ]
    return (
        <div>
            <div className="wp-block-loop wp-block-loop-station  wp-block-loop-slider">
                <h3 className="block-loop-title">
                    <span className="block-loop-heading">New album</span>{" "}
                </h3>
                <div
                    className="block-loop-items"
                    // style="--grid-cols:4;--loop-ratio:1"
                    data-plugin="slider"
                    data-option=""
                >
                    {albumObjects.map((albumObject) => (
                        <div key={albumObject.id}> 
                            <AlbumCard albumObject={albumObject} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Album