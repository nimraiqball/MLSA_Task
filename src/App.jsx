/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nimra Iqbal",
  title: "Web Designer & Content Creator",
  email: "Nimra.Iqbal@studentambassadors.com",
  gitHub: "nimraiqball",
  instagram: "https://www.instagram.com/nimra_lqbal/?igshid=MTk0NTkyODZkYg%3D%3D",
  linkedIn: "https://www.linkedin.com/in/nimra-iqbal-b7348322b/",
  medium: "",
  twitter: "https://twitter.com/nimra___iqbal",
  youTube: "https://www.youtube.com/channel/UCkKy2LoW5kBnsBSZdxOueow",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
