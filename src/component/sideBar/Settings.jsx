import React ,{useState} from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";

const Settings = () => {

    function HandleTheme(e) {
        e.preventDefault()
        console.log('running')
    }
    return (
        <div>
            <li
                id="menu-item-2115"
                className="menu-header menu-item menu-item-type-custom menu-item-object-custom menu-item-2115"
            >
                <a href="#">Settings</a>
            </li>
            <li
                id="menu-item-3212"
                className="fullscreen icon-minimize menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-3212"
            >
                <a href="#">
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
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>
                    <span>Fullscreen</span>
                </a>
            </li>
            <li
                id="menu-item-2116"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2116"
            >
                <a href="#color">
                    <div className="theme-color">
                        <i></i>
                        <span>Primary color</span>
                    </div>
                </a>
            </li>
            <li
            onClick={(e)=>{HandleTheme(e)}}
                id="menu-item-2117"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2117"
            >
                <a href="">
                    <div className="theme-switch">
                        <i></i>
                        <span>Dark theme</span>
                    </div>
                </a>
            </li>

        </div>
    )
}

export default Settings