import React from 'react'
import NewMusicCard from './NewMusicCard'
const NewMusic = () => {
    const newMusicObjects = [
        {
            title: 'Everybody Shooters Too',
            name: '42 Dugg',
            imgUrlA: 'http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg',
            id: '1'
        },
    ]
    return (
        <div>
            <div className="wp-block-loop wp-block-loop-station ">
                <h3 className="block-loop-title">
                    <span className="block-loop-heading">New music</span>{" "}
                </h3>
                <div
                    className="block-loop-items"
                    // style="--grid-rows:2;--loop-ratio:1"
                    style={{ gridRows: 4, loopRatio: 1 }}
                >
                    {newMusicObjects.map((newMusicObject) => (
                        <div key={newMusicObject.id}>
                            <NewMusicCard newMusicObject={newMusicObject} />
                        </div>
                    ))}



                </div>
            </div>

        </div>
    )
}

export default NewMusic