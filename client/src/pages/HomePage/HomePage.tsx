import "./HomePage.scss"

import { motion } from "motion/react";
import { discoverCards } from "../../data/discoverData";

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
    </section>
  )
}