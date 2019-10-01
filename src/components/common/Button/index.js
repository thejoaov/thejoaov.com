import styled from 'styled-components'
import { darken } from 'polished'
import { themeColor } from '../../../../data/config'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 3px;
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: ${themeColor};
	transition: all 0.3s;

	&:focus {
		outline: none;
	}

	&:hover {
		background: ${darken('0.05', themeColor)};
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
`
