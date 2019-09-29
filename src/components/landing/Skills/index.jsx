import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { defaultDescription } from 'Data'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt={defaultDescription} />
			</Thumbnail>
			<Details>
				<h1>Minha Stack</h1>
				<p>{defaultDescription}</p>
				<Button as={AnchorLink} href="#contact">
					Entre em contato comigo
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
