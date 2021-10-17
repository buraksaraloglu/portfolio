import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Text, Image, Button, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FiArrowRight } from 'react-icons/fi';

import ButtonLink from '../UI/ButtonLink';
import { MAX_DEVICE_SIZES } from '../../utils/constants';

import './styles.scss';

const ProjectSummaryItem = ({ project }) => {
	const isMobile = useMediaQuery(`(max-width: ${MAX_DEVICE_SIZES.PHONE}px)`);

	return (
		<Paper radius="xl" className="summary-item" my={16} pb={isMobile ? 16 : null}>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{ maxWidth: 980, cols: 2, spacing: 'md' },
					{ maxWidth: MAX_DEVICE_SIZES.PHONE, cols: 1, spacing: 'md' },
					{ maxWidth: MAX_DEVICE_SIZES.SMALL_PHONE, cols: 1, spacing: 'xs' },
				]}
			>
				<div
					style={{
						marginTop: 'auto',
					}}
					className="summary-item__image-container"
				>
					<Image
						mx="auto"
						src={project.image}
						height={isMobile ? 220 : 280}
						radius="lg"
						alt={project.title}
						className="summary-item__image"
						withPlaceholder
						imageProps={{ loading: 'lazy' }}
					/>
				</div>
				<div className="content-wrapper">
					{/* Project Header */}
					<Paper radius="lg" className="content-container" mb={16}>
						<Text weight={600} size="lg" ml={8} lineClamp={1} aria-label={project.title}>
							{project.title}
						</Text>
						<div className="content-container__links-container">
							<ButtonLink title="Live Demo" href={project.demo} aria-label="Project demo link" />
							<ButtonLink title="GitHub" href={project.github} aria-label="Project github link" />
						</div>
					</Paper>
					<div className="content-wrapper__description-container">
						<Text
							component="article"
							size="md"
							m={{ y: '1rem' }}
							lineClamp={3}
							className="content-wrapper__description-container__description"
							aria-label={project.description}
							color="gray"
						>
							{project.description}
						</Text>
						<Button
							mt={8}
							color="dark"
							component="a"
							radius="md"
							aria-label="View more button"
							variant="outline"
							rightIcon={<FiArrowRight size={16} />}
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							View more
						</Button>
					</div>
				</div>
			</SimpleGrid>
		</Paper>
	);
};

ProjectSummaryItem.propTypes = {
	project: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		demo: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProjectSummaryItem;
