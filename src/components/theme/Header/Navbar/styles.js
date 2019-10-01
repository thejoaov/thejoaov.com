import styled from 'styled-components'
import { themeColor } from 'Data'

export const Wrapper = styled.div`
	/* padding: 1.5rem 0; */
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	text-align: center;
	justify-content: space-between;
	height: 100%;
	a {
		color: #212121;
		transition: all 0.3s;
		&:hover {
			color: ${themeColor};
		}
	}
`
export const Profile = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: flex-start;
	a {
		margin-left: 10px;
		color: #212121;
	}
	img {
		margin-top: 25px;
		padding: 10px;
		height: 50px;
		border-radius: 50%;
	}
`
