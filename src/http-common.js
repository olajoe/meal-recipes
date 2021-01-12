import axios from 'axios'

export default axios.create({
	baseURL: 'https://www.themealdb.com/api/json/v1/1',
	headers: {
		'Content-type': 'application/json',
	},
})

// const httpClient = (config) => {
// return axios.create(config)
// }

// export default httpClient
