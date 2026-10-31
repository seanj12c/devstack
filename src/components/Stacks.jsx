import React, { useMemo } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import htmlImage from "../assets/stacks/html.png";
import cssImage from "../assets/stacks/css.png";
import javascriptImage from "../assets/stacks/javascript.png";
import tailwindCssImage from "../assets/stacks/tailwindcss.png";
import figmaImage from "../assets/stacks/figma.png";
import drawioImage from "../assets/stacks/drawio.png";
import reactJsImage from "../assets/stacks/reactjs.png";
import animeJsImage from "../assets/stacks/animejs.png";
import googleFontsImage from "../assets/stacks/googlefonts.png";
import fontInUseImage from "../assets/stacks/fontinuse.png";
import coolorsImage from "../assets/stacks/coolors.png";
import colorHuntImage from "../assets/stacks/colorhunt.png";
import reactIconsImage from "../assets/stacks/reacticons.png";
import fontAwesomeImage from "../assets/stacks/fontawesome.png";
import flatIconImage from "../assets/stacks/flaticon.png";
import bootstrapImage from "../assets/stacks/bootstrap.png";
import bulmaImage from "../assets/stacks/bulma.png";
import zeplinImage from "../assets/stacks/zeplin.png";
import sheCodeImage from "../assets/stacks/shecode.png";
import blobMakerImage from "../assets/stacks/blobmaker.PNG";
import getWavesImage from "../assets/stacks/getwaves.PNG";
import magicPatternImage from "../assets/stacks/magicpattern.png";
import uiVerseImage from "../assets/stacks/uiverse.png";
import cssButtonsImage from "../assets/stacks/cssbutton.png";
import happyhuesImage from "../assets/stacks/happyhues.avif";

import haikeiImage from "../assets/stacks/haikei.PNG";

