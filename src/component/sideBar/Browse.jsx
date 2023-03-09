import React from 'react'
import MenuList from './MenuList'
const Browse = () => {

    return (
        <div>
            <li
                id="menu-item-2107"
                className="icon-disc hide-icon menu-item menu-item-type-post_type menu-item-object-page menu-has-icon menu-item-2107"
            >
                <a href="http://music.flatfull.com/musicon/browse/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Browse</span>
                </a>
                <MenuList/>
            </li>

        </div>
    )
}

export default Browse