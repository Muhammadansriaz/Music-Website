// import { useEffect } from "react";
import { useSelector } from 'react-redux';

import Featured from "./Featured";
import Album from './Album'
import Recommended from './Recommended'
import WeeklyTopPlaylists from './WeeklyTopPlaylists';
import MusicVideos from './MusicVideos'
import Radio from './Radio'
import Genres from './Genres'

import NewMusic from './NewMusic'
import { useEffect } from "react";


const Home = () => {


  

  return (

    <div id="content" className="site-content">
      <div id="primary" className="content-area">
        <main id="main" className="site-main">
          <article
            id="post-15"
            className="post-15 page type-page status-publish hentry entry "
          >
          

            <div className="entry-content">
              <div
                style={{ height: 6 }}
                aria-hidden="true"
                className="wp-block-spacer"
              ></div>
              


              <div
                style={{ height: 20 }}
                aria-hidden="true"
                className="wp-block-spacer"
              ></div>
            </div>
          </article>
        </main>
        
      </div>
      
    </div>
  );
};
export default Home;
