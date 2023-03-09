import React from 'react'
import RecommendedCard from './RecommendedCard'

const Recommended = () => {

    const recommendedObjects = [
        {
            title: 'Everybody Shooters Too',
            name: '42 Dugg',
            imgUrlA: 'http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg',
        }
    ]


    return (
        <div>
            <div className="wp-block-loop wp-block-loop-station block-loop-row block-loop-xs wp-block-loop-slider">
                <h3 className="block-loop-title">
                    <span className="block-loop-heading">Recommended for you</span>{" "}
                </h3>
                <div
                    className="block-loop-items"
                    // style="--grid-cols:3;--grid-rows:4;--loop-ratio:1"
                    style={{ gridCols: 3, loopRatio: 1 }}
                    data-plugin="slider"
                    data-option=""
                >
                    {recommendedObjects.map((recommendedObject) => (
                        <div key={recommendedObject.id}>
                            <RecommendedCard recommendedObject={recommendedObject} />
                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default Recommended