import React from "react";
import { FiArrowDownRight, FiCheckCircle } from "react-icons/fi";
const coding = `${process.env.PUBLIC_URL}/floating.png`;
const Hero = ({ onExplore }) => {
  return (
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">A CURATED RESOURCE LIBRARY</p><h1>Build better things,<br /><em>with less searching.</em></h1><p className="hero-description">A thoughtful collection of the tools, references, and creative utilities every modern developer reaches for.</p><div className="hero-actions"><button className="primary-button" onClick={onExplore}>Explore the library <FiArrowDownRight /></button><a className="text-link" href="#about">How it works</a></div><div className="hero-proof"><span><FiCheckCircle /> Free to explore</span><span><FiCheckCircle /> Hand-picked tools</span></div></div><div className="hero-visual" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="code-window"><div className="window-bar"><i /><i /><i /></div><img src={coding} alt="" /></div><div className="floating-note note-one">01 <span>Discover</span></div><div className="floating-note note-two">48 <span>resources</span></div></div></section>
  );
};

export default Hero;
