import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../components/HomePage';
import MediaGalleryPage from '../containers/MediaGalleryPage';

const Header = () => (

  <div className="text-center">

    <nav className="navbar navbar-default">
      <Router>
        <div>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/library">Library</Link>

          <Route exact path="/" component={Home} />
          <Route path="/library" component={MediaGalleryPage} />
        </div>
      </Router>

    </nav>

  </div>

);

export default Header;