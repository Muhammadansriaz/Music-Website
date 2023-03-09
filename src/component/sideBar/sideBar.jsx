// import styled from "./sideBar.module.css";
import MenuList from "./MenuList";
import MusicIcon from "./MusicIcon";
import SideBarHeader from "./SideBarHeader";
import MyCollections from "./MyCollections";
import Settings from "./Settings";
import FooterSideBar from "./FooterSideBar";
import Discover from './Discover'
import Browse from "./Browse";


function SideBar() {

  return (
    <aside id="aside" className="site-sidebar">
      <MusicIcon />
      <SideBarHeader />

      <nav id="primary-menu" className="primary-menu">
        <div className="menu-primary-container">
          <ul id="menu-primary" className="nav">
            <Discover />
            {/* <Browse /> */}
            <MyCollections />
            <Settings />
          </ul>
        </div>
      </nav>
      <FooterSideBar />
    </aside>
  );
}
export default SideBar;
