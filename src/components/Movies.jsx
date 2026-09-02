import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Movies.css";
import avengersPoster from "../assets/movies/avengers.jpg";
import infinityWarPoster from "../assets/movies/infinity-war.jpg";
import endgamePoster from "../assets/movies/endgame.jpg";

import infinityGauntlet from "../assets/movies/infinity-gauntlet.png";

const movies = [
  {
    title: "THE AVENGERS",
    year: "2012",
    rating: "7.0",
    type: "MARVEL STUDIOS",
    image: avengersPoster,
    className: "movie-one",
  },
  {
    title: "INFINITY WAR",
    year: "2018",
    rating: "8.4",
    type: "AVENGERS",
    image: infinityWarPoster,
    className: "movie-two",
  },
  {
    title: "ENDGAME",
    year: "2019",
    rating: "8.4",
    type: "AVENGERS",
    image: endgamePoster,
    className: "movie-three",
  },
];

function Movies() {
  return (
    <section className="movies-section" id="movies">

      <div className="movies-inner">

        {/* SECTION HEADER */}

        <motion.div
          className="movies-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div>
            <span className="section-label">
              MARVEL COLLECTION
            </span>

            <h2 className="movies-title">
              RECENT
              <br />
              AVENGER MOVIES
            </h2>
          </div>

          <div className="movies-arrows">

            <button className="movie-arrow">
              <ChevronLeft size={18} />
            </button>

            <button className="movie-arrow active">
              <ChevronRight size={18} />
            </button>

          </div>

        </motion.div>


        {/* MAIN FEATURE */}

        <div className="movies-content">

          {/* FEATURED ARTIFACT */}

          <motion.div
            className="featured-artifact"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="artifact-glow"></div>

            {/* REAL INFINITY GAUNTLET */}

            <div className="artifact">
              <img
                src={infinityGauntlet}
                alt="Infinity Gauntlet"
                className="gauntlet-image"
              />
            </div>

            <span className="artifact-label">
              FEATURED
            </span>

          </motion.div>


          {/* MOVIE INFORMATION */}

          <motion.div
            className="movies-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="movie-feature-label">
              FEATURED COLLECTION
            </span>

            <h3>
              THE AVENGERS
            </h3>

            <p>
              Earth's mightiest heroes unite to protect the
              world from powerful forces threatening humanity.
              Explore the films that defined an era of superhero
              cinema.
            </p>

            <div className="movie-rating">

              <div className="stars">

                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} />

              </div>

              <strong>
                8.4/10
              </strong>

              <span>
                FAN RATING
              </span>

            </div>

            


            {/* MOVIE CARDS */}

            <div className="movie-cards">

              {movies.map((movie) => (

                <motion.article
                  className={`movie-card ${movie.className}`}
                  key={movie.title}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <div className="movie-poster">

  <img
    src={movie.image}
    alt={movie.title}
    className="movie-poster-image"
  />

  <div className="movie-poster-overlay"></div>

  <span className="movie-type">
    {movie.type}
  </span>

</div>

                  <div className="movie-card-info">

                    <h4>
                      {movie.title}
                    </h4>

                    <div>

                      <span>
                        {movie.year}
                      </span>

                      <span>
                        ★ {movie.rating}
                      </span>

                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

          </motion.div>

        </div>


        {/* BOTTOM PROGRESS */}

        <div className="movies-bottom">

          <span>
            01 — 03
          </span>

          <div className="movies-progress">
            <span></span>
          </div>

          <span>
            AVENGERS COLLECTION
          </span>

        </div>

      </div>

    </section>
  );
}

export default Movies;