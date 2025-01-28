// Imports React library
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import { GitHubLogo, LinkedInLogo } from "../components/Logos";

const HomePage = () => {
  // Logic for the hover effect on all projects.
  const [hoverStyles, setHoverStyles] = useState({});

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: `scale(1.05) translate(${x * 2}%, ${y * 2}%)`,
        //! Adjust the z-index and position properties to allow the image to overlap other elements
        //! Make further adjustments to prevent the expanded image from changing the position of other elements
        // zIndex: 10,
        // position: "relative",
        border: "2px solid #003622", // darkgreen border
        borderRadius: "0.75rem", // rounded-lg in Tailwind
      },
    }));
  };

  const resetHoverStyle = (id) => {
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [id]: { transform: "none" },
    }));
  };

  // Logic for the click effect on all marketing images.
  const expandImage = (imageSrc, imageAlt) => {
    const modal = document.createElement("div");
    modal.className =
      "expandedImageModal fixed inset-0 bg-white bg-opacity-[.90] flex justify-center items-center z-50";

    const modalImg = document.createElement("img");
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    modalImg.className = "max-w-[75vw] max-h-[75vh] object-contain"; // Constrained size with object-contain to maintain aspect ratio
    modal.appendChild(modalImg);

    // Append modal to body
    document.body.appendChild(modal);

    // Event listener to close modal when clicked
    modal.addEventListener("click", () => {
      modal.remove();
    });
  };

  // Object Arrays
  const fullstacks = [
    {
      title: "The Format Group",
      description: "Austin-Based Instructional Design Firm",
      href: "https://www.formatllc.com/",
      src: "full_stack/format.png",
      alt: "Format Website, with a splash image of an artistic classroom",
    },
    {
      title: "ISCA Publications",
      description: "International School Counselor Association Library",
      href: "https://www.iscapublications.com/",
      src: "full_stack/isca.png",
      alt: "ISCA Publications site, displaying multiple book covers",
    },
  ];
  const samples = [
    {
      title: "Javascript Quiz",
      description: "Timed Multiple Choice Game",
      href: "https://jessedenier.github.io/Multiple-Choice-Quiz/",
      src: "code_samples/quiz.png",
      alt: "Javascript Quiz Website, showing a question and answer choices",
    },
    {
      title: "Password Generator",
      description: "Customizable Random String Tool",
      href: "https://jessedenier.github.io/Password-Generator/",
      src: "code_samples/password.png",
      alt: "Password Generator Website, showing an empty text field and a button ",
    },
    {
      title: "Weather Dashboard",
      description: "Simplified Location-Based Forecast",
      href: "https://jessedenier.github.io/Weather-Dashboard/",
      src: "code_samples/weather.png",
      alt: "Weather Dashboard Website, showing a search bar and a forecast",
    },
    {
      title: "Valentines Bingo",
      description: "Real-World Scavenger Hunt Game",
      href: "https://jessedenier.github.io/Bingo/",
      src: "code_samples/bingo.png",
      alt: "Pink Bingo Website, showing a 5x5 grid of white space",
    },
    {
      title: "Work Scheduler",
      description: "Daily Planning Tool",
      href: "https://jessedenier.github.io/Work-Scheduler/",
      src: "code_samples/scheduler.png",
      alt: "Schedule Website, showing an hourly schedule",
    },
    {
      title: "Recipe Creator",
      description: "Ingredient-Based Recipe Generator",
      href: "https://jessedenier.github.io/Recipe-Creator/",
      src: "code_samples/recipe.png",
      alt: "Recipe Webiste, showing a line art graphic and input form for ingredients",
    },
    {
      title: "Parlay Calculator",
      description: "Probability Estimation Tool",
      href: "https://jessedenier.github.io/Parlay-Probability/",
      src: "code_samples/parlay.png",
      alt: "Parlay Calculator Website, showing a 6 different input forms and a submit button",
    },
    {
      title: "Expense Tracker",
      description: "Simple Budgeting Tool",
      href: "https://expense-tracker-ut-8e4127567b9a.herokuapp.com/login",
      src: "code_samples/expense.png",
      alt: "Expense Tracking Website, showing a list of charges and a total",
    },
  ];
  const logos = [
    {
      title: "Law Offices of Cornell Smith & Mierl",
      alt: "CSMBB Logo, a 2x2 blue grid with each partner's name on it's right",
      src: "logos/csmbb.svg",
    },
    {
      title: "Tori's Tots Nursery",
      alt: "Tori's Tots Logo, a green tree growing from a heart into a lightbulb",
      src: "logos/toritots.svg",
    },
    {
      title: "Hemlock Aerials",
      alt: "Hemlock Aerials Logo, a geometric tree growing from simplistic lines",
      src: "logos/hemlock.svg",
    },
    {
      title: "Corden's Court",
      alt: "Corden's Court logo, a round table surrounded by knights holding beer steins",
      src: "logos/corden.svg",
    },
  ];
  const flyers = [
    {
      title: "South By San Marcos 2016",
      alt: "Green pull-tab flyer showing a musician on stage",
      src: "flyers/2016sxsm.png",
    },
    {
      title: "South By San Marcos 2017",
      alt: "Red, white, and blue flyer with stars and stripes",
      src: "flyers/2017sxsm.svg",
    },
    {
      title: "Eclipse Viewing",
      alt: "Purple flyer with a campsite, fire, and combined moon and sun",
      src: "flyers/2024eclipse.svg",
    },
    {
      title: "Valentine's Bar Crawl",
      alt: "Retro flyer with a stylized sunset and hearts",
      src: "flyers/2023valentines.png",
    },
    {
      title: "Save Peter Pan Putt Putt",
      alt: "Quirky flyer with a large dinosaur",
      src: "flyers/2024peterpan.png",
    },
    {
      title: "Friend's Birthday",
      alt: "Hercules movie poster with faces replaced",
      src: "flyers/2022ramzi.png",
    },
    {
      title: "My Birthday",
      alt: "Wavy retro flyer highlighting a watch",
      src: "flyers/2023jesse1.svg",
    },
    {
      title: "Birthday Schedule",
      alt: "Green, orange, and brown flags showing activities for each hour.",
      src: "flyers/2023jesse2.svg",
    },
  ];
  const art = [
    {
      alt: "A cute red panda holding a bag of popeyes and a biscuit",
      src: "art/panda.png",
    },
    {
      alt: "Collection of historic Austin signs in a collage over an Austin road map",
      src: "art/austin.svg",
    },
    {
      alt: "Greek inspired pegasus, ouroboros, and woman in a sun",
      src: "art/greek.svg",
    },
    {
      alt: "Celtics player Rob Williams III blocking Steph Curry's shot in outerspace",
      src: "art/time_lord.svg",
    },
  ];

  // Logic for flyer carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flyers.length);
  };

  return (
    <main className="text-darkgreen font-sans">
      {/* About Me Section */}
      <section
        id="About"
        className="flex items-center justify-center scroll-mt-20 sm:min-h-[580px] p-6"
      >
        <div className="bg-lightgreen shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="flex items-center gap-6">
            <div className="w-1/4">
              <img
                src="headshot.svg"
                alt="Professional headshot"
                className="w-full h-auto object-cover rounded-full"
              />
            </div>
            <div className="w-3/4">
              <div className="text-lg">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Hi, I'm Jesse Denier.<br>Austin native, digital handyman, and queso lover.<br>Experienced web developer, graphic designer, and tech expert."
                      )
                      .callFunction(() => {
                        // Stop the blinking cursor by setting opacity to 0 and removing the animation
                        const cursor = document.querySelector(
                          ".Typewriter__cursor"
                        );
                        if (cursor) {
                          cursor.style.animation = "none";
                          cursor.style.opacity = "0";
                        }
                      })
                      .start(); // Starts the typewriting animation
                  }}
                  options={{
                    delay: 30, // Typing speed
                    html: true, // Enable HTML tags for line breaks
                    loop: false, // Do not loop the text
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio" className="p-6">
        {/* Projects Section */}
        <section id="Projects" className=" scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          {/* Full Stack Web Development Section */}
          <section id="FullStack">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Full Stack Web Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {fullstacks.map((project, index) => (
                <div
                  key={index}
                  className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group"
                >
                  <a
                    className="items-center justify-center relative overflow-visible"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={(e) =>
                      handleMouseMove(e, `fullstack-${index}`)
                    }
                    onMouseLeave={() => resetHoverStyle(`fullstack-${index}`)}
                  >
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full transition-transform duration-500 ease-out"
                      style={
                        hoverStyles[`fullstack-${index}`] || {
                          transform: "none",
                        }
                      }
                    />
                  </a>
                  <div className="p-4 flex flex-col">
                    <strong className="text-lg text-white font-bold">
                      {project.title}
                    </strong>
                    <span className="text-sm text-white">
                      {project.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Samples Section */}
          <section id="Samples">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Code Samples
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {samples.map((sample, index) => (
                <div
                  key={index}
                  className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group"
                >
                  <a
                    className="items-center justify-center relative overflow-visible"
                    href={sample.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={(e) => handleMouseMove(e, `sample-${index}`)}
                    onMouseLeave={() => resetHoverStyle(`sample-${index}`)}
                  >
                    <img
                      src={sample.src}
                      alt={sample.alt}
                      className="w-full transition-transform duration-500 ease-out"
                      style={
                        hoverStyles[`sample-${index}`] || {
                          transform: "none",
                        }
                      }
                    />
                  </a>
                  <div className="p-4 flex flex-col">
                    <strong className="text-lg text-white font-bold">
                      {sample.title}
                    </strong>
                    <span className="text-sm text-white">
                      {sample.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
        {/* Divider */}
        <hr className="border-t-2 border-darkgreen my-8" />
        {/* Marketing Section */}
        <section id="Marketing" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Marketing</h2>
          {/* Logos Section */}
          <section id="Logos">
            <h3 className="text-2xl font-semibold text-center mb-4">Logos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {logos.map((item, index) => (
                <div
                  key={index}
                  className="h-auto flex flex-col relative overflow-visible group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full transition-transform duration-500 ease-out"
                    onClick={() => expandImage(item.src, item.alt)} // Click to expand image
                  />
                  <strong className="p-2 text-lg font-bold">
                    {item.title}
                  </strong>
                </div>
              ))}
            </div>
          </section>

          {/* Flyers Section */}
          <section id="Flyers" className="p-6">
            <h3 className="text-2xl font-semibold text-center mb-6">Flyers</h3>
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              {/* Carousel Container */}
              <div className="relative flex items-center justify-center w-full h-[30rem]">
                {flyers.map((flyer, index) => {
                  const isCurrent = index === currentIndex;

                  // Wrap-around calculations for neighboring flyers
                  const leftOne =
                    index ===
                    (currentIndex - 1 + flyers.length) % flyers.length;
                  const leftTwo =
                    index ===
                    (currentIndex - 2 + flyers.length) % flyers.length;
                  const rightOne = index === (currentIndex + 1) % flyers.length;
                  const rightTwo = index === (currentIndex + 2) % flyers.length;

                  // Render only the relevant 5 flyers
                  if (
                    !(isCurrent || leftOne || leftTwo || rightOne || rightTwo)
                  ) {
                    return null;
                  }

                  // Adjust transform to handle wrap-around
                  const relativeIndex =
                    (index - currentIndex + flyers.length) % flyers.length; // Relative position
                  const adjustedTranslateX =
                    relativeIndex > flyers.length / 2
                      ? relativeIndex - flyers.length
                      : relativeIndex; // Wrap around when going beyond halfway

                  const getScale = () => {
                    if (isCurrent) return "scale(1)";
                    if (leftOne || rightOne) return "scale(0.8)";
                    if (leftTwo || rightTwo) return "scale(0.6)";
                    return "scale(0.4)";
                  };

                  const getZIndex = () => {
                    if (isCurrent) return 20;
                    if (leftOne || rightOne) return 10;
                    if (leftTwo || rightTwo) return 5;
                    return 0;
                  };

                  const getOpacity = () => (leftTwo || rightTwo ? 0.5 : 1);

                  return (
                    <div
                      key={index}
                      className="absolute transition-transform duration-500 ease-in-out flex flex-col items-center text-center"
                      style={{
                        transform: `${getScale()} translateX(${
                          adjustedTranslateX * 100
                        }%)`,
                        zIndex: getZIndex(),
                        opacity: getOpacity(),
                      }}
                    >
                      <img
                        src={flyer.src}
                        alt={flyer.alt}
                        className="rounded-lg shadow-lg w-[15rem] h-auto object-cover"
                        onClick={() => expandImage(flyer.src, flyer.alt)} // Click to expand image
                      />
                      {isCurrent && (
                        <div className="mt-4">
                          <h4 className="text-xl font-bold">{flyer.title}</h4>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-darkgreen text-white px-2 lg:px-4 py-2 lg:py-2 rounded-full shadow-lg transition-colors duration-300 z-10"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-darkgreen text-white px-2 lg:px-4 py-2 lg:py-2 rounded-full shadow-lg transition-colors duration-300 z-10"
              >
                &#8594;
              </button>
            </div>
          </section>

          {/* Art Section */}
          <section id="Art">
            <h3 className="text-2xl font-semibold text-center mb-4">Art</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {art.map((item, index) => (
                <div
                  key={index}
                  className="h-auto relative overflow-visible group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full transition-transform duration-500 ease-out"
                    onClick={() => expandImage(item.src, item.alt)} // Click to expand image
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-darkgreen text-white flex flex-col lg:flex-row items-center gap-4 relative">
        <p className="text-center lg:text-left lg:absolute lg:left-4">
          &copy; 2025 Jesse Denier. All Rights Reserved.
        </p>
        <div className="text-center mx-auto lg:absolute lg:inset-x-0">
          <a
            href="mailto:jessecdenier@gmail.com"
            className="text-white hover:text-yellow transform hover:scale-105 transition-transform duration-300 inline-block"
          >
            jessecdenier@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 lg:absolute lg:right-4">
          <a
            href="https://github.com/JesseDenier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow group transition-transform duration-300"
          >
            <GitHubLogo className="h-6 w-6 fill-current group-hover:scale-125 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-denier/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow group transition-transform duration-300"
          >
            <LinkedInLogo className="h-6 w-6 fill-current group-hover:scale-125 transition-transform duration-300" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
