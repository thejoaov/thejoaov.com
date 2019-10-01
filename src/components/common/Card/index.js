import styled from 'styled-components'
import { lighten } from 'polished'

export const Card = styled.div`
	padding: 1rem;
	background: #fff;
	height: 100%;
	transition: all 0.7s;
	border-radius: 3px;

	&:hover {
		background: ${lighten('0.4', '#7159c1')};
	}
`
