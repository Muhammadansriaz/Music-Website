import React from 'react'
import { Link } from "react-router-dom";

const Svgs1 = () => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <circle
                cx="12"
                cy="12"
                r="6"
                stroke="currentColor"
                strokeWidth="6"
            >

            </circle>
            <g className="loading-spin">
                <circle cx="16" cy="16" r="1" fill="#fff"></circle>
            </g>
        </svg>
    )
}

const MusicIcon = () => {
    return (
        <div>
            <div className="site-brand">
                <label htmlFor="menu-state" className="menu-toggle" style={{ display: "flex" }}>
                    <i className="icon-nav"></i>
                </label>
                <div className="site-logo">
                    <Link to={"/"}><Svgs1 /></Link>
                </div>
                <p className="site-title">
                    <Link to={"/"} rel="home">
                        Musicon
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default MusicIcon