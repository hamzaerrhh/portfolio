import css from "./css.png";
import git from "./git.png";
import figma from "./figma.png";
import javascript from "./javascript.png";
import typescript from "./typescript.png";
import html from "./html.png";
import mongodb from "./mongodb.png";
import nodejs from "./nodejs.png";
import reactjs from "./reactjs.png";
import redux from "./tailwind.png";
import redis from "./redis.png";
import posterSQL from "./postgreSQL.png";
import nextjs from "./Nextjs.png";

export const frontEnd = [
  { name: "html", icon: html },
  {
    name: "css",
    icon: css,
  },
  { name: "react", icon: reactjs },
  { name: "redux", icon: redux },
  { name: "JavaScript", icon: javascript },
  { name: "typescript", icon: typescript },
  { name: "nextjs", icon: nextjs },
];

export const dataBase = [
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "postgresql",
    icon: posterSQL,
  },
  {
    name: "redis",
    icon: redis,
  },
];
export const backend=[
  {
    
  }
]

export const otherSkils = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export default { frontEnd, otherSkils, dataBase };
