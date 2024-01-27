import React, { useState } from "react";
import Navbar from "./Navbar";

// Import images
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

const Stacks = () => {
  // Function to create a tool with a link
  function createToolWithLink(name, description, image, link) {
    return { name, description, image, link };
  }

  const frontEndTools = [
    createToolWithLink(
      "HTML",
      "Document for HTML",
      htmlImage,
      "https://devdocs.io/html/"
    ),
    createToolWithLink(
      "CSS",
      "Styling with CSS",
      cssImage,
      "https://devdocs.io/css/"
    ),
    createToolWithLink(
      "JavaScript",
      "Dynamic scripting with JavaScript",
      javascriptImage,
      "https://www.javascript.com/"
    ),
    createToolWithLink(
      "She Codes",
      "Interactive CSS Generators",
      sheCodeImage,
      "https://generators.shecodes.io/"
    ),
    createToolWithLink(
      "Blobmaker",
      "Blobmaker is a free generative design tool made with 💕",
      blobMakerImage,
      "https://www.blobmaker.app/"
    ),
    createToolWithLink(
      "Get Waves",
      "Make some waves!",
      getWavesImage,
      "https://getwaves.io/"
    ),
    createToolWithLink(
      "Magic Pattern",
      "Magic pattern gradient generator tool",
      magicPatternImage,
      "https://www.magicpattern.design/tools/gradient-generator"
    ),
    createToolWithLink(
      "UIVerse",
      "Open-Source UI elements for any project",
      uiVerseImage,
      "https://uiverse.io/"
    ),
    createToolWithLink(
      "CSS Buttons",
      "Collection of over 60+ handpicked and custom made CSS buttons for your website.",
      cssButtonsImage,
      "https://cssbuttons.app/"
    ),
  ];

  const cssFramework = [
    createToolWithLink(
      "Tailwind CSS",
      "Utility-first CSS framework",
      tailwindCssImage,
      "https://tailwindcss.com/"
    ),
    createToolWithLink(
      "Bootstrap",
      "Build fast, responsive sites with Bootstrap",
      bootstrapImage,
      "https://getbootstrap.com/"
    ),
    createToolWithLink(
      "Bulma",
      "The modern CSS framework.",
      bulmaImage,
      "https://bulma.io/"
    ),
  ];

  const designTools = [
    createToolWithLink(
      "Figma",
      "Design and Collaborate in Figma",
      figmaImage,
      "https://www.figma.com/"
    ),
    createToolWithLink(
      "draw.io",
      "Create diagrams with draw.io",
      drawioImage,
      "https://draw.io/"
    ),
    createToolWithLink(
      "Zeplin",
      "Perfecting handoff was just the beginning",
      zeplinImage,
      "https://zeplin.io/"
    ),
  ];

  const javascriptLibraries = [
    createToolWithLink(
      "React JS",
      "Build user interfaces with React JS",
      reactJsImage,
      "https://react.dev/"
    ),
    createToolWithLink(
      "Anime JS",
      "JavaScript animation engine",
      animeJsImage,
      "https://animejs.com/"
    ),
  ];

  const fonts = [
    createToolWithLink(
      "Google Fonts",
      "Explore and use Google Fonts",
      googleFontsImage,
      "https://fonts.google.com/"
    ),
    createToolWithLink(
      "Font in Use",
      "Discover fonts in use",
      fontInUseImage,
      "https://fontsinuse.com/"
    ),
  ];

  const themeColors = [
    createToolWithLink(
      "Coolors",
      "Generate color schemes with Coolors",
      coolorsImage,
      "https://coolors.co/"
    ),
    createToolWithLink(
      "Color Hunt",
      "Discover and create color palettes on Color Hunt",
      colorHuntImage,
      "https://colorhunt.co/"
    ),
  ];

  const icons = [
    createToolWithLink(
      "React Icons",
      "Icon library for React applications",
      reactIconsImage,
      "https://react-icons.github.io/react-icons/"
    ),
    createToolWithLink(
      "Font Awesome",
      "Vector icons and social logos",
      fontAwesomeImage,
      "https://fontawesome.com/"
    ),
    createToolWithLink(
      "Flat Icon",
      "Access 13.7M+ vector icons & stickers",
      flatIconImage,
      "https://www.flaticon.com/"
    ),
  ];

  // Sample data for different categories
  const contentByCategory = {
    All: [
      ...frontEndTools,
      ...cssFramework,
      ...designTools,
      ...javascriptLibraries,
      ...fonts,
      ...themeColors,
      ...icons,
    ],
    "Front End Tools": frontEndTools,
    "CSS Framework": cssFramework,
    "Design Tools": designTools,
    "Javascript Libraries": javascriptLibraries,
    Fonts: fonts,
    "Theme | Colors": themeColors,
    Icons: icons,
  };

  const renderContent = () => {
    return (
      <div
        className={`grid mx-auto sm:w-auto sm:mx-0 justify-center object-contain grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {contentByCategory[category].map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="bg-white p-4 mb-4 rounded shadow">
              <img
                src={tool.image}
                alt={tool.name}
                className="w-16 h-16 rounded-lg mb-2 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-xs">{tool.description}</p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  const [category, setCategory] = useState("All");

  const renderSidebar = () => {
    const categories = Object.keys(contentByCategory);

    return (
      <div className="hidden md:flex flex-col items-end pr-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`mb-2 py-2 px-4 rounded ${
              cat === category ? "bg-primary text-white" : "bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar setCategory={setCategory} />

      <div className="flex-1 p-4 md:p-8  bg-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            {renderContent()}
          </div>
          {renderSidebar()}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
