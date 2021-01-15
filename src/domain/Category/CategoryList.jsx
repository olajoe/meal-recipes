import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import config from '../../config'

const baseUri = config.meal.uri
function CategoryList(props) {
	// const { data: categories } = categoryList()
	const { data, error } = useSWR(`${baseUri}/categories.php`)

	if (error) return <h1>Something went wrong!</h1>
	if (!data) return <h1>Loading...</h1>

	return (
		<Table variant="striped">
			<TableCaption placement="top">Meal categories</TableCaption>
			<Thead>
				<Tr>
					<Th>Name</Th>
					<Th>Thumb</Th>
					<Th>Description</Th>
				</Tr>
			</Thead>
			<Tbody>
				{data.categories.map((category) => {
					return (
						<Tr key={category.idCategory}>
							<Td>{category.strCategory}</Td>
							<Td>
								<img
									src={category.strCategoryThumb}
									alt={category.strCategory}
								></img>
							</Td>
							<Td> {category.strCategoryDescription} </Td>
						</Tr>
					)
				})}
			</Tbody>
		</Table>
	)
}

CategoryList.propTypes = {}

export default CategoryList
