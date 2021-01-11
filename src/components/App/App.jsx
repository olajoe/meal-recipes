import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Layout from '../../template/Layout'
import Routing from '../../routes'

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const theme = extendTheme({ colors })

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Routing />
			</Layout>
		</ChakraProvider>
	)
}

export default App
