import React, { useState, useEffect } from 'react'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import api from '../../../services/api'

export function Projects() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		async function loadProjects() {
			const response = await api.get('/users/thejoaov/repos?per_page=200&page=1&sort=updated')
			setProjects(response.data)
		}
		loadProjects()
	}, [])

	return (
		<Wrapper as={Container} id="projects">
			<h2>Projetos do Github ({projects.length})</h2>
			<Grid>
				{projects.slice(0, 12).map(project => (
					<Item
						key={project.id}
						as="a"
						href={project.svn_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<Content>
								<h4>{project.name}</h4>
								<p>{project.description}</p>
							</Content>
							<Stats>
								<div>
									<img src={starIcon} alt="stars" />
									<span>{project.stargazers_count}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{project.forks_count}</span>
								</div>
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
