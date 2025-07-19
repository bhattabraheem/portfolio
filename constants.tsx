
import React from 'react';
import type { Skill, Project, Experience } from './types';

// SVG Icons (simple examples)
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>;
const TypeScriptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 15v-3.87a3.37 3.37 0 0 0-.94-2.61l-3.2-3.2A3.37 3.37 0 0 0 12.26 5H9.5a2.5 2.5 0 0 0-2.5 2.5v11.5a2.5 2.5 0 0 0 2.5 2.5h8.28a2.5 2.5 0 0 0 2.5-2.5V18a3 3 0 0 0-3-3h-2.5"></path><path d="M18 15v3"></path><path d="M11 12.5h4"></path><path d="M13 10v5"></path></svg>;
const NodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6.2c.4-.4.8-1 .8-1.7C20.8 3.6 20.1 3 19.2 3H5.3C4.4 3 3.6 3.6 3.6 4.5c0 .7.3 1.3.8 1.7L12 12l-7.6 5.8c-.5.4-.8 1-.8 1.7C3.6 20.4 4.4 21 5.3 21h13.9c.9 0 1.7-.6 1.7-1.5 0-.7-.3-1.3-.8-1.7L12 12l8-5.8z"></path></svg>;
const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 20.5C18 22 20 22 21 21s1-3-.5-4.5L13 9l-7 13c-1 2 2 5 5 2l6.5-10.5"></path><path d="M9.5 2C8 3.5 6 3.5 5 4.5S4 7.5 5.5 9L13 17l7-13c1-2-2-5-5-2L8.5 12.5"></path></svg>;
const GeminiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.42 12.24a2.5 2.5 0 0 1-3.32 3.32A2.5 2.5 0 0 1 5.24 12a2.5 2.5 0 0 1 3.32-3.32A2.5 2.5 0 0 1 10.42 12.24Z"/><path d="m14.2 18.2-1.3-1.3"/><path d="M12 22s5-3.5 5-8-5-8-5-8-5 3.5-5 8 5 8 5 8"/><path d="m18.2 9.8-1.3-1.3"/><path d="M22 12h-2"/><path d="m9.8 5.8-1.3-1.3"/><path d="M12 2V1"/><path d="m5.8 18.2 1.3-1.3"/><path d="M2 12h2"/><path d="m18.2 18.2-1.3-1.3"/></svg>;

export const SKILLS: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Gemini API', icon: <GeminiIcon /> },
  { name: 'UI/UX Design', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"></path><path d="M12 3a4 4 0 0 0 0 8Z"></path></svg> },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Data Visualizer',
    description: 'A web application that allows users to upload datasets and generate interactive charts and graphs using natural language prompts processed by the Gemini API.',
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    tags: ['React', 'D3.js', 'Gemini API', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Real-time Collaborative Whiteboard',
    description: 'A multi-user whiteboard application built with WebSockets, allowing for real-time drawing, text, and shape collaboration.',
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    tags: ['React', 'Node.js', 'Socket.io', 'Canvas API'],
    liveUrl: '#',
  },
  {
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A full-stack e-commerce solution with features like product management, shopping cart, secure checkout with Stripe, and user reviews.',
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovatech Solutions',
    period: '2020 - Present',
    description: [
      'Led the development of a design system used across 5+ enterprise applications, improving development speed by 30%.',
      'Architected and built a new customer-facing analytics dashboard using React and D3.js, handling over 1 million data points.',
      'Mentored a team of 4 junior engineers, conducting code reviews and promoting best practices in TypeScript and React.',
      'Integrated the Gemini API for a new AI-driven feature, resulting in a 15% increase in user engagement.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creations Agency',
    period: '2017 - 2020',
    description: [
       'Developed and maintained client websites using React, resulting in an average 25% increase in performance and user satisfaction scores.',
       'Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect, responsive web pages.',
       'Built reusable components that were adopted across multiple projects, saving hundreds of development hours.',
    ],
  },
];

export const PORTFOLIO_DATA = {
    name: "Abraheem iqbal bhat",
    title: "Senior Frontend React Engineer",
    about: "I'm a seasoned Senior Frontend Engineer with a passion for creating beautiful, functional, and user-centric web applications. With deep expertise in the React ecosystem and a keen eye for UI/UX design, I thrive on solving complex problems and building cutting-edge solutions. My recent work involves leveraging the Gemini API to create smarter, more interactive user experiences.",
    skills: SKILLS.map(s => s.name),
    projects: PROJECTS,
    experience: EXPERIENCE,
    contact: {
        email: "bhattabraheem@gmail.com",
        linkedin: "https://www.linkedin.com/in/bhatt-abraheem-1b630b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "github.com/bhattabraheem-example"
    }
}
