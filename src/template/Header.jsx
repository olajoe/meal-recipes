import React, { useState } from 'react'
import { Flex, Text, Box, Heading } from '@chakra-ui/core'

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display="block">
		{children}
	</Text>
)

function Header() {
	const [show, setShow] = useState(false)
	const handleToggle = () => setShow(!show)

	return (
		<Flex
			as="nav"
			alignItems="center"
			justify="space-between"
			bgColor="sandybrown"
			wrap="wrap"
		>
			<Box mr={4}>
				<Heading>Meal Recipes</Heading>
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
				display={{ xs: show ? 'block' : 'none', md: 'flex' }}
				flexGrow={1}
				alignItems="center"
				width={{ xs: 'full', md: 'auto' }}
			>
				<MenuItems> Menu1 </MenuItems>
				<MenuItems> Menu2 </MenuItems>
				<MenuItems> Menu3 </MenuItems>
			</Box>
		</Flex>
	)
}

export default Header
