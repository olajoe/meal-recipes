import React from 'react'
import { Container } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
	return (
		<>
			<Header />
			<Container centerContent minHeight="800px">
				{children}
			</Container>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
