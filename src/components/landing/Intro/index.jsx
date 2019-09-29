import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { defaultTitle } from 'Data'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import api from '../../../services/api'

export function Intro() {
	const [user, setUser] = useState({})

	useEffect(() => {
		async function getUser() {
			const response = await api.get('/users/thejoaov')
			setUser(response.data)
		}
		getUser()
	}, [])

	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details>
					<h1>{defaultTitle}</h1>
					<h4>{user.bio}</h4>
					<Button as={AnchorLink} href="#contact">
						Fale comigo!
					</Button>
				</Details>
				<Thumbnail>
					<img src={dev} alt={user.bio} />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
