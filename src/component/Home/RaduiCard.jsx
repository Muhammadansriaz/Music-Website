import React from 'react'

const RaduiCard = (props) => {



    return (
        <div>
            <article
                data-id="post-3557"
                data-play-id="3557"
                className="block-loop-item post-3557 station type-station status-publish has-post-thumbnail hentry genre-radio entry is-single "
            >
                <figure className="post-thumbnail">
                    <a
                        className="post-thumbnail-inner"
                        href="http://music.flatfull.com/musicon/track/antenne-bayern-radio/"
                        aria-hidden="true"
                        tabIndex="-1"
                    >
                        <img
                            width="300"
                            height="300"
                            src="http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/08/antenne-300x300.png"
                            className="attachment-medium size-medium wp-post-image"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            srcSet="http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/08/antenne-300x300.png 300w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/08/antenne-150x150.png 150w, http://music.flatfull.com/musicon/wp-content/uploads/sites/3/2022/08/antenne.png 600w"
                            sizes="(max-width: 300px) 100vw, 300px"
                        />{" "}
                    </a>
                    <div className="entry-action">
                        <a
                            className="entry-action-link"
                            href="http://music.flatfull.com/musicon/track/antenne-bayern-radio/"
                        ></a>
                        <button
                            data-id="3557"
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
                            <span className="count">2</span>
                        </button>{" "}
                        <button className="btn-play " data-play-id="3557">
                            <span>Play</span>
                        </button>{" "}
                        <button
                            className="btn-more"
                            data-type="single"
                            data-id="3557"
                            data-url="http://music.flatfull.com/musicon/track/antenne-bayern-radio/"
                            data-embed-url="http://music.flatfull.com/musicon/embed/3557"
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
                                href="http://music.flatfull.com/musicon/track/antenne-bayern-radio/"
                                rel="bookmark"
                            >
                                {props.radioCardObject.title}
                            </a>
                        </h3>
                        <div className="entry-meta">
                            <span className="byline">
                                <span className="author vcard">
                                    <a
                                        className="url fn n"
                                        href="http://music.flatfull.com/musicon/user/musicon/"
                                    >
                                        {props.radioCardObject.name}
                                    </a>
                                </span>
                                <span className="user-verified">
                                    <span
                                        className="verified"
                                        data-toggle="tooltip"
                                        title="Verified"
                                    ></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="entry-footer">
                        <span className="play-count">
                            <span className="count">169</span>
                        </span>{" "}
                        <button
                            data-id="3557"
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
                            <span className="count">2</span>
                        </button>{" "}
                        <button
                            className="btn-more"
                            data-type="single"
                            data-id="3557"
                            data-url="http://music.flatfull.com/musicon/track/antenne-bayern-radio/"
                            data-embed-url="http://music.flatfull.com/musicon/embed/3557"
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
                </header>
            </article>

        </div>
    )
}

export default RaduiCard
