/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function Header() {
  // let cu = useSelector((store) => store.userSection.cu);
  // //   let dispatch = useDispatch();

  // let [checkUser, setCheckUser] = useState();
  // let tryChar = checkUser?.usr_firstname;
  // // let firstChar=tryChar[0]

  // useEffect(() => {
  //   let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  //   setCheckUser(userLogin);
  // }, [cu]);
  // const Logout = () => {
  //   localStorage.clear();
  //   window.location.href = "/login";
  // };
  // const anything = () => { }
  return (

    <>
      <input type="checkbox" id="menu-state" />
      <input type="checkbox" id="search-state" />
      <header id="header" className="site-header">
        <div className="header-container">
          <div className="site-navbar">
            <div className="site-brand">
              <label htmlFor="menu-state" className="menu-toggle">
                <i className="icon-nav"></i>
              </label>
              <div className="site-logo">
                <a href="http://music.flatfull.com/musicon/">
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
                      strokeWidth={6}
                    ></circle>
                    <g className="loading-spin">
                      <circle cx="16" cy="16" r="1" fill="#fff"></circle>
                    </g>
                  </svg>
                </a>
              </div>
              <p className="site-title">
                <a href="http://music.flatfull.com/musicon/" rel="home">
                  Musicon
                </a>
              </p>
            </div>
            <div className="flex"></div>
            <form
              className="search-form"
              method="get"
              action="http://music.flatfull.com/musicon"
            >
              <input
                type="search"
                placeholder="Search..."
                // onChange={anything}
                name="s"
                data-toggle="dropdown"
              />
              <label htmlFor="search-state" id="icon-search">
                <i className="icon-search">
                  <i></i>
                </i>
              </label>
              <div className="dropdown-menu"></div>
            </form>
            <div className="flex"></div>

            {/* {checkUser ? ( */}
            
              <nav className="menu-after-login">
                <ul className="nav">
                  <li data-toggle="dropdown" id="dropdown-notification">
                    <a data-pjax-state="" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      <span className="count" />
                    </a>
                  </li>
                  <div className="dropdown-menu dropdown-menu-notificaitons">
                    <div className="dropdown-notification-list">
                      <div className="user-placeholder">
                        <p>You do not have any notifications</p>
                      </div>
                    </div>
                    <div className="view-all-notifications">
                      <a
                        href="http://music.flatfull.com/musicon/user/sarmad-awan/notifications/"
                        data-pjax-state=""
                      >
                        View all notifications
                      </a>
                    </div>
                  </div>
                </ul>
                <div className="menu-after-login-container">
                  <ul id="menu-after-login" className="nav">
                    <li
                      id="menu-item-2145"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-avatar current-menu-item menu-item-2145"
                    >
                      <a
                        href="http://music.flatfull.com/musicon/user/sarmad-awan/"
                        data-pjax-state=""
                      >
                        {/* <span className="user-display-name">
                          {checkUser?.usr_firstname + checkUser?.usr_lastname}
                        </span> */}
                        <span className="avatar avatar-s">
                          <span className="avatar-name">M</span>
                        </span>
                      </a>
                      <ul className="sub-menu">
                        {/* <li
                          id="menu-item-2137"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2137"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/playlists/"
                            data-pjax-state=""
                          >
                            Playlists
                          </a>
                        </li>
                        <li
                          id="menu-item-2138"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2138"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/likes/"
                            data-pjax-state=""
                          >
                            Likes
                          </a>
                        </li>
                        <li
                          id="menu-item-2139"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2139"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/followers/"
                            data-pjax-state=""
                          >
                            Followers
                          </a>
                        </li>
                        <li
                          id="menu-item-2140"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2140"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/following/"
                            data-pjax-state=""
                          >
                            Following
                          </a>
                        </li>
                        <li
                          id="menu-item-2141"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2141"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/download/"
                            data-pjax-state=""
                          >
                            Downloads
                          </a>
                        </li> */}
                        <li
                          id="menu-item-2142"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2142"
                        >
                          <Link to={"/dashboard"}>Profile</Link>
                        </li>
                        <li
                          id="menu-item-2135"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2135"
                        >
                          <Link to={"/labeldashboard"} data-pjax-state="">
                            Label Dashboard
                          </Link>
                        </li>
                        <li
                          id="menu-item-2144"
                          className="menu-divider menu-item menu-item-type-custom menu-item-object-custom no-ajax menu-item-2144"
                        >
                          <Link
                            to={"/login"}
                            data-pjax-state=""
                            // onClick={Logout}
                          >
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>{" "}
              </nav>
            {/* ) : ( */}
              <nav className="menu-before-login">
                <div className="menu-before-login-container">
                  <ul id="menu-before-login" className="nav">
                    <li
                      id="menu-item-2133"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2133"
                    >
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li
                      id="menu-item-2134"
                      className="btn-link menu-item menu-item-type-post_type menu-item-object-page menu-item-2134"
                    >
                      <Link to={"/signup"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            {/* )} */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
