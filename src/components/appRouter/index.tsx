import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { baseUrl } from '../../env'
import { Index } from '../../pages'
import { Launch } from '../../pages/launch'

export const AppRouter: React.FC = () => (
	<Switch>
		<Route path={baseUrl} exact component={Index}/>
		<Route path={`${baseUrl}launch/:id`} exact component={Launch}/>
	</Switch>
)
