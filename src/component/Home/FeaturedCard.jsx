import React from "react";

const FeaturedCard = (props) => {
  return (
    <div width='500px'>
      <article
        width="500px"
        data-id="post-2550"
        data-play-id="2550"
        className="block-loop-item post-2550 station type-station status-publish has-post-thumbnail hentry genre-hip-hop-rap station_tag-featured artist-42-dugg artist-est-gee entry is-single  slider-active"
      >
        <figure className="post-thumbnail">
          <a
            className="post-thumbnail-inner"
            href="http://music.flatfull.com/musicon/track/everybody-shooters-too/"
            aria-hidden="true"
            tabIndex="-1"
            data-pjax-state=""
          >
            <img
              loading="lazy"
              width="500"
              height="200"
              src="http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg"
              className="attachment-medium size-medium wp-post-image"
              alt=""
              decoding="async"
              srcSet="http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-300x300.jpg 300w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-150x150.jpg 150w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24-768x768.jpg 768w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/03/1000x1000bb-24.jpg 1000w"
              sizes="(max-width: 300px) 100vw, 300px"
            />{" "}
          </a>
          <div className="entry-action">
            <a
              className="entry-action-link"
              href="http://music.flatfull.com/musicon/track/everybody-shooters-too/"
              data-pjax-state=""
            ></a>
            <button
              data-id="2550"
              data-action="like"
              data-type="post"
              className="btn-like "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="count">1</span>
            </button>{" "}
            <button className="btn-play " data-play-id="2550">
              <span>Play</span>
            </button>{" "}
            <button
              className="btn-more"
              data-type="single"
              data-id="2550"
              data-url="http://music.flatfull.com/musicon/track/everybody-shooters-too/"
              data-embed-url="http://music.flatfull.com/musicon/embed/2550"
            >
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="6" r="2"></circle>
                <circle cx="12" cy="18" r="2"></circle>
              </svg>
            </button>{" "}
          </div>
        </figure>

        <header className="entry-header">
          <div className="entry-header-inner">
            <h3 className="entry-title">
              <a
                href="http://music.flatfull.com/musicon/track/everybody-shooters-too/"
                rel="bookmark"
                data-pjax-state=""
              >
                Everybody Shooters Too
              </a>
            </h3>
            <div className="entry-meta">
              <span className="entry-artist">
                <a
                  href="http://music.flatfull.com/musicon/artist/42-dugg/"
                  rel="tag"
                  data-pjax-state=""
                >
                  42 Dugg
                </a>
                <span> &amp; </span>
                <a
                  href="http://music.flatfull.com/musicon/artist/est-gee/"
                  rel="tag"
                  data-pjax-state=""
                >
                  EST Gee
                </a>
              </span>
            </div>
          </div>
          <div className="entry-footer">
            <button
              data-id="2550"
              data-action="like"
              data-type="post"
              className="btn-like "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="count">1</span>
            </button>{" "}
            <span className="play-duration">00:29</span>{" "}
            {/* <button
              className="btn-more"
              data-type="single"
              data-id="2550"
              data-url="http://music.flatfull.com/musicon/track/everybody-shooters-too/"
              data-embed-url="http://music.flatfull.com/musicon/embed/2550"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="6" r="2"></circle>
                <circle cx="12" cy="18" r="2"></circle>
              </svg>
            </button>{" "} */}
          </div>
        </header>
      </article>
    </div>
  );
};

export default FeaturedCard;
