import React from 'react'
import { Container } from '@chakra-ui/core'

import Header from './Header'

function Layout() {
	return (
		<>
			<Header />
			<Container centerContent> Content </Container>
		</>
	)
}

export default Layout
