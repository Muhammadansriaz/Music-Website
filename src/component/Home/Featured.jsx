import React, { useEffect } from "react";
import FeaturedCard from "./FeaturedCard";

import { get } from "react-hook-form";

const Featured = () => {


  const featuredObjects = [
    {
      title: "Everybody Shooters Too",
      firstPart: "42 Dugg",
      secondPart: "EST Gee",
      imgUrlA:
        "http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg",
      imgUrlB:
        "http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg 300w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-150x150.jpg 150w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-768x768.jpg 768w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24.jpg 1000w",
      id: '1'
    },
  ];




  return (
    <div>
      <h3>Featured</h3>
      <div className="wp-block-loop wp-block-loop-station block-loop-reverse entry-title-lg grid-sm-1 grid-xl-3 wp-block-loop-slider">
        <div className="block-loop-items plug-initialized block-loop-slider"
        // style="--grid-columns:2;--loop-ratio:1.7"
        >
          {featuredObjects.map((featuredObject) => (
            <div key={featuredObject.id}>
              <FeaturedCard featuredObject={featuredObject} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Featured;
