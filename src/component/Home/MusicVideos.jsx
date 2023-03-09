import React from 'react'
import MusicVideosCard from './MusicVideosCard'

const MusicVideos = () => {

    const musicVideoObjects = [
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
                    <span className="block-loop-heading">Music videos</span>
                    <a
                        className="block-loop-more"
                        href="http://music.flatfull.com/musicon/browse/audio/"
                    >
                        More
                    </a>{" "}
                </h3>
                <div
                    className="block-loop-items"
                    style={{ gridCols: 4, loopRatio: 1.6 }}
                >
                    {musicVideoObjects.map((musicVideoObject) => (
                        <div key={musicVideoObject.id}>
                            <MusicVideosCard musicVideoObject={musicVideoObject} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default MusicVideos