import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NotFoundPage } from '../components/NotFound'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

const routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/posts" component={Post} />
			<Route path="/projects" component={Project} />
			<Route component={NotFoundPage} />
		</Switch>
	)
}

export default routes
