import React from 'react';
import { SimpleGrid, Title } from '@mantine/core';

import ProjectSummary from '../../components/ProjectSummary';
import works from '../../shared/works.json';

import './styles.scss';

const ProjectSummaries = () => (
	<section className="projects-container">
		<Title order={3} my={8}>
			My Projects
		</Title>
		<SimpleGrid cols={1}>
			{works?.length
				? works.map((project) => <ProjectSummary key={project.id} project={project} />)
				: null}
		</SimpleGrid>
	</section>
);

export default ProjectSummaries;
