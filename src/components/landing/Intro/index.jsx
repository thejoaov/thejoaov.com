import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { defaultTitle, shortDescription } from 'Data'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>{defaultTitle}</h1>
				<h4>{shortDescription}</h4>
				<Button as={AnchorLink} href="#contact">
					Fale comigo!
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={shortDescription} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
