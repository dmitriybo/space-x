import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Index } from '../../pages'
import { Launch } from '../../pages/launch'

export const AppRouter: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Index}/>
		<Route path="/launch/:id" exact component={Launch}/>
	</Switch>
)
