import React, { useState, useEffect } from 'react'
import { Button, Container, Card } from 'Common'

import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import api from '../../../services/api'

export function Projects() {
	const [projects, setProjects] = useState([])

	const [page, setPage] = useState(1)

	useEffect(() => {
		async function loadProjects() {
			const response = await api.get(
				`/users/thejoaov/repos?per_page=9&page=${page}&sort=updated`
			)
			setProjects([...projects, ...response.data])
		}
		loadProjects()
	}, [page])

	return (
		<Wrapper as={Container} id="projects">
			<h2>Projetos do Github</h2>
			<Grid>
				{projects.map(project => (
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
				<Button onClick={() => setPage(page + 1)}>Mais projetos</Button>
			</Grid>
		</Wrapper>
	)
}
