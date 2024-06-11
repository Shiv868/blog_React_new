import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    {Data.map((Data, key) => (
      <nav className="navbar p-3" key={key}>
        <p>
          <Link className="nav-link" to="/">
            {Data.title}
          </Link>
        </p>
        <div className="d-flex flex-column align-items-start">
          <a
            className="btn btn-dark text-white mb-2"
            href="https://github.com/Shiv868"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            GitHub
          </a>
          <a
            className="btn btn-dark text-white"
            href="https://www.linkedin.com/in/shiva-mohan-gorle-b9a290292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            LinkedIn
          </a>
        </div>
      </nav>
    ))}
  </>
);

export default Nav;
