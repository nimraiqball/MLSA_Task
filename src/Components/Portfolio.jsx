/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/moon-8579189_1280.jpg";

const imageAltText = "Moon at the Biggest";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Personal Website",
    description:
      "Where creativity meets innovation. Explore my diverse portfolio, captivating blog posts, and professional journey all in one place.",
    url: "https://nimraiqball.github.io/Nimra.github.io/",
  },
  {
    title: "Athlete Apparel Store",
    description:
      "Step up your game with our athlete apparel store, where style meets performance. Discover top-quality gear designed to elevate your performance and style.",
    url: "https://nimraiqball.github.io/Ecommerce-AthStore-Athlete-Apparel-Store/",
  },
  {
    title: "Snake Game",
    description:
      "The classic Snake game brings retro fun to your screen! Guide your snake to grow longer while avoiding obstacles. How long can you survive?",
    url: "https://github.com/nimraiqball/Snake-Game-in-C-plus-plus.git",
  },
  {
    title: "Hangman Game",
    description:
      "Challenge your word skills with Hangman! Guess letters to uncover the hidden word before it's too late. How many words can you solve?",
    url: "https://github.com/nimraiqball/Hangman-in-c-plus-plus.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
