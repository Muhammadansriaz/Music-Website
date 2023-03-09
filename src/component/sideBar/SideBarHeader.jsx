import React from 'react'

const SideBarHeader = () => {
    return (
        <div>
            <header id="side-header" className="site-sidebar-header">
                <div className="wp-block-block-permission">
                    <div
                        className="wp-block-cover is-light rounded dark-white"
                        style={{ minHeight: 50 }}
                    >
                        <span
                            aria-hidden="true"
                            className="wp-block-cover__background has-white-background-color has-background-dim-100 has-background-dim"
                        ></span>
                        <div className="wp-block-cover__inner-container">
                            <p className="no-margin has-small-font-size">
                                <strong>Subscribe Now</strong>
                            </p>

                            <div
                                style={{ height: 10 }}
                                aria-hidden="true"
                                className="wp-block-spacer"
                            ></div>

                            <p
                                className="has-text-color has-small-font-size"
                                style={{ color: "#888888" }}
                            >
                                Follow your favorite artists and create unlimited playlists.
                            </p>

                            <div className="wp-block-buttons">
                                <div className="wp-block-button has-custom-width wp-block-button__width-100 button-sm btn-primary">
                                    <a
                                        className="wp-block-button__link"
                                        href="/"
                                        style={{
                                            borderRadius: "0",
                                            textDecoration: "none",
                                            backgroundColor: "#06C478",
                                        }}
                                    >
                                        Subscribe Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SideBarHeader