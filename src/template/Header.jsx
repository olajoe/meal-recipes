import React, { useState } from 'react'
import { Flex, Text, Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6}>
		{console.log('children:', children)}
		{children}
	</Text>
)

function Header() {
	const [show, setShow] = useState(false)
	const handleToggle = () => setShow(!show)

	const configDisplayMenu = { md: 'flex' }

	return (
		<Flex
			p={4}
			as="nav"
			alignItems="center"
			justify="space-between"
			bgColor="sandybrown"
			wrap="wrap"
		>
			<Box mr={4}>
				<Heading>
					<Link to="/">Meal Recipes</Link>
				</Heading>
			</Box>

			<Box
				display={{ base: 'block', md: 'none' }}
				mr={1}
				onClick={handleToggle}
			>
				<svg
					fill="white"
					width="12px"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</Box>

			<Box
				// display={{ xs: show ? 'block' : 'none', md: 'flex' }}
				display={configDisplayMenu}
				flexGrow={1}
				alignItems="center"
				width={{ xs: 'full', md: 'auto' }}
			>
				<MenuItems>
					<Link to="categories"> Category </Link>
				</MenuItems>
				<MenuItems> Menu2 </MenuItems>
				<MenuItems> Menu3 </MenuItems>
			</Box>
		</Flex>
	)
}

export default Header
