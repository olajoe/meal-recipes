import React, { useState, useEffect } from 'react'

import categoryApi from '../../api/categoryApi'

const CategoryList = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState()
	const [isLoading, setIsLoading] = useState()

	const loadCategories = async () => {
		try {
			const resp = (await categoryApi.getAll()).data
			setData(resp.categories)
		} catch (error) {
			setData(error)
			console.log('error', error)
		}
	}

	useEffect(() => {
		loadCategories()
	}, [])

	return { data }
}

export default CategoryList