const item = (name, description, image, link, category) => ({ name, description, image, link, category });
const tools = [
  item("HTML", "Standards, syntax and references for the web.", htmlImage, "https://devdocs.io/html/", "Front End Tools"),
  item("CSS", "A practical reference for styling the web.", cssImage, "https://devdocs.io/css/", "Front End Tools"),
  item("JavaScript", "The essentials of modern client-side scripting.", javascriptImage, "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference", "Front End Tools"),
  item("She Codes", "Friendly, fast generators for CSS details.", sheCodeImage, "https://generators.shecodes.io/", "Front End Tools"),
  item("Blobmaker", "Generate organic SVG blobs in seconds.", blobMakerImage, "https://www.blobmaker.app/", "Front End Tools"),
  item("Get Waves", "Make clean, editable SVG wave backgrounds.", getWavesImage, "https://getwaves.io/", "Front End Tools"),
  item("Magic Pattern", "A visual toolkit for gradients and patterns.", magicPatternImage, "https://www.magicpattern.design/tools/gradient-generator", "Front End Tools"),
  item("UIVerse", "Open-source UI elements for your next project.", uiVerseImage, "https://uiverse.io/", "Front End Tools"),
  item("Happy Hues", "Palettes shown in thoughtful real-world layouts.", happyhuesImage, "https://www.happyhues.co/", "Theme | Colors"),
  item("CSS Buttons", "A collection of polished CSS button ideas.", cssButtonsImage, "https://cssbuttons.app/", "Front End Tools"),
  item("Tailwind CSS", "A utility-first framework for rapid UI work.", tailwindCssImage, "https://tailwindcss.com/", "CSS Framework"),
  item("Bootstrap", "Responsive components and a dependable grid.", bootstrapImage, "https://getbootstrap.com/", "CSS Framework"),
  item("Bulma", "Simple, modern CSS framework primitives.", bulmaImage, "https://bulma.io/", "CSS Framework"),
  item("Figma", "A collaborative home for interface design.", figmaImage, "https://www.figma.com/", "Design Tools"),
  item("draw.io", "Diagram ideas, systems, and user flows.", drawioImage, "https://app.diagrams.net/", "Design Tools"),
  item("Zeplin", "Clearer design handoff for product teams.", zeplinImage, "https://zeplin.io/", "Design Tools"),
  item("React", "A library for building component-based interfaces.", reactJsImage, "https://react.dev/", "Javascript Libraries"),
  item("Anime.js", "A lightweight animation engine for the web.", animeJsImage, "https://animejs.com/", "Javascript Libraries"),
  item("Google Fonts", "Browse typefaces ready for the web.", googleFontsImage, "https://fonts.google.com/", "Fonts"),
  item("Fonts In Use", "Find type inspiration in the wild.", fontInUseImage, "https://fontsinuse.com/", "Fonts"),
  item("Coolors", "Generate and refine color systems.", coolorsImage, "https://coolors.co/", "Theme | Colors"),
  item("Color Hunt", "Fresh, curated color palette inspiration.", colorHuntImage, "https://colorhunt.co/", "Theme | Colors"),
  item("React Icons", "Popular icon sets in one React package.", reactIconsImage, "https://react-icons.github.io/react-icons/", "Icons"),
  item("Font Awesome", "A familiar, expansive icon library.", fontAwesomeImage, "https://fontawesome.com/", "Icons"),
  item("Flaticon", "Millions of vector icons and stickers.", flatIconImage, "https://www.flaticon.com/", "Icons"),
  item("shadcn/ui", "Customizable, accessible components with source code you own.", `${process.env.PUBLIC_URL}/shadcn.png`, "https://ui.shadcn.com/docs", "Front End Tools"),
  item("Can I use", "Check browser support before choosing a web feature.", `${process.env.PUBLIC_URL}/caniuse.png`, "https://caniuse.com/", "Front End Tools"),
  item("Haikei", "Generate SVG waves, blobs, and layered design assets.", haikeiImage, "https://haikei.app/", "Design Tools"),
  item("Excalidraw", "Sketch diagrams and ideas on a collaborative whiteboard.", `${process.env.PUBLIC_URL}/excalidraw.png`, "https://excalidraw.com/", "Design Tools"),
  item("Motion", "Animation tools for JavaScript, React, and Vue.", `${process.env.PUBLIC_URL}/motion.png`, "https://motion.dev/", "Javascript Libraries"),
  item("Fontshare", "Explore fonts from the Indian Type Foundry.", `${process.env.PUBLIC_URL}/fontshare.png`, "https://www.fontshare.com/", "Fonts"),
  item("OKLCH Color Picker", "Explore and convert colors in the OKLCH color space.", `${process.env.PUBLIC_URL}/oklch.ico`, "https://oklch.com/", "Theme | Colors"),
  item("Lucide", "Browse customizable open-source SVG icons.", `${process.env.PUBLIC_URL}/lucide.ico`, "https://lucide.dev/icons", "Icons"),
  item("Vite", "Fast development server and optimized frontend builds.", `${process.env.PUBLIC_URL}/vite.svg`, "https://vite.dev/", "Front End Tools"),
  item("TypeScript", "Add static types and editor tooling to JavaScript.", `${process.env.PUBLIC_URL}/typescript.png`, "https://www.typescriptlang.org/", "Front End Tools"),
  item("Next.js", "Build full-stack React applications with routing and rendering tools.", `${process.env.PUBLIC_URL}/nextjs.ico`, "https://nextjs.org/", "Front End Tools"),
  item("Astro", "Build content-focused websites with less client-side JavaScript.", `${process.env.PUBLIC_URL}/astro.svg`, "https://astro.build/", "Front End Tools"),
  item("Svelte", "Build reactive interfaces with a compiler-based framework.", `${process.env.PUBLIC_URL}/svelte.png`, "https://svelte.dev/", "Front End Tools"),
  item("Vue.js", "A progressive framework for building reactive user interfaces.", `${process.env.PUBLIC_URL}/vue.svg`, "https://vuejs.org/", "Front End Tools"),
  item("Playwright", "Test web applications across Chromium, Firefox, and WebKit.", `${process.env.PUBLIC_URL}/playwright.ico`, "https://playwright.dev/", "Front End Tools"),
  item("Vitest", "Run unit and component tests with Vite-powered tooling.", `${process.env.PUBLIC_URL}/vitest.ico`, "https://vitest.dev/", "Front End Tools"),
  item("Zod", "Validate data with TypeScript-first schemas and inferred types.", `${process.env.PUBLIC_URL}/zod.png`, "https://zod.dev/", "Javascript Libraries"),
  item("TanStack Query", "Fetch, cache, and synchronize server state in your UI.", `${process.env.PUBLIC_URL}/tanstack.svg`, "https://tanstack.com/query/latest", "Javascript Libraries"),
  item("Zustand", "Manage React application state with small, hook-based stores.", `${process.env.PUBLIC_URL}/zustand.png`, "https://zustand.docs.pmnd.rs/", "Javascript Libraries"),
  item("Radix UI", "Accessible UI primitives, themes, icons, and colors.", `${process.env.PUBLIC_URL}/radix.png`, "https://www.radix-ui.com/", "Front End Tools"),
  item("daisyUI", "Ready-to-use component classes and themes for Tailwind CSS.", `${process.env.PUBLIC_URL}/daisyui.svg`, "https://daisyui.com/", "CSS Framework"),
  item("GSAP", "Create timeline, scroll, and SVG animations for the web.", `${process.env.PUBLIC_URL}/gsap.png`, "https://gsap.com/", "Javascript Libraries"),
  item("Squoosh", "Compress and compare image formats directly in your browser.", `${process.env.PUBLIC_URL}/squoosh.ico`, "https://squoosh.app/", "Design Tools"),
];
const categories = ["All", "Front End Tools", "CSS Framework", "Design Tools", "Javascript Libraries", "Fonts", "Theme | Colors", "Icons"];

const Stacks = ({ category, onCategoryChange, search, onClearSearch, libraryLabel }) => {
  const displayed = useMemo(() => tools.filter((tool) => (category === "All" || tool.category === category) && `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(search.trim().toLowerCase())), [category, search]);
  return <section className="library" id="library"><div className="library-inner"><div className="section-heading"><div><p>THE DEVSTACKS DIRECTORY</p><h2>{search.trim() ? "Search results" : libraryLabel}</h2>{search.trim() && <p className="search-summary">Matching “{search.trim()}” <button type="button" onClick={onClearSearch}>Clear search ×</button></p>}</div><span className="resource-count" role="status" aria-live="polite">{displayed.length} resources</span></div><div className="category-pills" role="tablist" aria-label="Resource categories">{categories.map((name) => <button role="tab" aria-selected={category === name} className={category === name ? "active" : ""} key={name} onClick={() => onCategoryChange(name)}>{name}</button>)}</div><div className="resource-grid">{displayed.length ? displayed.map((tool) => <a className="resource-card" key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer"><div className="card-top"><img className="tool-logo" src={tool.image} alt={`${tool.name} logo`} /><FiArrowUpRight className="launch-icon" /></div><h3>{tool.name}</h3><p>{tool.description}</p></a>) : <div className="empty-state"><strong>No resources found.</strong><br />Try a different search or collection.</div>}</div></div></section>;
};
export default Stacks;
