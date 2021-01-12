import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import axios from 'axios'

import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

// fetcher for swr
const fetcher = (...args) => axios(...args).then((res) => res.data)

const AppWithRouter = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

ReactDOM.render(
	<React.StrictMode>
		<SWRConfig value={{ fetcher }}>
			<AppWithRouter />
		</SWRConfig>
	</React.StrictMode>,
	rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
