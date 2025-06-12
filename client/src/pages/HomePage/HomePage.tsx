import "./HomePage.scss"

import EventIcon from '@mui/icons-material/Event';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PeopleIcon from '@mui/icons-material/People';

export default function HomePage() {
  return (
    <section className="home">
      <section className="home__discover">
        <h2 className="home__subheading">Discover Oshawa</h2>

        <div className="home__discover-wrapper">
          <ul className="home__discover-list">
            <li className="home__discover-list-item card">
              < EventIcon />

              <p className="home__discover-label">
                Events
              </p>

              <p className="home__discover-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
              </p>
            </li>

            <li className="home__discover-list-item card">
              <LocalDiningIcon />

              <p className="home__discover-label">
                Local Businesses
              </p>

              <p className="home__discover-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
              </p>
            </li>

            <li className="home__discover-list-item card">
              <PeopleIcon />

              <p className="home__discover-label">
                Community Resources
              </p>

              <p className="home__discover-text">                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}