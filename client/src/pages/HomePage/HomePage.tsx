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
        <h2 className="section-heading">Discover Oshawa</h2>

        <p className="discover__description">
          Discover places, spaces, and stories that define Oshawa. Your favourite spot might just be around the corner.
        </p>

        <div className="discover__wrapper">
          <ul className="discover__list">
            {discoverCards.map((card, index) => (
              <motion.li
                key={card.id}
                className="discover__card card"
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              >
                <card.icon />

                <p className="card__heading">
                  {card.title}
                </p>

                <p className="card__description">
                  {card.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home__learn-more">
        <div className="learn-more__wrapper">
          <p className="learn-more__description">
            <span className="learn-more__description--gold">Oshawa Connect</span> is more than just a directory—it’s a way to engage, support,
            and discover. <span className="learn-more__description--gold">Because community</span> isn’t just where you live—it’s how you connect, grow, and belong.
          </p>

          <Button
            className="learn-more__btn"
            variant="secondary"
            label="Learn More"
          />
        </div>
      </section>

      <section className="home__community-spotlight">
        <h2 className="section-heading">Community Spotlight</h2>

        <p className="community-spotlight__description">
          Each month, Oshawa Connect spotlight a local gem that helps make Oshawa vibrant. 
          Discover the flavour, passion, and community spirit that shape our city.
        </p>

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
        <h2 className="section-heading">Upcoming Events</h2>

        <p className="upcoming-events__description">
          Get a glimpse of what's happening in Oshawa, from festivals and markets to neighbourhood celebrations. These are the moments
          that bring the city together.
        </p>

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