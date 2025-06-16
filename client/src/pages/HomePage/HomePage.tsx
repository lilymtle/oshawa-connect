import "./HomePage.scss"

import { motion } from "motion/react";
import { discoverCards } from "../../data/discoverData";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRating from "../../components/StarRating/StarRating";
import { upcomingEvents } from "../../data/upcomingEvents";
import Carousel from "../../components/Carousel/Carousel";

export default function HomePage() {
  return (
    <section className="home">
      <section className="home__discover">
        <h2 className="home__subheading">Discover Oshawa</h2>

        <div className="home__discover-wrapper">
          <ul className="home__discover-list">
            {discoverCards.map((card, index) => (
              <motion.li
                key={card.id}
                className="home__discover-list-item card"
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              >
                <card.icon />

                <p className="home__discover-label">
                  {card.title}
                </p>

                <p className="home__discover-text">
                  {card.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home__learn-more">
        <div className="home__learn-more-wrapper">
          <p className="home__learn-more-text">
            <span className="home__learn-more-text--gold">Oshawa Connect</span> is more than just a directory—it’s a way to engage, support,
            and discover. <span className="home__learn-more-text--gold">Because community</span> isn’t just where you live—it’s how you connect, grow, and belong.
          </p>

          <Button
            className="home__learn-more-btn"
            variant="secondary"
            label="Learn More"
          />
        </div>
      </section>

      <section className="home__community-spotlight">
        <h2 className="home__subheading">Community Spotlight</h2>

        <Card
          className="community-spotlight__card">
          <div className="community-spotlight__details">
            <p className="community-spotlight__name">
              Ayothaya Thai Kitchen
            </p>

            <section className="community-spotlight__rating">
              <StarRating rating={4.6} />
            </section>

            <section className="community-spotlight__meta">
              <ul className="community-spotlight__meta-list">
                <li className="community-spotlight__category">Asian</li>
                <span className="community-spotlight__distance-wrapper">
                  <img
                    className="community-spotlight__distance-icon"
                    src="/assets/icons/map-pin.svg"
                    alt="Outlined Map Pin Icon"
                  />
                  <li className="community-spotlight__distance">1.1 km</li>
                </span>
                <li className="community-spotlight__pricing">$$</li>
              </ul>

              <ArrowForwardIcon />
            </section>
          </div>
        </Card>
      </section>

      <section className="home__upcoming-events">
        <h2 className="home__subheading">Upcoming Events</h2>
        <Carousel 
            className="upcoming-events__carousel" 
            dates={upcomingEvents.map((event) => event.date )}
          >
            {upcomingEvents.map((event) => (
              <li key={event.id} className="upcoming-events__item">
                <Card
                  className="upcoming-events__card"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="upcoming-events__overlay"></div>

                  <div className="upcoming-events__details">
                    <p className="upcoming-events__date">{event.date}</p>
                    <p className="upcoming-events__name">{event.name}</p>
                  </div>
                </Card>
              </li>
            ))}
        </Carousel>
      </section>
    </section>
  )
}