import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Comics.css";

import avengersCover from "../assets/comics/avengers.webp";
import lostAvengersCover from "../assets/comics/lost-avengers.webp";
import avengers50Cover from "../assets/comics/avengers-50.jpg";
import darkholdCover from "../assets/comics/darkhold.jpg";

const comics = [
  {
    title: "THE AVENGERS",
    issue: "#01",
    category: "MARVEL CLASSICS",
    image: avengersCover,
  },
  {
    title: "THE LOST AVENGERS",
    issue: "#01",
    category: "MARVEL ARCHIVES",
    image: lostAvengersCover,
  },
  {
    title: "AVENGERS 50",
    issue: "#50",
    category: "SPECIAL ISSUE",
    image: avengers50Cover,
  },
  {
    title: "DARKHOLD",
    issue: "#01",
    category: "DARK COLLECTION",
    image: darkholdCover,
  },
];

function Comics() {
  return (
    <section className="comics-section" id="comics">
      <div className="comics-inner">

        <motion.div
          className="comics-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">
              MARVEL ARCHIVES
            </span>

            <h2 className="comics-title">
              OUR
              <br />
              COMICS
            </h2>
          </div>

          <div className="comics-header-right">
            <p>
              Explore legendary stories, iconic heroes
              and unforgettable moments from the Marvel
              comic universe.
            </p>

            <button className="comics-explore">
              EXPLORE ALL COMICS
              <ArrowUpRight size={17} />
            </button>
          </div>
        </motion.div>

        <div className="comics-slider">

          <div className="comics-grid">
            {comics.map((comic, index) => (
              <motion.article
                className="comic-card"
                key={comic.title}
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
                <div className="comic-image-wrapper">

                  <img
                    src={comic.image}
                    alt={comic.title}
                    className="comic-image"
                  />

                  <div className="comic-overlay"></div>

                  <span className="comic-category">
                    {comic.category}
                  </span>

                  <span className="comic-issue">
                    {comic.issue}
                  </span>

                  <button
                    className="comic-open"
                    aria-label={`Open ${comic.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="comic-info">
                  <h3>{comic.title}</h3>
                  <span>EXPLORE ISSUE</span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

        <div className="comics-bottom">
          <span>01 — 04</span>

          <div className="comics-progress">
            <span></span>
          </div>

          <span>COMIC ARCHIVE</span>
        </div>

      </div>
    </section>
  );
}

export default Comics;