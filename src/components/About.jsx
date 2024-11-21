import React, { memo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.png"
        alt="Samuel Oyedeji"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Samuel Oyedeji
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          I am a Full Stack Web Developer with hands-on experience in web app
          development and software design. I have a strong foundation in both
          front-end and back-end technologies and a commitment to delivering
          secure, user-friendly, and dynamic web solutions.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Currently pursuing a Full Stack Web Development program at Red River
          College, where I am gaining expertise in technologies like PHP,
          Laravel, and JavaScript frameworks. I also specialize in secure web
          development, learning to prevent SQL injection, cross-site scripting
          (XSS), and other vulnerabilities.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          As part of my journey, I have developed content management systems,
          performed code reviews, and designed full-stack projects using Agile
          methodologies. I am highly detail-oriented and thrive in collaborative
          environments that promote innovation and problem-solving.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let’s connect and build something great together!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
