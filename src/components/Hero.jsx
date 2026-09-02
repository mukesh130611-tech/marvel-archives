import { BookOpen, Play, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import captainAmerica from "../assets/characters/captain-america.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-stars"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* LEFT CONTENT */}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-label">
          THE MARVEL ARCHIVES
        </span>

        <h1>
          BEST CHARACTERS
          <br />
          EVER MADE IN
          <br />
          <span>COMICS.</span>
        </h1>

        <p>
          Explore legendary heroes, unforgettable stories,
          iconic movies and the comics that built an entire
          universe.
        </p>

        <div className="hero-buttons">
  <a
    href="#comics"
    className="hero-primary-button"
  >
    <BookOpen size={14} />
    Explore Comics
    <ArrowRight size={14} />
  </a>

  <a
    href="#movies"
    className="hero-secondary-button"
  >
    <Play size={14} />
    Watch Movie
  </a>
</div>
      </motion.div>


      {/* CAPTAIN AMERICA */}

      <motion.div
        className="hero-art-area"
        initial={{ opacity: 0, scale: 0.88, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.2
        }}
      >

        <div className="hero-art-glow"></div>

        <img
          src={captainAmerica}
          alt="Captain America"
          className="captain-america-image"
        />

        {/* FLOATING BUTTONS */}

        <div className="hero-floating-icon icon-one">
          <BookOpen size={15} />
        </div>

        <div className="hero-floating-icon icon-two">
          <Star size={15} />
        </div>

        <div className="hero-floating-icon icon-three">
          ✦
        </div>

      </motion.div>


      {/* SECONDARY CHARACTER */}

      <div className="hero-secondary-character">
        <div className="secondary-placeholder">
          HERO
        </div>
      </div>


      {/* SCROLL */}

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>

    </section>
  );
}

export default Hero;