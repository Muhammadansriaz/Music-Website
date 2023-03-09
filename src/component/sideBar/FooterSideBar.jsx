import React from 'react'

const FooterSideBar = () => {
    return (
        <div>
            <span className="flex"></span>

            <footer id="side-footer" className="site-sidebar-footer">
                <p className="has-small-font-size">
                    <a
                        href="http://music.flatfull.com/musicon/category/uncategorized/"
                        data-type="category"
                        data-id="1"
                    >
                        Blog
                    </a>{" "}
                    <a
                        href="http://music.flatfull.com/musicon/pricing-plans/"
                        data-type="page"
                        data-id="3079"
                    >
                        Pricing Plans
                    </a>{" "}
                    <a
                        href="http://music.flatfull.com/musicon/privacy-policy/"
                        data-type="page"
                        data-id="9"
                    >
                        Privacy
                    </a>{" "}
                    <a
                        href="http://music.flatfull.com/musicon/terms/"
                        data-type="page"
                        data-id="1168"
                    >
                        Terms
                    </a>
                </p>

                <p className="has-text-color" style={{ color: "#888888", fontSize: 12 }}>
                    @2022 Music Theme
                </p>

                <div
                    style={{ height: 40 }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                ></div>

                <p></p>
            </footer>
        </div>
    )
}

export default FooterSideBar