import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'

import { categoryList } from '../../hooks/category'

function CategoryList(props) {
	const { data: categories } = categoryList()

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
				{categories.map((category) => {
					return (
						<Tr key={category.idCategory}>
							<Td> {category.strCategory} </Td>
							<Td> {category.strCategoryThumb} </Td>
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
