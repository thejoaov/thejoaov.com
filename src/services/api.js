import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`,
	},
})

export default api
