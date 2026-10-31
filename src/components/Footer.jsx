import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => <footer id="about" className="footer"><div><a className="footer-brand" href="#top">DEV<span>STACKS</span></a><p>A quiet corner of the web for making<br />the next thing easier to build.</p></div><div className="footer-links"><a href="#library">Explore resources</a><a href="https://github.com/seanj12c" target="_blank" rel="noreferrer">GitHub</a></div><div className="social-links"><a href="https://github.com/seanj12c" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></div><small>© {new Date().getFullYear()} Sean Jimwell Buclatin</small></footer>;
export default Footer;
