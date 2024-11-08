import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCardTwo from "./ProjectsCardTwo.js";
import ProjectsCardThree from "./ProjectCardThree.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Book Store"
          des="A React app built using the books backend live API's and used trending technologies like  React state management, React Router DOM, Parcel, Babel and many more."
          src={projectOne}
        />
        <ProjectsCardTwo
          title="Portfolio"
          des="This project is a responsive portfolio website with Reactjs and Tailwind CSS showcasing a collection of personal projects and professional experiences."
          src={projectTwo}
        />
        <ProjectsCardThree
          title="TicTacToe"
          des="This project demonstrates JavaScript skills in game logic, DOM manipulation, and event handling. The Tic-Tac-Toe game is a fun, interactive example of front-end development."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
