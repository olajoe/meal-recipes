import React from 'react'
import { ChakraProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

import Layout from './template/Layout'

const customTheme = merge(theme, {
	colors: {
		brand: {
			900: '#1a365d',
			800: '#153e75',
			700: '#2a69ac',
		},
	},
})

function App() {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Layout />
		</ChakraProvider>
	)
}

export default App
