import React from 'react'
import RaduiCard from './RaduiCard'

const Radio = () => {
    const radioCardObjects = [
        {
            title: 'Everybody Shooters Too',
            name: '42 Dugg',
            imgUrlA: 'http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg',
            id: '1',
        },
    ]
    return (
        <div>
            <div className="wp-block-loop wp-block-loop-station ">
                <h3 className="block-loop-title">
                    <span className="block-loop-heading">Radio</span>{" "}
                </h3>
                <div className="block-loop-items" style={{ loopRatio: 1 }}>

                    {radioCardObjects.map((radioCardObject) => (
                        <div key={radioCardObject.id}>
                            <RaduiCard radioCardObject={radioCardObject} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Radio