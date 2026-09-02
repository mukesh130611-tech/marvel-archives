import {
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Characters.css";

import ironMan from "../assets/characters/iron-man.png";
import thor from "../assets/characters/thor.png";
import captainMarvel from "../assets/characters/captain-marvel.png";
import hulk from "../assets/characters/hulk.png";

const characters = [
  {
    name: "IRON MAN",
    realName: "Tony Stark",
    image: ironMan,
    number: "01",
  },
  {
  name: "SON OF ODIN",
  realName: "Thor",
  image: thor,
  number: "02",
},
  {
    name: "COSMIC HERO",
    realName: "Captain Marvel",
    image: captainMarvel,
    number: "03",
  },
  {
    name: "GREEN GIANT",
    realName: "Hulk",
    image: hulk,
    number: "04",
  },
];

function Characters() {
  return (
    <section className="characters-section" id="characters">
      <div className="characters-inner">

        {/* HEADER */}
        <motion.div
          className="characters-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">
              MARVEL UNIVERSE
            </span>

            <h2 className="characters-title">
              LEGENDARY
              <br />
              CHARACTERS
            </h2>
          </div>

          <p className="characters-description">
            Meet the heroes, legends and warriors
            who shaped an entire universe.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="characters-slider">

          <div className="characters-grid">
            {characters.map((character, index) => (
              <motion.article
                className="character-card"
                key={character.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                {/* NUMBER */}
                <span className="character-number">
                  {character.number}
                </span>

                {/* CHARACTER IMAGE */}
                <div className="character-art">
                  <div className="character-glow"></div>

                  <img
                    src={character.image}
                    alt={character.realName}
                    className="character-image"
                  />
                </div>

                {/* INFORMATION */}
                <div className="character-info">

                  <span className="character-role">
                    {character.realName}
                  </span>

                  <h3>
                    {character.name}
                  </h3>

                </div>

                {/* ACTION */}
                <button
                  className="character-open"
                  aria-label={`Open ${character.name}`}
                >
                  <ArrowUpRight size={15} />
                </button>

              </motion.article>
            ))}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="characters-bottom">

          <span>
            01 — 04
          </span>

          <div className="characters-progress">
            <span></span>
          </div>

          <span>
            EXPLORE THE ARCHIVE
          </span>

        </div>

      </div>
    </section>
  );
}

export default Characters;