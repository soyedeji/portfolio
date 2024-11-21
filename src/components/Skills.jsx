import { useTrail, animated } from "react-spring";
import { Card } from "@/components/ui/card";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5, label: "HTML5" },
  { id: "css", Component: FaCss3Alt, label: "CSS3" },
  { id: "javascript", Component: SiJavascript, label: "JavaScript" },
  { id: "bootstrap", Component: FaBootstrap, label: "Bootstrap" },
  { id: "typescript", Component: SiTypescript, label: "TypeScript" },
  { id: "react", Component: FaReact, label: "React" },
  { id: "mui", Component: SiMui, label: "MUI" },
  { id: "tailwind", Component: SiTailwindcss, label: "Tailwind CSS" },
  { id: "node", Component: FaNodeJs, label: "Node.js" },
  { id: "sql", Component: SiMysql, label: "MySQL" },
  { id: "npm", Component: FaNpm, label: "NPM" },
  { id: "yarn", Component: SiYarn, label: "Yarn" },
  { id: "mongodb", Component: SiMongodb, label: "MongoDB" },
  { id: "vite", Component: SiVite, label: "Vite" },
  { id: "vscode", Component: SiVisualstudiocode, label: "VS Code" },
  { id: "github", Component: DiGithubBadge, label: "GitHub" },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-darkDesert mb-6">Skills</h2>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component, label } = skills[index];
            return (
              <animated.div
                style={props}
                className="w-full"
                key={skills[index].id}
              >
                <Card className="flex flex-col items-center p-4 transition-transform duration-300 transform hover:scale-105">
                  <div className="text-5xl text-goldDesert mb-2">
                    <Component />
                  </div>
                  <p className="text-sm font-medium text-darkDesert">{label}</p>
                </Card>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
