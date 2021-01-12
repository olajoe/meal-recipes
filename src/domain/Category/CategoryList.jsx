import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function CategoryList(props) {
	// const { data: categories } = categoryList()
	const { data, error } = useSWR(
		'https://www.themealdb.com/api/json/v1/1/categories.php'
	)

	if (error) return <h1>Something went wrong!</h1>
	if (!data) return <h1>Loading...</h1>

	return (
		<Table variant="striped" colorScheme="teal">
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
							<Td>
								<Link to={`/category/${category.strCategory}`}>
									{category.strCategory}
								</Link>
							</Td>
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
