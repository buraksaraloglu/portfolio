import React from 'react';
import { ProjectHeader } from '../components/header';
import { Project } from '../components/project';

export const ProjectContainer = () => {
  return (
    <>
      <ProjectHeader />
      <section id="project">
        <Project />
      </section>
    </>
  );
};
