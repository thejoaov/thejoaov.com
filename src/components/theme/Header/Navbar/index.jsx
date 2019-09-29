import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Profile } from './styles'
import config from '../../../../../data/config'
import api from '../../../../services/api'

export default function Navbar() {
	const [user, setUser] = useState({})

	useEffect(() => {
		async function getUser() {
			const response = await api.get('/users/thejoaov')
			setUser(response.data)
		}
		getUser()
	}, [])

	return (
		<Wrapper as={Container}>
			<Profile>
				<img src={user.avatar_url} alt={user.name} />
				<Link to="/">{config.author}</Link>
			</Profile>
			<NavbarLinks desktop />
		</Wrapper>
	)
}
