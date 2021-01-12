import httpClient from '../http-common'

const getAll = () => {
	return httpClient.get('/categories.php')
}

export default {
	getAll,
}
